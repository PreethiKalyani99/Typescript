export class Clock  {
    private hour: number
    private minute: number
  
    constructor(hour: number, minute: number = 0) {
      this.hour = hour
      this.minute = minute
      this.convertTime()
    }
  
    private convertTime(): void {
      let totalMinutes = this.hour * 60 + this.minute
      totalMinutes = ((totalMinutes % 1440) + 1440) % 1440
      this.hour = Math.floor(totalMinutes / 60)
      this.minute = totalMinutes % 60
    }
  
    public toString(): string {
      const hr = this.hour.toString().padStart(2, '0')
      const min = this.minute.toString().padStart(2, '0')
      return `${hr}:${min}`
    }
  
    public plus(minutes: number): Clock {
      return new Clock(this.hour, this.minute + minutes)
    }
  
    public minus(minutes: number): Clock {
      return new Clock(this.hour, this.minute - minutes)
    }
  
    public equals(time : Clock): boolean {
      return this.hour === time.hour && this.minute === time.minute
    }
}
  