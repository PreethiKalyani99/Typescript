function proteinTranslation(rna : string) : string[]{
    const codonAndProtein : {[index: string]: string} = {'AUG': "Methionine", "UUU": "Phenylalanine", "UUC": "Phenylalanine", "UUA": "Leucine", "UUG": "Leucine", "UCU": "Serine", "UCC": "Serine", "UCA": "Serine", "UCG": "Serine", "UAU": "Tyrosine", "UAC": "Tyrosine", "UGU": "Cysteine", "UGC": "Cysteine", "UGG": "Tryptophan", "UAA": "STOP", "UAG": "STOP", "UGA": "STOP"}
    const codons :  RegExpMatchArray | null = rna.match(/.{1,3}/g)
    let protein : string[] = []
    if(!codons){
        return []
    }
    for(let i = 0; i < codons.length; i++){
        if(!codonAndProtein[codons[i]]){
            throw new Error("Invalid codon")
        }
        if(codonAndProtein[codons[i]] === "STOP"){
            return protein
        }
        protein.push(codonAndProtein[codons[i]])
    }
    return protein
}
console.log(proteinTranslation("AUGUUUUCUUAAAUG"))