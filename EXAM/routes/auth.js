const express = require('express')
const passport = require('passport')
const router = express.Router()

// #description    Auth with Google
// #route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// #description    Google auth callback
// #route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res, next) => {
    res.redirect('/dashboard')
  }
) 

// #description Logout User
// #route /auth/logout
router.get('/logout', (req,res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router;