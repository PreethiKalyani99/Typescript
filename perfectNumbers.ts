function factors(n: number) : number[]{
    return [...Array(Math.floor(n / 2)).keys()].map(i => i+1).filter(i => n % i === 0)
}
function classifyNumbers(n: number): string{
    if(n <= 0){
        throw new Error("Classification is only possible for natural numbers.")
    }
    const result = factors(n)
    if(result.length === 1){
        return "deficient"
    }
    const sum = result.reduce((acc, cur) => {
        acc += cur
        return acc
    }, 0)

    if(sum === n){
        return "perfect"
    }
    if(sum > n){
        return "abundant"
    }
    return "deficient"
}

console.log(classifyNumbers(12))