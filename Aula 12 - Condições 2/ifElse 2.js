var agora = new Date()
var horario = agora.getHours()

console.log(`Agora são exatamente ${horario} horas`)
if(horario >= 24){
  console.log('Horario inválido')
}else if ((horario >= 6) && (horario < 12)){
  console.log('Bom dia!')
}else if((horario >= 12) && (horario < 18)){
  console.log('Boa Tarde!')
}else if ((horario >= 18) && (horario <= 24)){
  console.log("Boa Noite!")
}else {
  console.log("Boa Madrugada!")
}