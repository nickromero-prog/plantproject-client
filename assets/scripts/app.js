'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword) // need to put event handler here)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#game-board').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
})
