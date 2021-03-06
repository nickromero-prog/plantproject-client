'use strict'

const store = require('./../store')

const createPlantSuccess = function (response) {
  $('#message').text('You created a plant')
  $('#create-plant-form').trigger('reset')
}

const createPlantFailure = function (res) {
  $('#message').text('Woops, try again')
  $('#create-plant-form').trigger('reset')
}

const getPlantsSuccess = function (res) {
  const plants = res.plants
  $('#message').text('Garden Shed: Plants')
  $('#delete-plant-form').show()
  $('#update-plant-form').show()
  $('#delete-pot-form').hide()
  $('#update-pot-form').hide()

  plants.forEach(function (currentPlant) {
    const plantsHTML = (`
      <br>
      <br>
      <p style="text-align:center;">ID: ${currentPlant._id}</p>
      <p style="text-align:center;">name: ${currentPlant.name}</p>
      <p style="text-align:center;">light: ${currentPlant.light}</p>
      <p style="text-align:center;">water: ${currentPlant.water}</p>
      <br>
      `)
    $('#message').append(plantsHTML)
  })
}

const getPlantsFailure = function (res) {
  $('#message').text('Woops, try again or create some plants')
}

const deletePlantSuccess = function (res) {
  $('#message').text('You successfully deleted a plant!')
  $('#delete-plant-form').trigger('reset')
}

const deletePlantFailure = function (res) {
  $('#message').text('Woops try again to delete that plant')
  $('#delete-plant-form').trigger('reset')
}

const updatePlantSuccess = function (res) {
  $('#message').text('You updated the plant')
  $('#update-plant-form').trigger('reset')
}

const updatePlantFailure = function (res) {
  $('#message').text('Woops try again')
  $('#update-plant-form').trigger('reset')
}

module.exports = {
  createPlantSuccess,
  createPlantFailure,
  getPlantsSuccess,
  getPlantsFailure,
  deletePlantSuccess,
  deletePlantFailure,
  updatePlantSuccess,
  updatePlantFailure
}
