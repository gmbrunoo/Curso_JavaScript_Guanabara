function carregar(){
  var msg = document.getElementById("msg");
  var imagem = document.getElementById("imagem");
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${hora} horas`

  if(hora >= 0 && hora < 12){
    imagem.src = 'manha.jpg'
    document.body.style.background = '#c58e8f'
  } else if (hora >= 12 && hora < 18) {
    imagem.src = 'tarde.jpg'
    document.body.style.background = '#94373a'
  } else{
    imagem.src = 'noite.jpg'
    document.body.style.background = '#012439'
  }
}