function gigaSecond(time: Date) : Date {
    let timeInMs = time.getTime()
    const gigaSecond = 1e9 * 1000
    let dateAfterAGigaSecond = timeInMs + gigaSecond
    return new Date(dateAfterAGigaSecond)
}
console.log(gigaSecond(new Date(Date.parse('2011-04-25'))))

// CLASS

export class Gigasecond {
    private dateAfterAGigaSecond: Date
    
    constructor(time : Date){
      this.dateAfterAGigaSecond = this.generateTime(time)
    }
    generateTime(time: Date): Date{
       const timeInMs = time.getTime()
      const gigaSecond = 1e9 * 1000
      const dateAfterAGigaSecond = timeInMs + gigaSecond
      return new Date(dateAfterAGigaSecond)
    }
    public date(): Date {
      return this.dateAfterAGigaSecond
    }
}
  