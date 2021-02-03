// Fatorial comum

function fatorial(m){
  let fat = 1
  for (let i = m; i > 1; i--) {
    fat *= i
  }
  return fat
}

console.log(fatorial(5))

// Fatorial recursivo (função chama ela mesma)

function fatorial(n){
  if (n==1){
    return 1;
  }else{
    return n * fatorial(n-1)
  }
}

console.log(fatorial(4))

/*
 
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!
4! = 4 x 3!
...
1! = 1
n! = n x (n-1)!

*/