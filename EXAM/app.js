const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('./configuration/db')

//load config
dotenv.config({path: './configuration/config.env' })

//Passport Config
require('./configuration/passport')(passport)

connectDB()

const app = express()

//Body
app.use(express.urlencoded({extended: false }))
app.use(express.json())

//Method Override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  })
)


//User Login
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Handlebars Helpers
const {formatDate} = require('./helpers/hbs')


//Handlebars
app.engine(
    '.hbs',
    exphbs.engine({ 
      helpers: {
        formatDate,
    },
      defaultLayout: 'main',
      extname: '.hbs',
    })
  )
  app.set('view engine', '.hbs')

// Sessions
app.use(session({
  secret:'keyboard cat',
  resave: false,
  saveUninitilized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI })
  })
);

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// Static Folder
app.use(express.static(path.join(__dirname,  'public ')))

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))


const PORT = process.env.PORT || 2400

app.listen(
    PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`))