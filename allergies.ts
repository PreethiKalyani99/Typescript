interface AllergiesList{
    [index: string]: number
  }
  
  export class Allergies {
    allergenIndex: number
    allergies : AllergiesList
    constructor(allergenIndex: number) {
      this.allergenIndex = allergenIndex
      this.allergies = {
        'eggs'         :   1,
        'peanuts'      :   2,
        'shellfish'    :   4,
        'strawberries' :   8,
        'tomatoes'     :  16,
        'chocolate'    :  32,
        'pollen'       :  64,
        'cats'         : 128,
      }
    }
  
    public list(): string[] {
      return Object.keys(this.allergies).filter((allergy) => this.allergicTo(allergy))
    }
  
    public allergicTo(allergen: string): boolean {
        return !!(this.allergies[allergen] & this.allergenIndex)
    }
}

const allergies = new Allergies(2)
console.log(allergies.allergicTo('eggs'))
console.log(allergies.allergicTo('peanuts'))
console.log(allergies.list())
  