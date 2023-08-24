const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('AKS practicing')
})

app.get('/lazy', (req, res) => {
  res.send('blue-green deployment')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})