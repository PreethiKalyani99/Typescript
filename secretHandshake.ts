// function reverseArray(arr: string[]): string[]{
//     let newArr: string[] = []
//     for(let i = arr.length - 1; i >= 0; i--){
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// function secretHandshake(num: number): string[]{
//  let binaryValue: string = num.toString(2)
//  let arr : string[] = []

//     for(let i = binaryValue.length -  1; i >= 0; i--){
//         if(binaryValue[i] === '1'){
//             if(i === binaryValue.length - 1){
//                 arr.push("wink")
//             }
//             if(i === binaryValue.length - 2){
//                 arr.push("double blink")
//             }
//             if(i === binaryValue.length - 3){
//                 arr.push("close your eyes")
//             }
//             if(i === binaryValue.length - 4){
//                 arr.push("jump")
//             }
//             if(i === binaryValue.length - 5){
//                 return reverseArray(arr)
//             }
//         }
//     }
//     return arr
// }


function secretHandshake(num: number): string[]{
    let binaryValue: string = num.toString(2)
    let arr: string[] = []
    while(binaryValue.length < 5){
        binaryValue = "0" + binaryValue
    }
    if(binaryValue[4] === '1'){
        arr.push("wink")
    }
    if(binaryValue[3] === '1'){
        arr.push('double blink')
    }
    if(binaryValue[2] === '1'){
        arr.push("close your eyes")
    }
    if(binaryValue[1] === "1"){
        arr.push("jump")
    }
    if(binaryValue[0] === '1'){
        arr.reverse()
    }
    return arr
}
console.log(secretHandshake(26)) 
console.log(secretHandshake(0))
console.log(secretHandshake(9))
console.log(secretHandshake(15))
