const express = require('express')
const router = express.Router()
const {ensureAuth,} = require('../middleware/auth')

const Transfer = require('../models/Transfer')

// #description    Show Transaction page
// #route   GET /transaction/add
router.get('/add', ensureAuth, (req, res) => {
  res.render('stories/add')

  })

  // #description Process add transaction
  // #route   POST /transaction/add
router.post('/', ensureAuth, async (req, res) => {
    try {
          req.body.user = req.user.id
          await Transfer.create(req.body)
          res.redirect('/dashboard')
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }

  })


  //#desc    Show all stories
  //#route   GET /stories
  router.get('/', ensureAuth, async (req, res) => {
    try {
      const stories = await Transfer.find({ transaction: 'Debit' })
        .populate('user')
        .sort({ createdAt: 'desc' })
        .lean()
  
      res.render('stories/index', {
        stories,
      })
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })


  // #description    Delete Transaction
  // #route   Delete/transaction/id
  router.delete('/:id', ensureAuth, async (req, res) => {
    try {
      await Transfer.remove({ _id: req.params.id })
      res.redirect('/dashboard')
    } catch (err) {
      console.error(err)
      return res.render('error/500')
    }
  })

module.exports = router