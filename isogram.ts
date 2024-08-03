function isIsogram(str: string): boolean {
    return !(/([a-z]).*\1/g.test(str.toLowerCase()))
}