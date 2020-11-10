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

const onGetPlants = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.getPlants(data)
    .then(ui.getPlantsSuccess)
    .catch(ui.getPlantsFailure)
}

const onDeletePlant = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deletePlant(data)
    .then(ui.deletePlantSuccess)
    .catch(ui.deletePlantFailure)
}

module.exports = {
  onCreatePlant,
  onGetPlants,
  onDeletePlant
}
