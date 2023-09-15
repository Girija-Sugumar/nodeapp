const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Jenkins Kubernetes Deploy')
})

app.get('/app', (req, res) => {
  res.send('Jenkins Pipeline with kubernetes configuration')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
