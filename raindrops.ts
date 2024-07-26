function rainDrops(n: number): string{
    const isDivisibleBy3 = n % 3 === 0
    const isDivisibleBy5 = n % 5 === 0
    const isDivisibleBy15 = n % 15 === 0
    const isDivisibleBy7 = n % 7 === 0
    
    if(isDivisibleBy15 && isDivisibleBy7){
        return "PlingPlangPlong"
    }
    if(isDivisibleBy15){
        return "PlingPlang"
    }
    if(isDivisibleBy5 && isDivisibleBy7){
      return "PlangPlong"
    }
    if(isDivisibleBy3 && isDivisibleBy7){
        return "PlingPlong"
    }
    if(isDivisibleBy3){
        return "Pling"
    }
    if(isDivisibleBy5){
        return "Plang"
    }
    if(isDivisibleBy7){
        return "Plong"
    }
    return n.toString()
}


//ANOTHER METHOD

function rainDropsAlternate(n: number): string{
    const isDivisibleBy3 = n % 3 === 0
    const isDivisibleBy5 = n % 5 === 0
    const isDivisibleBy7 = n % 7 === 0
    let str : string = ''
    if(isDivisibleBy3){
        str += "Pling"
    }
    if(isDivisibleBy5){
        str += "Plang"
    }
    if(isDivisibleBy7){
        str += "Plong"
    }
    if(str === ''){
        return n.toString()
    }
    return str
}