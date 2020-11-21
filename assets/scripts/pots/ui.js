'use strict'

// const store = require('./../store')

const createPotSuccess = function (response) {
  $('#message').text('You created a pot')
  $('#create-pot-form').trigger('reset')
}

const createPotFailure = function (res) {
  $('#message').text('Woops, try again')
  $('#create-pot-form').trigger('reset')
}

const getPotsSuccess = function (res) {
  const pots = res.pots
  $('#message').text('Garden Shed: Pots')
  $('#delete-pot-form').show()
  $('#update-pot-form').show()
  pots.forEach(function (currentPot) {
    const potsHTML = (`
      <br>
      <br>
      <p style="text-align:center;">ID: ${currentPot._id}</p>
      <p style="text-align:center;">name: ${currentPot.color}</p>
      <p style="text-align:center;">light: ${currentPot.size}</p>
      <br>
      `)
    $('#message').append(potsHTML)
  })
}

const getPotsFailure = function (res) {
  $('#message').text('Woops, try again or create some pots')
}

const deletePotSuccess = function (res) {
  $('#message').text('You successfully deleted a pot!')
  $('#delete-pot-form').trigger('reset')
}

const deletePotFailure = function (res) {
  $('#message').text('Woops try again to delete that pot')
  $('#delete-pot-form').trigger('reset')
}

const updatePotSuccess = function (res) {
  $('#message').text('You updated the pot')
  $('#update-pot-form').trigger('reset')
}

const updatePotFailure = function (res) {
  $('#message').text('Woops try again')
  $('#update-pot-form').trigger('reset')
}

module.exports = {
  createPotSuccess,
  createPotFailure,
  getPotsSuccess,
  getPotsFailure,
  deletePotFailure,
  deletePotSuccess,
  updatePotSuccess,
  updatePotFailure
}
