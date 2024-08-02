function acronym(phrase : string): string{
    // const arr = phrase.replace(/-/g, ' ').split(' ')

    // return arr.reduce((acc, cur) => {
    //     if(cur.includes(':')){
    //         acc += cur[0]
    //         return acc
    //     }
    //     if(cur.match(/[A-Z]/g)){
    //         acc += cur.replace(/,|[a-z]/g, '')
    //         return acc
    //     }
    //     else{
    //         acc += cur[0].toUpperCase()
    //         return acc
    //     }
    // }, '')
    return (phrase.match(/[A-Z]+[a-z]*|[a-z]+/g) || []).map((word : string) => word[0].toUpperCase()).join('') // Alternate method


}

console.log(acronym("Portable Network Graphics"))
console.log(acronym("Ruby on Rails"))
console.log(acronym("HyperText Markup Language"))
console.log(acronym("First In, First Out"))
console.log(acronym("PHP: Hypertext Preprocessor"))
console.log(acronym("Complementary metal-oxide semiconductor"))