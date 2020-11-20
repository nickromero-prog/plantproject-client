'use strict'

const config = require('../config')
const store = require('../store')

const createPot = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pots',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

const getPots = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pots',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

const deletePot = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pots/' + data.ID,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

const updatePot = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pots/' + data.Id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  createPot,
  getPots,
  updatePot,
  deletePot
}
