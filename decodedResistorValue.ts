import { COLORS } from "./colorCode";

function decodedResistorValue(colors : string[]): string{
    const color1 = COLORS.indexOf(colors[0]).toString()
    const color2 = COLORS.indexOf(colors[1]).toString()
    const color3 = COLORS.indexOf(colors[2])

    const str = color1 + color2
    const value = Number(str) * Math.pow(10, color3)
    if(value >= 1000 && value < 1000000){
        return (Number(value)/1000) + ' kiloohms'
    }
    else if(value >= 1000000 && value < 1000000000){
        return (Number(value)/1000000) + ' megaohms'
    }
    else if(value >= 1000000000){
        return (Number(value)/1000000000) + ' gigaohms'
    }
    else{
        return value + ' ohms'
    }
}

console.log(decodedResistorValue(['red', 'black', 'red']))
console.log(decodedResistorValue(['white', 'white', 'white']))
console.log(decodedResistorValue(['blue', 'violet', 'blue']))
console.log(decodedResistorValue(['black', 'brown', 'black']))