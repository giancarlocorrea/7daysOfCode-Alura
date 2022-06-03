const opcaoArea = prompt('Deseja ir para qual área: 1-Front-End, 2-Back-End?')
let opcaoLinguagem = ''

if (opcaoArea == 1) {
  opcaoLinguagem = prompt(
    'Quer aprender React? Digite 1. Mas se quiser aprender Vue digite 2.'
  )
} else if (opcaoArea == 2) {
  opcaoLinguagem = prompt(
    'Quer aprender C#? Digite 3. Mas se quiser aprender Java digite 4.'
  )
  console.log(`${opcaoLinguagem}`)
}

let opcaoArea2 = prompt(
  `Gostaria de seguir se especializando na área escolhida? - 1\nOu seguir se desenvolvendo para se tornar Full Stack na área escolhida? - 2`
)

if (opcaoArea2 == 1) {
  alert(`Legal, continue evoluindo na área escolhida`)
} else if (opcaoArea2 == 2) {
  alert(`Parabéns, é muito promissora e fará você avançar na carreira`)
}

let success = false
while (!success) {
  let opcaoNova = ''
  opcaoLinguagem = prompt(
    `Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' `
  )
  if (opcaoLinguagem == 'ok') {
    opcaoNova = prompt('Qual tecnologia?')
    alert(`Muito bom!! <${opcaoNova}> é interessante.`)
    success = false
  } else success = true
}
