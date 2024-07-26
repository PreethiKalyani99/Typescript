function wordCount(str: string):Map<string, number>{
    const newStr = str.replace(/[,":!.&@$%^&?\n]/g, ' ')
        .replace(/(?<!\w)'|'(?!\w)/g, '')

    const strArray = newStr.split(/\s/).filter(word => word.length > 0)
    let occurrences : {[index: string]: number} = {}

    strArray.forEach((word : string) => {
        const lowerCaseWord = word.toLowerCase()
        if(occurrences.hasOwnProperty(lowerCaseWord)){
            occurrences[lowerCaseWord]++
        }
        else{
            occurrences[lowerCaseWord] = 1
        }
    }) 

    const sortedOccurrences = Object.keys(occurrences)
        .sort()
        .map(key => [key, occurrences[key]] as [string, number])

    return  new Map<string, number>(sortedOccurrences)
}
console.log(wordCount(`reserved words like constructor and toString ok?`))
console.log(wordCount(`That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`))