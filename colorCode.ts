export const colorCode = (color : string): number | undefined => {
    if(!color){
        return
    }
    return COLORS.indexOf(color)
  }
  
export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

console.log(colorCode('black'))
console.log(colorCode('orange'))
console.log(colorCode('white'))
  