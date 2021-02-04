
let num = document.getElementById('txtNum');
let select = document.getElementById('selTab');
let res = document.getElementById('res');
let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true;
  }else {
    return false;
  }
}

function inLista(n, l){
  if (l.indexOf(Number(n)) != -1){
    return true;
  } else {
    return false;
  }
}

function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `O valor ${num.value} foi adicionado`;
    select.appendChild(item)
    res.innerHTML = ""
  }else {
    alert("Valor inválido ou ja pertence a lista")
  }
  num.value = "";
  num.focus();
}

function finalizar(){
  if (valores.length == 0) {
    alert("Adicione valores antes de finalizar")
  }else {
    let tot = valores.length;

    let maior = valores[0]
    let menor = valores[0]

    let soma = 0
    let media = 0

    for (let posicao in valores) {

      soma += valores[posicao]
      media = soma / tot

      if (valores[posicao] > maior)
        maior = valores[posicao]
      if (valores[posicao] < menor)
        menor = valores[posicao]
    }

    res.innerHTML = ""
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor inserido é ${maior}.</p>`
    res.innerHTML += `<p>O menor valor inserido é ${menor}.</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    
  }
}