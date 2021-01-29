
function update(){
  var ini = document.getElementById('txtInicio')
  var fim = document.getElementById('txtFim')
  var passo = document.getElementById('txtPasso')
  var res = document.getElementById('res')

  if(ini.value.length <= 0 || passo.value.length <= 0 || fim.value.length <= 0){
    alert('[ERROR] faltam dados')
  }else{
    res.innerHTML = `Contando: <br>`
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(p <= 0){
      alert('[ERROR] Passo inválido! Considerando passo 1')
      p = 1
    }

    // contagem positiva
    if ( i < f) {
      for(var c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F449} `
      }
    // contagem negativa
    } else {
      for (var c = i; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
  
}