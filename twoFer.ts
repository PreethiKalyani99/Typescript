function twoFer(name : any): string{
    if(!name){
        return 'One for you, one for me.'
    }
    return `One for ${name}, one for me.`
}
console.log(twoFer(''))
console.log(twoFer(null))
console.log(twoFer(undefined))
console.log(twoFer('Preethi'))