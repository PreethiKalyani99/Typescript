function binarySearch(arr: number[], num: number, start: number = 0, end: number = arr.length - 1):number | undefined{
    if(start > end){
        return
    }
    const midValue = Math.floor((start + end) / 2)
    if(arr[midValue] === num){
      return midValue
    }
    if(arr[midValue - 1] === num){
        return midValue - 1
    }
    if(arr[midValue + 1] === num){
        return midValue + 1
    }
    if(arr[midValue] > num){
      return binarySearch(arr, num,  start, midValue - 1)
    }
    if(arr[midValue] < num){
      return binarySearch(arr, num, midValue + 1, end)
    }
  }
  
  export function find(haystack: number[], needle: number): number | undefined {
    const newArr: number[] = haystack.sort((a:number,b:number) => a - b)
    const result =  binarySearch(newArr, needle)
    if(result === undefined){
        throw new Error("Value not in array")
    }
    return result
}

console.log(find([1, 3], 0))