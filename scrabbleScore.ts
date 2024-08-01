interface OldObject {
    [index : string] : string[]
}

interface NewObject {
    [index: string] : number
}

const scores : OldObject = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  }

function scrabbleScore(input: string = ''): number{
    const obj : NewObject = Object.keys(scores).reduce((acc: NewObject, cur: string): NewObject => {
        scores[cur].forEach((letter) => {
            acc[letter.toLowerCase()] = Number(cur)
        })
        return acc
    }, {} )

    return input.split('').reduce((acc, cur) => {
        acc += obj[cur.toLowerCase()] 
        return acc
    }, 0)
}


console.log(scrabbleScore("street"))
console.log(scrabbleScore("OXYPHENBUTAZONE"))
console.log(scrabbleScore('a'))
console.log(scrabbleScore(undefined))