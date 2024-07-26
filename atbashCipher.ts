const alphabets = "abcdefghijklmnopqrstuvwxyz"

export function encode(plainText: string): string {
  let str : string = ''
  const newStr = plainText.replace(/[,.!\s]/g, '')
  for(let i = 0; i < newStr.length; i++){
    if(i > 0 && i % 5 === 0){
      str += ' '
    }
    if(/\d/.test(newStr[i])){
      str += newStr[i]
    }
    else{
      let index = alphabets.indexOf(newStr[i].toLowerCase()) + 25
      if(index > 25){
        index = 25 - alphabets.indexOf(newStr[i].toLowerCase())
      }
      str += alphabets[index]
    }
  }
  return str
}

console.log(encode("test"))
console.log(encode("x123 yes"), "encode")
console.log(encode("Testing,1 2 3, testing."), "encode")

function decode(cipherText: string): string{
  const newStr = cipherText.replace(/[\s]/g, '')
  let str: string = ''
  for(let i = 0; i < newStr.length; i++){
    if(/\d/.test(newStr[i])){
      str += newStr[i]
    }
    else{
      const index = 25 - alphabets.indexOf(newStr[i])
      str += alphabets[index]
    }
  }
  return str
}

console.log(decode("gvhg"), "decode")
console.log(decode("gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt"), "decode")
console.log(decode("gvhgr mt123 gvhgr mt"), "decode")
