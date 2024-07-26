export class Squares {
    private sumSquare : number = 0
    private squareSum : number = 0
    
    constructor(count: number) {
      let sum: number = 0
      for(let i = 1; i <= count; i++){
        sum += i
        this.sumSquare += i * i
      }
      this.squareSum = sum * sum
    }
  
    get sumOfSquares(): number {
      return this.sumSquare
    }
  
    get squareOfSum(): number {
      return this.squareSum
    }
  
    get difference(): number {
      return this.squareSum - this.sumSquare
    }
}
  