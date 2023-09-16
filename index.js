const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Jenkins Kubernetes Deployments')
=======
  res.send('Jenkins Kubernetes Deploymentss')
>>>>>>> 3d94ba3aae61700fd11378639402a665af18d265
})

app.get('/app', (req, res) => {
  res.send('Jenkins Pipeline with kubernetes configuration in windows')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
