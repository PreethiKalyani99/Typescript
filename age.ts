function age(planet: string, seconds: number) : number {
    const year = seconds / 31557600

    switch (planet.toLowerCase()) {
        case 'mercury':
            return parseFloat((year / 0.2408467).toFixed(2))
        case 'venus':
            return parseFloat((year /  0.61519726).toFixed(2))
        case 'earth':
            return parseFloat((year / 1).toFixed(2))
        case 'mars':
            return parseFloat((year / 1.8808158).toFixed(2))
        case 'jupiter':
            return parseFloat((year / 11.862615).toFixed(2))
        case 'saturn':
            return parseFloat((year / 29.447498).toFixed(2))
        case 'uranus':
            return parseFloat((year / 84.016846).toFixed(2))
        case 'neptune':
            return parseFloat((year / 164.79132).toFixed(2))
        default:
            return -1
    }
}

console.log(age('earth', 1000000000))