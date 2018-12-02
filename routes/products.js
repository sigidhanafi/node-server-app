const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('get all products'))

router.get('/detail', (req, res) => res.send('get detail product'))

module.exports = router