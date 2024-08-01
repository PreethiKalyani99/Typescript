interface NucleotideCount {
   [index: string] : number
}

function nucleotideCounts(dna: string): NucleotideCount{
    let nucleotidesCount: NucleotideCount= {'A': 0, 'C': 0, 'G': 0, 'T': 0}
  
    for(let i = 0; i < dna.length; i++){
        if(/[^ACGT]/.test(dna)){
            throw new Error("Invalid nucleotide in strand")
        }
        nucleotidesCount[dna[i]] += 1
    }
    return nucleotidesCount
}

console.log(nucleotideCounts("GGGGGGG"))
console.log(nucleotideCounts('ACQRAC'))