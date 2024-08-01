export function hammingDistance(left: string, right: string): number {
    if(left.length !== right.length){
      throw new Error("DNA strands must be of equal length.")
    }
    if(left.length === 0){
        return 0
    }
    let difference = 0
  
    for(let i = 0; i < left.length; i++){
      if(left[i] !== right[i]){
        difference += 1
      }
    }
    return difference
}

console.log(hammingDistance('GGACTGAAATCTG', 'GGACTGAAATCTG'))
console.log(hammingDistance('G', 'T'))
console.log(hammingDistance('GGACGGATTCTG', 'AGGACGGATTCT'))
console.log(hammingDistance('', ''))
  