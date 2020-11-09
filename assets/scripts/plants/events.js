'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreatePlant = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createPlant(data)
    .then(ui.createPlantSuccess)
    .catch(ui.createPlantFailure)
}

module.exports = {
  onCreatePlant
}
