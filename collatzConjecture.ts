export function steps(count: number): number {
    if(count <= 0 || (count % 1 !== 0)){
        throw new Error("Only positive integers are allowed")
    }
    
    let stepsToReach1 = 0
    while (count > 1){
        if(count % 2 === 0){
            count = count / 2
        } 
        else{
            count = (3 * count) + 1
        }
        stepsToReach1++
    }
    return stepsToReach1
    
}

console.log(steps(1000000))
console.log(steps(1))
console.log(steps(12))
 