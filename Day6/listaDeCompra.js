let frutas = []
let laticinios = []
let congelados = []
let doces = []
let itemLista = ''
let categoria = ''
let numItens = 0
let resposta = true

//função para Adicionar um item na Lista de Compras
function addArray(arr, item, category) {
  if (categoria == category) {
    arr.push(item)
    numItens++
    resposta = true
  }
}

//função para Remover um item da Lista de Compras
function removeArray(array, item) {
  const pos = array.indexOf(item)
  if (pos == -1) {
    return pos
  }
  array.splice(pos, 1)
  numItens--
}

//função para Mostrar a Lista de Compras
function mostraLista() {
  return `Frutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}`
}

// Loop para adicionar os itens na lista
while (resposta) {
  const opcao = prompt(
    `Digite a opção\n1- Adicionar um item na lista de compras\n2- Remover um item da lista de compras\n3- Mostrar Lista de Compras\n4-Sair`
  )

  if (opcao == 4) break
  else if (opcao == 3) {
    if (numItens > 0) alert(`!! Lista de Compras !!\n\n${mostraLista()}`)
    else alert('Sua lista de compras está vazia. Adicione algum item')
  }
  if (opcao == 1) {
    itemLista = prompt('Qual comida você deseja adicionar?')

    if (itemLista.trim() != '') {
      categoria = prompt(
        `Esse produto é de qual categoria?\n\n1-Frutas  2-Laticínios  3-Congelados  4-Doces`
      )
      addArray(frutas, itemLista, 1)
      addArray(laticinios, itemLista, 2)
      addArray(congelados, itemLista, 3)
      addArray(doces, itemLista, 4)
    }
  }
  if (opcao == 2) {
    if (numItens > 0) {
      itemLista = prompt(`Qual item gostaria de remover?\n\n${mostraLista()}`)
      if (removeArray(frutas, itemLista) == -1)
        if (removeArray(laticinios, itemLista) == -1)
          if (removeArray(congelados, itemLista) == -1)
            if (removeArray(doces, itemLista) == -1)
              alert('Item não encontrado. Digite novamente')
    } else alert(`Sua lista está vazia. Adicione um item para depois removê-lo`)
  }

  itemLista = ''
  categoria = ''
}

/*// Imprime os itens de cada array
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
}*/
