export class Triangle {
    private a : number
      private b: number
      private c : number
      constructor(...sides : number[]) {
        this.a = sides[0]
        this.b = sides[1]
        this.c = sides[2]
      }
      validateSides(): boolean {
        if(this.a === 0 && this.b === 0 && this.c === 0){
          return false
        }
        if(((this.a + this.b) >= this.c) && ((this.b + this.c) >= this.a) && ((this.a + this.c) >= this.b)){
          return true
        }
        return false
      }
      get isEquilateral() : boolean{
          return ((this.a === this.b) && (this.b === this.c)) && this.validateSides()
      }
    
      get isIsosceles() : boolean{
          return ((this.a === this.b) || (this.b === this.c) || (this.c === this.a)) && this.validateSides()
      }
    
      get isScalene() : boolean{
          return ((this.a !== this.b) && (this.b !== this.c) && (this.c !== this.a)) && this.validateSides()
      }
  }
  

const triangle = new Triangle(0.7, 0.5, 0.5)
console.log(triangle.isEquilateral)
  