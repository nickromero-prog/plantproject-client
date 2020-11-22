'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreatePot = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createPot(data)
    .then(ui.createPotSuccess)
    .catch(ui.createPotFailure)
}

const onGetPots = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.getPots(data)
    .then(ui.getPotsSuccess)
    .catch(ui.getPotsFailure)
}

const onDeletePot = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deletePot(data)
    .then(ui.deletePotSuccess)
    .catch(ui.deletePotFailure)
}

const onUpdatePot = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updatePot(data)
    .then(ui.updatePotSuccess)
    .catch(ui.updatePotFailure)
}

module.exports = {
  onCreatePot,
  onGetPots,
  onDeletePot,
  onUpdatePot
}
