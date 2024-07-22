function hey(message: string): string{
    const isAsking = (msg: string) => msg[msg.length - 1] === '?'  
    const isShouting = (msg: string) => msg === msg.toUpperCase() && !Number(msg.replace(/[?!, ]/g, ''))
    const isSilence = (msg: string) => (msg.trim()).length === 0 || msg.includes('\t')

    if(isSilence(message)){
        return "Fine. Be that way!"
    }
    if(isShouting(message)){
        if(isAsking(message.trim())){
            return "Calm down, I know what I'm doing!"
        }
        return "Whoa, chill out!"
    }
    if(isAsking(message.trim())){
        return 'Sure.'
    }
    return "Whatever."
}

console.log(hey("WATCH OUT!"))
console.log(hey("Does this cryogenic chamber make me look fat?"))
console.log(hey("WHAT THE HELL WERE YOU THINKING?"))
console.log(hey("1, 2, 3 GO!"))
console.log(hey("1, 2, 3"))
console.log(hey("        "))
console.log(hey("\t\t\t\t\t\t\t"))
console.log(hey('         hmmmmmmm...'))