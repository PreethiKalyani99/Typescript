export function isPangram(str: string): any {
    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    for (const alphabet of alphabets) {
        if (!str.toLowerCase().includes(alphabet)) {
            return false
        }
    }
    return true
}
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))
console.log(isPangram("the quick brown fox jumps over the lazy dog"))
console.log(isPangram("kewij"))

  