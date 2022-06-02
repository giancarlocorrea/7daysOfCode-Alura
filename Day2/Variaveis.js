const nome = prompt('Qual seu nome?').trim()
const idade = prompt('Quantos anos você tem?').trim()
const linguagem = prompt(
  'Qual linguagem de programação você está estudando?'
).trim()
const opcao = 0
let success = false

while (!success) {
  if (nome != '' && idade != '' && linguagem != '') success = true
  else
    alert('Preencha os campos corretamente. \nA pesquisa começará novamente!')
}

alert(`Olá ${nome}, você tem ${idade} e está aprendendo ${linguagem}.`)

opcao = prompt(
  `Você gosta de estudar ${linguagem}?\nResponda com o número 1 para SIM ou 2 para NÃO.!!`
)
if (opcao == 1)
  alert('Muito bom! Continue estudando e você terá muito sucesso.')
else if (opcao == 2)
  alert('Ahh que pena... Já tentou aprender outras linguagens?')
