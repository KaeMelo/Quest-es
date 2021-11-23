var express = require ("express")
var listaDePessoas = [
  {
    Nome: "Luna", 
    Idade: 28,
  },
  {
    Nome: "Kakau",
    Idade: 20,
  },
  {
    Nome: "Lucas",
    Idade: 24,
    Sexo: "M",
  }
  ]
var app = express()
app.get ("/", (reg, res) => {
  res.send(listaDePessoas)
})
app.listen(3000)
