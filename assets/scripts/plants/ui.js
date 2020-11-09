'use strict'

const store = require('./../store')

const createPlantSuccess = function (response) {
  $('#message').text('You created a plant')
  $('#create-plant-form').trigger('reset')
}

const createPlantFailure = function (response) {
  $('#message').text('Woops, try again')
  $('#create-plant-form').trigger('reset')
}

module.exports = {
  createPlantSuccess,
  createPlantFailure
}
