const express = require('express')
const router = express.Router()
let data = {}

router.get('/', (req, res) => {
  res.json(Object.values(data))
})

function checkBody (req, res, next) {
  if (areAllFieldsValid(req.body)) {
    return next()
  }

  res.status(400).json({ error: true, message: 'Todos os campos são obrigatórios' })
}

function areAllFieldsValid (body) {
  const fields = [body.image, body.brandModel, body.year, body.plate, body.color]
  return fields.every(field => typeof field !== 'undefined' && field !== '')
}

function checkAlreadyRegistered (req, res, next) {
  if (typeof data[req.body.plate.toUpperCase()] !== 'undefined') {
    return res.status(400).json({ 
      error: true, 
      message: `Já existe um carro cadastrado com a placa ${req.body.plate}` 
    })
  }
  next()
}

router.post('/', checkBody, checkAlreadyRegistered, (req, res) => {
  data[req.body.plate.toUpperCase()] = {
    image: req.body.image,
    brandModel: req.body.brandModel,
    year: req.body.year,
    plate: req.body.plate,
    color: req.body.color
  }

  res.json({ message: `O carro com placa ${req.body.plate} foi cadastrado com sucesso` })
})

router.delete('/', (req, res) => {
  delete data[req.body.plate.toUpperCase()]
  res.json({ message: `O carro com placa ${req.body.plate} foi removido com sucesso` })
})

module.exports = router
