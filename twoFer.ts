function twoFer(name : any = 'you'): string{
    return `One for ${name}, one for me.`
}
console.log(twoFer(''))
console.log(twoFer(null))
console.log(twoFer(undefined))
console.log(twoFer('Preethi'))