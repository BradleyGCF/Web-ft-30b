'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;

    for (let i = 0; i < num.length; i++) {
       sum += +num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  if(num == 0) return 0
  else if(num == 1) return 1
  else if(num!= 0 && num!=1){
      let binario = "", resto = 0
      while(parseInt(num)>0){
          resto = parseInt(num%2)
          binario+=resto
          num/=2
      }
      binario = binario.split('').reverse().join('')
      return binario
  }

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}