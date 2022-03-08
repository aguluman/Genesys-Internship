const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

const Transfer = require('../models/Transfer')
// #description    Login/Landing page
// #route   GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
      layout: 'login',
  })
})

// #description    Dashboard
// #route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
   try {
     const stories = await Transfer.find({user: req.user.id}).lean()
     res.render('dashboard', {
      name: req.user.firstName,
      stories
    })
  }catch (err) {
      console.error(err)
      res.render('error/')
    }
})

module.exports = router