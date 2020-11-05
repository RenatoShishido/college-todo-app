const express = require('express')
const app = express()

app.use(express.static('./public'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render("../src/views/auth/index")
})

app.get('/forgot_password', (req, res) => {
  res.render("../src/views/forgot_password/forgot")
})

app.get('/dashboard', (req, res) => {
  res.render("../src/views/dashboard/dashboard")
})

PORT = 8080
app.listen(PORT, () => console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`))
