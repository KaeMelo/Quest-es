var prompt = require("prompt-sync")()

var peso = parseFloat(prompt("Peso: "))
var altura = parseFloat(prompt("Altura: "))

var resultado = peso/(altura*altura)

console.log("resultado: " + `${resultado}`)

if (resultado <= 18.49){
  console.log("Você está abaixo do peso!")
} if (resultado >= 18.5 && resultado <= 24.9){
  console.log("Você está no peso adequado!")
} if (resultado >= 25){
  console.log("Você está acima do peso!")
}
