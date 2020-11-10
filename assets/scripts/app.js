'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./auth/events')
const plantEvents = require('./plants/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword) // need to put event handler here)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#create-plant-form').on('submit', plantEvents.onCreatePlant)
  $('#get-plants-form').on('submit', plantEvents.onGetPlants)
  $('#delete-plant-form').on('submit', plantEvents.onDeletePlant)
})
