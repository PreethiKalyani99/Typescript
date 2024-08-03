function luhnAlgorithm(s: string): boolean{
    if(/[a-z%:#@$-]/g.test(s)){
        return false
    }
    const stringWithNoSpace = s.replace(/\s+/g, '')

    if(stringWithNoSpace.length <= 1){
        return false
    }
    
    return [...stringWithNoSpace].reduce((acc, cur, i, str) => {
        const isOddRight = (str.length - i) % 2 === 0
        const double = (n : number) => ((n * 2) > 9) ? ((n * 2) - 9) : (n * 2)
        return acc + (isOddRight ? double(Number(cur)) : Number(cur))
    }, 0) % 10 === 0
}
console.log(luhnAlgorithm("4539 3195 0343 6467"))
console.log(luhnAlgorithm("1 2345 6789 1234 5678 9012"))
console.log(luhnAlgorithm("055 444 286"))
console.log(luhnAlgorithm("055-444-285"))
console.log(luhnAlgorithm("055 444 285"))
console.log(luhnAlgorithm("091"))
console.log(luhnAlgorithm("109"))