function transform(oldObj: {[index: string]: string[]}) : {[index: string]: number}{
    const k : string[] = Object.keys(oldObj)
    let newObj : {[index: string]: number} = {}

    for(let i = 0; i < k.length; i++){
        oldObj[k[i]].forEach((letter : string) => {
            newObj[letter.toLowerCase()] = Number(k[i])
        })
    }
    const sortedKeys = Object.entries(newObj).sort(([a], [b]) => a.localeCompare(b))
    return Object.fromEntries(sortedKeys)
}

const old = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  }
console.log(transform(old))