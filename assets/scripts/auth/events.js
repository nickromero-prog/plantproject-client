'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault() // event=submit, so preventDefault the submit action
  const form = event.target
  const data = getFormFields(form)// <---storing the input from the form in a variable
  api.signUp(data)// <---the ajax request to the api with the data from the user
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log(event)
  event.preventDefault() // event=submit, so preventDefault the submit action
  const form = event.target
  const data = getFormFields(form)// <---getFormFields(event.target) aquiring data to build object
  api.signIn(data)// <---the ajax request is returning response including the token
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault() // event=submit, so preventDefault the submit action
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
