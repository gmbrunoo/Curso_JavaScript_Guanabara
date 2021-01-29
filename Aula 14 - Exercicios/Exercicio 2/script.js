function tabuada(){
  let num = document.getElementById('txtNum')
  let tab = document.getElementById('selTab')
  if (num.value.length == 0) {
    alert('[ERROR] Insira um numero')
  }else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML= ""
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }

 
}