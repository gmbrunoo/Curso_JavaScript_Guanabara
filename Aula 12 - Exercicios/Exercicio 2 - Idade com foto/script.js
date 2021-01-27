function verificar(){
  var data = new Date()
  var atual = data.getFullYear()
  var fAno = document.getElementById('txtano')
  var res = document.getElementById('res')

  if(fAno.value  <= 0 || Number(fAno.value) > atual){
    alert("[ERROR:] Verifique os dados e tente novamente")
  }else{
    var fSex = document.getElementsByName('radsex')
    var idade = atual - Number(fAno.value)

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    var genero = ''
    if (fSex[0].checked) {
      genero = 'Homem'
        if (idade >=0 && idade < 10){
          img.setAttribute('src', 'crianca-homem.jpg')
        } else if (idade < 21){
          img.setAttribute('src', 'jovem-homem.jpg')
        } else if (idade < 50){
          img.setAttribute('src', 'adulto-homem.jpg')
        } else {
          img.setAttribute('src', 'idoso-homem.jpg')
        }
    }else {
      genero = 'Mulher'
        if (idade >=0 && idade < 10){
          img.setAttribute('src', 'crianca-mulher.jpg')
        } else if (idade < 21){
          img.setAttribute('src', 'jovem-mulher.jpg')
        } else if (idade < 50){
          img.setAttribute('src', 'adulto-mulher.jpg')
        } else {
          img.setAttribute('src', 'idoso-mulher.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}