function romanNummerals(n: number): string{
    const romanNumbers : {[index: string]: number} = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1}
    let roman = ''
    for(const key in romanNumbers){
        while(n >= Number(romanNumbers[key])){
           roman += key 
           n -= Number(romanNumbers[key])
        }
    }
    return roman
}

console.log(romanNummerals(163))