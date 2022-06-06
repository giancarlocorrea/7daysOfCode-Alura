let frutas = []
let laticinios = []
let congelados = []
let doces = []
let itemLista = ''
let categoria = ''
let resposta = true

// Loop para adicionar os itens na lista
while (resposta) {
  let opcao = prompt(
    `Deseja adicionar um item a lista de compras? 1-Sim  2- Não`
  )
  if (opcao == 1) {
    itemLista = prompt('Qual comida você deseja adicionar?')
    if (itemLista.trim() != '') {
      categoria = prompt(`Esse produto é de qual categoria?\n
           1-Frutas  2-Laticínios  3-Congelados  4-Doces`)
      if (categoria == 1) {
        frutas.push(itemLista)
        resposta = true
      }
      if (categoria == 2) {
        laticinios.push(itemLista)
        resposta = true
      }
      if (categoria == 3) {
        congelados.push(itemLista)
        resposta = true
      }
      if (categoria == 4) {
        doces.push(itemLista)
        resposta = true
      }
    }
  } else break
  itemLista = ''
  categoria = ''
}

// Imprime os itens de cada array
if (frutas.length > 0) {
  console.log('Frutas:')
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
  }
}

if (laticinios.length > 0) {
  console.log('Laticínios:')
  for (let i = 0; i < laticinios.length; i++) {
    console.log(laticinios[i])
  }
}

if (congelados.length > 0) {
  console.log('Congelados:')
  for (let i = 0; i < congelados.length; i++) {
    console.log(congelados[i])
  }
}

if (doces.length > 0) {
  console.log('Doces:')
  for (let i = 0; i < doces.length; i++) {
    console.log(doces[i])
  }
}
