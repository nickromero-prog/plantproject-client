'use strict'

const config = require('../config')
const store = require('../store')

const createPlant = function (data) {
  return $.ajax({
    url: config.apiUrl + '/plants',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

const getPlants = function (data) {
  return $.ajax({
    url: config.apiUrl + '/plants',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

const deletePlant = function (data) {
  return $.ajax({
    url: config.apiUrl + '/plants',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE',
    data: data
  })
}
module.exports = {
  createPlant,
  getPlants,
  deletePlant
}
