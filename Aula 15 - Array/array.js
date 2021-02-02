let num = [1,2,5,8,6]

//adicionando valores ao array
// num[5]=10 // seleciona a posição
// num.push(7) // coloca na ultima posição

// num.length // mostra a quantidade de valores do array

// num.sort() // organiza o array

// num.indexOf(5) // pesquisa o valor 5 dentro do array
// caso nao encontre retora -1

var pos = num.indexOf(5)
if (pos == -1) {
  console.log('Valor não encontrado')
} else {
  console.log(`O valor esta na posição ${pos}`)
}

console.log(`========== MEIO COMUM ============`)

var quantidade = num.length
for (var i = 0; i < quantidade; i++){
  console.log(`O valor da posição ${i} é ${num[i]}`)
}

console.log('====================================================')

console.log(`========== MEIO OTMIZADO ============`)
// Código otimizado para array

for (var i in num){
  console.log(`O valor da posição ${i} é ${num[i]}`)
}

console.log(`O vetor tem ${num.length} posições`)
//console.log(`O vetor organizado é ${num.sort} `)