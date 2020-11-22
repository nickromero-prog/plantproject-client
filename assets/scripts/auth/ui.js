'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text(response.user.email + ' signed up successfully')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign up unsuccesful, try again')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) { // response is the response from the api
  $('#message').text('You are signed in as ' + response.user.email)
  store.user = response.user //
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#sign-out-form').show()
  $('#reset-form').show()
  $('#change-password-form').show()
  $('#sign-in-email').text('')
  $('#sign-in-password').text('')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#create-plant-form').show()
  $('#get-plants-form').show()
  $('#create-pot-form').show()
  $('#get-pots-form').show()
}

const signInFailure = function () {
  $('#message').text('Oh no something went wrong, try again or sign-up!')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('You changed your password! But can you remember it? We shall see')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Woops we could not change your password! Try again!')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#message').text('You are signed out! See you later propagator!')
  store.user = null // reset the user to nothing and erase token
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#sign-out-form').hide()
  $('#change-password-form').hide()
  $('#create-plant-form').hide()
  $('#get-plants-form').hide()
  $('#create-pot-form').hide()
  $('#get-pots-form').hide()
  $('#update-plant-form').hide()
  $('#delete-plant-form').hide()
  $('#update-pot-form').hide()
  $('#delete-pot-form').hide()
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#create-plant-form').trigger('reset')
  $('#update-plant-form').trigger('reset')
  $('#delete-plant-form').trigger('reset')
  $('#create-pot-form').trigger('reset')
  $('#delete-pot-form').trigger('reset')
  $('#update-pot-form').trigger('reset')
}

const signOutFailure = function () {
  $('#message').text('Woops we could not sign you out')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#create-plant-form').trigger('reset')
  $('#create-pot-form').trigger('reset')
  $('#delete-pot-form').trigger('reset')
  $('#update-pot-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
