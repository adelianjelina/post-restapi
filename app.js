const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('PROJECT PAB II')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})