type TwoDArray = number[][]

function series(series: string, sliceLength: number): TwoDArray{
    if(series.length === 0){
        throw new Error("series cannot be empty")
    }
    if(sliceLength < 0){
        throw new Error("slice length cannot be negative")
    }
    if(sliceLength === 0){
        throw new Error("slice length cannot be zero")
    }
    if(sliceLength > series.length){
        throw new Error("slice length cannot be greater than series length")
    }

    let arr: TwoDArray = []

    for(let i = 0; i < series.length; i++){
        if(series.length >= (sliceLength + i)){
           const slicedValue: string = series.slice(i, sliceLength+i) 
           arr.push(slicedValue.split('').map(Number))
        }
    }
    return arr
}

console.log(series('12345', 4))