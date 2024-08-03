function anagram(arr: string[], word: string): string[]{
   const sorted = [...word.toLowerCase()].sort().join('')

   return arr.filter(w => w.toLowerCase() !== word.toLowerCase() && sorted === [...w.toLowerCase()].sort().join(''))
}

console.log(anagram(['enlists', 'google', 'inlets', 'banana'], 'listen'))
console.log(anagram(['Eons', 'ONES'],"nose"))
console.log(anagram(['cashregister', 'Carthorse', 'radishes'], "Orchestra"))