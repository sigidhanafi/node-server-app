const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('get all categories'))

router.get('/detail', (req, res) => res.send('get detail category'))

module.exports = router