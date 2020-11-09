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

module.exports = {
  createPlant
}
