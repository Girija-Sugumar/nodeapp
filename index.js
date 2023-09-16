const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('sample kubernetes deploy')
})

app.get('/app', (req, res) => {
  res.send('app function')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
