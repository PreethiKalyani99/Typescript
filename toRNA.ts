function toRNA(dna : string): string{
    const DNA_to_RNA_map: {[index: string]:string} = {'G':'C', 'C':'G', 'T':'A', 'A':'U'}
    const nucleotides = dna.split('')
    let rna = ''
    for(let i = 0; i < nucleotides.length; i++){
        if(!DNA_to_RNA_map[nucleotides[i]]){
            throw new Error("Invalid input DNA.")
        }
        rna += DNA_to_RNA_map[nucleotides[i]]
    }
    return rna
}
console.log(toRNA('TvA'))
console.log(toRNA('GACT'))