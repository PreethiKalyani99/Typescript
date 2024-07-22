export class GradeSchool {
    private rosterData : { [key: number]: string[]}
    constructor(){
      this.rosterData = {}
    }
    roster(): {[key : number]: string[]} {
      const copyData: {[key : number]: string[]} = JSON.parse(JSON.stringify(this.rosterData))
      return copyData
    }
  
    add(name: string, grade: number): void {
      let grades = Object.keys(this.rosterData).map(Number)
      for(const key of grades){
        if(this.rosterData[key]){
          const index = this.rosterData[key].indexOf(name)
          if(index !== -1){
            this.rosterData[key].splice(index, 1)
            break
          }
        }
      }
      if(!this.rosterData[grade]){
        this.rosterData[grade] = [name]
      }
      else{
        this.rosterData[grade].push(name)
        this.rosterData[grade].sort((a,b) => a.localeCompare(b))
      }
    }
  
    grade(grade: number): string[] {
      return this.rosterData[grade] ? [...this.rosterData[grade]] : []  
    }
}
  