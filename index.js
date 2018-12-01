const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static('public'))
// use static file, add prefix path /static
// we can access from http://localhost:3000/static/perfect-code.jpg

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => res.send('Hello post method!'))

app.listen(port, () => { console.log(`App now listen on port ${port}`) })