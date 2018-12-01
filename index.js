const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => res.send('Hello post method!'))

app.listen(port, () => { console.log(`App now listen on port ${port}`) })