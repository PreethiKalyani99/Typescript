export const square = (n: number): bigint => {
  if(n <= 0){
    throw new Error()
  }
  const grains = 2**(n - 1) 
  return BigInt(grains)
}

export const total = (): bigint => {
    let sum = 0n
    for(let i = 1; i <= 64; i++){
        sum += square(i)
    }
    return sum
}
