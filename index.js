require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
  console.log("hello");
  res.send('Users!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})