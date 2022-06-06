let numUm = 0
let numDois = 0
let resultado = 0

let opcao = 0

function soma(a, b) {
  return a + b
}

function subtrai(a, b) {
  return a - b
}

function multiplica(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

while (opcao != 6) {
  opcao = Number(
    prompt(
      'Qual operação deseja realizar?\n1- Somar\n2- Subtrair\n3- Multiplicar\n4- Dividir\n5-Resultado atual\n6-Sair'
    )
  )
  if (opcao == 6) {
    alert('Até a próxima')
    break
  }

  if (opcao != 5 && opcao != 0) {
    numUm = Number(prompt(`Digite o primeiro número:`))
    numDois = Number(prompt(`Digite o segundo número:`))
  }

  switch (opcao) {
    case 1: {
      resultado = soma(numUm, numDois)
      break
    }
    case 2: {
      resultado = subtrai(numUm, numDois)
      break
    }
    case 3: {
      resultado = multiplica(numUm, numDois)
      break
    }
    case 4: {
      resultado = divide(numUm, numDois)
      break
    }
    case (6, 0):
      break
  }
  alert(resultado)
}
