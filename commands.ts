function reverseArray(arr: string[]): string[]{
    let newArr: string[] = []
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i])
    }
    return newArr
}

function commands(num: number): string[]{
 let binaryValue: string = num.toString(2)
 let arr : string[] = []

    for(let i = binaryValue.length -  1; i >= 0; i--){
        if(binaryValue[i] === '1'){
            if(i === binaryValue.length - 1){
                arr.push("wink")
            }
            if(i === binaryValue.length - 2){
                arr.push("double blink")
            }
            if(i === binaryValue.length - 3){
                arr.push("close your eyes")
            }
            if(i === binaryValue.length - 4){
                arr.push("jump")
            }
            if(i === binaryValue.length - 5){
                return reverseArray(arr)
            }
        }
    }
    return arr
}

console.log(commands(2)) 
console.log(commands(0))
console.log(commands(9))
console.log(commands(15))