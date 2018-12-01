const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static('public'))
// use static file, add prefix path /static
// we can access from http://localhost:3000/static/perfect-code.jpg

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => res.send('Hello post method!'))

app.get('/random.text', function (req, res) {
  res.send('random.text')
})

app.get('/ab?cd', (req, res) => res.send('/ab?cd'))
// acd or abcd

app.get('/users/:userId/books/:bookId', (req, res) => {
  return res.send(req.params)
})

app.get('/flights/:from-:to', (req, res) => {
  return res.send(req.params)
})

app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  return next()
})

app.listen(port, () => { console.log(`App now listen on port ${port}`) })