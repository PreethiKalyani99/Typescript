import { COLORS } from "./colorCode";

function decodedValues(colors : string[]): number{
    const color1 = COLORS.indexOf(colors[0]).toString()
    const color2 = COLORS.indexOf(colors[1]).toString()
    return Number(color1 + color2)
}

console.log(decodedValues(['black', 'black']))
console.log(decodedValues(['blue', 'orange']))
console.log(decodedValues(['white', 'black']))