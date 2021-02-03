function somar(n1, n2){
  return n1 + n2
}
console.log(somar(5,9))

// usando parametros opcionais
// caso um dos numeros nao for passado considere o 0

function somarr(n1=0, n2=0){
  return n1 + n2
}
console.log(somarr(5))