function reverse(str: string): string {
    return str.split('').reduce((acc, cur) => cur + acc, '')
}