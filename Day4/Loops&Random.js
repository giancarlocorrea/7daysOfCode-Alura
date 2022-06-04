const minimo = 0
const maximo = 10

//gera o número aleatório
const numAleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
let acertou = false

for (i = 0; i <= 2; i++) {
  let numEscolhido = prompt('Adivinhe qual é o número?')
  if (numAleatorio == numEscolhido) {
    alert(`Parabéns, você acertou! Você escoulheu o número ${numEscolhido}`)
    acertou = true
    break
  } else if (i < 2) {
    alert(`Tente outra vez, você ainda tem ${2 - i} tentativas`)
  }
}

if (!acertou) alert(`!!GAME OVER!!\n\nO número escolhido era ${numAleatorio}`)
