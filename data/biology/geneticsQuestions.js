const geneticsQuestions = [
  {
    text: "What is the basic unit of heredity?",
    options: [
      { text: "Gene", isCorrect: true },
      { text: "Chromosome", isCorrect: false },
      { text: "DNA", isCorrect: false },
      { text: "Nucleotide", isCorrect: false },
    ],
  },
  {
    text: "Which scientist is known as the father of modern genetics?",
    options: [
      { text: "Gregor Mendel", isCorrect: true },
      { text: "Charles Darwin", isCorrect: false },
      { text: "James Watson", isCorrect: false },
      { text: "Francis Crick", isCorrect: false },
    ],
  },
  {
    text: "What are alternative forms of a gene called?",
    options: [
      { text: "Alleles", isCorrect: true },
      { text: "Loci", isCorrect: false },
      { text: "Chromatids", isCorrect: false },
      { text: "Codons", isCorrect: false },
    ],
  },
  {
    text: "What does homozygous mean?",
    options: [
      { text: "Having two identical alleles for a gene", isCorrect: true },
      { text: "Having two different alleles for a gene", isCorrect: false },
      { text: "Having one allele", isCorrect: false },
      { text: "Having extra chromosomes", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a genotype?",
    options: [
      { text: "Aa", isCorrect: true },
      { text: "Brown eyes", isCorrect: false },
      { text: "Tall", isCorrect: false },
      { text: "Freckles", isCorrect: false },
    ],
  },
  {
    text: "What type of inheritance involves a blend of two traits?",
    options: [
      { text: "Incomplete dominance", isCorrect: true },
      { text: "Codominance", isCorrect: false },
      { text: "Complete dominance", isCorrect: false },
      { text: "Sex-linked inheritance", isCorrect: false },
    ],
  },
  {
    text: "Which structure contains the organism’s genetic material?",
    options: [
      { text: "Chromosome", isCorrect: true },
      { text: "Ribosome", isCorrect: false },
      { text: "Golgi apparatus", isCorrect: false },
      { text: "Mitochondrion", isCorrect: false },
    ],
  },
  {
    text: "How many chromosomes do humans normally have in each body cell?",
    options: [
      { text: "46", isCorrect: true },
      { text: "23", isCorrect: false },
      { text: "44", isCorrect: false },
      { text: "92", isCorrect: false },
    ],
  },
  {
    text: "What does a Punnett square show?",
    options: [
      { text: "Possible genetic combinations from a cross", isCorrect: true },
      { text: "Chromosome structure", isCorrect: false },
      { text: "Mitosis phases", isCorrect: false },
      { text: "Protein synthesis", isCorrect: false },
    ],
  },
  {
    text: "What term describes genes that are located on the same chromosome?",
    options: [
      { text: "Linked genes", isCorrect: true },
      { text: "Dominant genes", isCorrect: false },
      { text: "Allelic genes", isCorrect: false },
      { text: "Recessive genes", isCorrect: false },
    ],
  },
  {
    text: "What does heterozygous mean?",
    options: [
      { text: "Having two different alleles for a gene", isCorrect: true },
      { text: "Having two identical alleles for a gene", isCorrect: false },
      { text: "Having no alleles", isCorrect: false },
      { text: "Having extra chromosomes", isCorrect: false },
    ],
  },
  {
    text: "Which term describes a trait that is only expressed when two copies are present?",
    options: [
      { text: "Recessive", isCorrect: true },
      { text: "Dominant", isCorrect: false },
      { text: "Codominant", isCorrect: false },
      { text: "Incomplete", isCorrect: false },
    ],
  },
  {
    text: "What is a karyotype used to examine?",
    options: [
      { text: "Chromosome number and structure", isCorrect: true },
      { text: "Protein folding", isCorrect: false },
      { text: "Gene mutations", isCorrect: false },
      { text: "RNA transcription", isCorrect: false },
    ],
  },
  {
    text: "Which of the following represents a sex-linked disorder?",
    options: [
      { text: "Hemophilia", isCorrect: true },
      { text: "Cystic fibrosis", isCorrect: false },
      { text: "Sickle cell anemia", isCorrect: false },
      { text: "Huntington's disease", isCorrect: false },
    ],
  },
  {
    text: "Which nitrogen base is NOT found in RNA?",
    options: [
      { text: "Thymine", isCorrect: true },
      { text: "Uracil", isCorrect: false },
      { text: "Adenine", isCorrect: false },
      { text: "Cytosine", isCorrect: false },
    ],
  },
  {
    text: "What is the result of a mutation in DNA?",
    options: [
      { text: "A change in the genetic code", isCorrect: true },
      { text: "An increase in chromosome number", isCorrect: false },
      { text: "No effect on the organism", isCorrect: false },
      { text: "Elimination of the cell", isCorrect: false },
    ],
  },
  {
    text: "What does codominance mean?",
    options: [
      { text: "Both alleles are fully expressed", isCorrect: true },
      { text: "One allele is masked", isCorrect: false },
      { text: "A blend of traits appears", isCorrect: false },
      { text: "The gene is on the Y chromosome", isCorrect: false },
    ],
  },
  {
    text: "Which type of inheritance is shown in ABO blood groups?",
    options: [
      { text: "Multiple alleles", isCorrect: true },
      { text: "Incomplete dominance", isCorrect: false },
      { text: "X-linked", isCorrect: false },
      { text: "Polygenic inheritance", isCorrect: false },
    ],
  },
  {
    text: "Which of the following best defines a genotype?",
    options: [
      { text: "The genetic makeup of an organism", isCorrect: true },
      { text: "The observable traits", isCorrect: false },
      { text: "A dominant trait", isCorrect: false },
      { text: "A mutation", isCorrect: false },
    ],
  },
  {
    text: "What causes Down syndrome?",
    options: [
      { text: "An extra copy of chromosome 21", isCorrect: true },
      { text: "A missing X chromosome", isCorrect: false },
      { text: "A deletion on chromosome 7", isCorrect: false },
      { text: "A defective gene on chromosome 11", isCorrect: false },
    ],
  },
  {
    text: "What is a phenotype?",
    options: [
      { text: "The observable traits of an organism", isCorrect: true },
      { text: "The genetic makeup", isCorrect: false },
      { text: "A type of mutation", isCorrect: false },
      { text: "A type of chromosome", isCorrect: false },
    ],
  },
  {
    text: "Which molecule carries genetic instructions from DNA to the ribosome?",
    options: [
      { text: "mRNA", isCorrect: true },
      { text: "tRNA", isCorrect: false },
      { text: "rRNA", isCorrect: false },
      { text: "DNA polymerase", isCorrect: false },
    ],
  },
  {
    text: "What is the role of a Punnett square?",
    options: [
      {
        text: "To predict the probability of offspring traits",
        isCorrect: true,
      },
      { text: "To count chromosomes", isCorrect: false },
      { text: "To model natural selection", isCorrect: false },
      { text: "To trace family history", isCorrect: false },
    ],
  },
  {
    text: "What type of mutation results in no change to the amino acid sequence?",
    options: [
      { text: "Silent mutation", isCorrect: true },
      { text: "Missense mutation", isCorrect: false },
      { text: "Nonsense mutation", isCorrect: false },
      { text: "Frameshift mutation", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is an example of polygenic inheritance?",
    options: [
      { text: "Skin color", isCorrect: true },
      { text: "Cystic fibrosis", isCorrect: false },
      { text: "Blood type", isCorrect: false },
      { text: "Huntington’s disease", isCorrect: false },
    ],
  },
  {
    text: "What does a pedigree chart show?",
    options: [
      { text: "Inheritance of traits through generations", isCorrect: true },
      { text: "Cell division", isCorrect: false },
      { text: "Chromosome numbers", isCorrect: false },
      { text: "Protein synthesis", isCorrect: false },
    ],
  },
  {
    text: "Which term refers to the location of a gene on a chromosome?",
    options: [
      { text: "Locus", isCorrect: true },
      { text: "Allele", isCorrect: false },
      { text: "Codon", isCorrect: false },
      { text: "Exon", isCorrect: false },
    ],
  },
  {
    text: "What type of inheritance pattern is colorblindness most commonly associated with?",
    options: [
      { text: "X-linked recessive", isCorrect: true },
      { text: "Autosomal dominant", isCorrect: false },
      { text: "Codominance", isCorrect: false },
      { text: "Y-linked", isCorrect: false },
    ],
  },
  {
    text: "Which enzymes are involved in unwinding DNA during replication?",
    options: [
      { text: "Helicases", isCorrect: true },
      { text: "Ligases", isCorrect: false },
      { text: "Polymerases", isCorrect: false },
      { text: "Primases", isCorrect: false },
    ],
  },
  {
    text: "What term describes the failure of chromosomes to separate properly during meiosis?",
    options: [
      { text: "Nondisjunction", isCorrect: true },
      { text: "Translocation", isCorrect: false },
      { text: "Deletion", isCorrect: false },
      { text: "Inversion", isCorrect: false },
    ],
  },
  {
    text: "Which type of RNA brings amino acids to the ribosome during translation?",
    options: [
      { text: "tRNA", isCorrect: true },
      { text: "mRNA", isCorrect: false },
      { text: "rRNA", isCorrect: false },
      { text: "snRNA", isCorrect: false },
    ],
  },
  {
    text: "What is the role of DNA polymerase in DNA replication?",
    options: [
      { text: "It adds nucleotides to a growing DNA strand", isCorrect: true },
      { text: "It unwinds the DNA helix", isCorrect: false },
      { text: "It seals DNA fragments", isCorrect: false },
      { text: "It synthesizes RNA primers", isCorrect: false },
    ],
  },
  {
    text: "What is a codon?",
    options: [
      {
        text: "A sequence of three nucleotides that codes for an amino acid",
        isCorrect: true,
      },
      { text: "A protein marker", isCorrect: false },
      { text: "An enzyme", isCorrect: false },
      { text: "A chromosome pair", isCorrect: false },
    ],
  },
  {
    text: "How many alleles does an individual inherit for each gene?",
    options: [
      { text: "Two", isCorrect: true },
      { text: "One", isCorrect: false },
      { text: "Three", isCorrect: false },
      { text: "Four", isCorrect: false },
    ],
  },
  {
    text: "Which process converts DNA into mRNA?",
    options: [
      { text: "Transcription", isCorrect: true },
      { text: "Translation", isCorrect: false },
      { text: "Replication", isCorrect: false },
      { text: "Duplication", isCorrect: false },
    ],
  },
  {
    text: "Which enzyme is responsible for sealing breaks in the sugar-phosphate backbone during DNA replication?",
    options: [
      { text: "DNA ligase", isCorrect: true },
      { text: "DNA polymerase", isCorrect: false },
      { text: "Helicase", isCorrect: false },
      { text: "Topoisomerase", isCorrect: false },
    ],
  },
  {
    text: "Which chromosome combination results in a female human?",
    options: [
      { text: "XX", isCorrect: true },
      { text: "XY", isCorrect: false },
      { text: "XO", isCorrect: false },
      { text: "YY", isCorrect: false },
    ],
  },
  {
    text: "Which term refers to traits influenced by multiple genes?",
    options: [
      { text: "Polygenic", isCorrect: true },
      { text: "Monogenic", isCorrect: false },
      { text: "Dominant", isCorrect: false },
      { text: "Incomplete", isCorrect: false },
    ],
  },
  {
    text: "In which organelle does transcription occur?",
    options: [
      { text: "Nucleus", isCorrect: true },
      { text: "Ribosome", isCorrect: false },
      { text: "Cytoplasm", isCorrect: false },
      { text: "Endoplasmic reticulum", isCorrect: false },
    ],
  },
  {
    text: "Which scientist helped discover the double-helix structure of DNA?",
    options: [
      { text: "James Watson", isCorrect: true },
      { text: "Louis Pasteur", isCorrect: false },
      { text: "Charles Darwin", isCorrect: false },
      { text: "Robert Hooke", isCorrect: false },
    ],
  },
  {
    text: "What is the function of rRNA in protein synthesis?",
    options: [
      {
        text: "It forms the core of the ribosome’s structure",
        isCorrect: true,
      },
      { text: "It carries amino acids", isCorrect: false },
      { text: "It brings the DNA message", isCorrect: false },
      { text: "It edits RNA", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is an autosomal dominant disorder?",
    options: [
      { text: "Huntington’s disease", isCorrect: true },
      { text: "Cystic fibrosis", isCorrect: false },
      { text: "Tay-Sachs disease", isCorrect: false },
      { text: "Hemophilia", isCorrect: false },
    ],
  },
  {
    text: "Which process results in the formation of gametes?",
    options: [
      { text: "Meiosis", isCorrect: true },
      { text: "Mitosis", isCorrect: false },
      { text: "Translation", isCorrect: false },
      { text: "Replication", isCorrect: false },
    ],
  },
  {
    text: "What is the start codon in most organisms?",
    options: [
      { text: "AUG", isCorrect: true },
      { text: "UAA", isCorrect: false },
      { text: "UGA", isCorrect: false },
      { text: "UAG", isCorrect: false },
    ],
  },
  {
    text: "Which of the following terms describes a permanent change in DNA sequence?",
    options: [
      { text: "Mutation", isCorrect: true },
      { text: "Replication", isCorrect: false },
      { text: "Translation", isCorrect: false },
      { text: "Crossing over", isCorrect: false },
    ],
  },
  {
    text: "What is a gene?",
    options: [
      { text: "A segment of DNA that codes for a protein", isCorrect: true },
      { text: "A type of RNA", isCorrect: false },
      { text: "A chromosome", isCorrect: false },
      { text: "A cell organelle", isCorrect: false },
    ],
  },
  {
    text: "What is the probability of producing a homozygous recessive offspring from two heterozygous parents?",
    options: [
      { text: "25%", isCorrect: true },
      { text: "50%", isCorrect: false },
      { text: "75%", isCorrect: false },
      { text: "100%", isCorrect: false },
    ],
  },
  {
    text: "Which chromosome pair determines sex in humans?",
    options: [
      { text: "23rd pair", isCorrect: true },
      { text: "1st pair", isCorrect: false },
      { text: "15th pair", isCorrect: false },
      { text: "All pairs", isCorrect: false },
    ],
  },
  {
    text: "What is the role of DNA in cells?",
    options: [
      { text: "To store genetic instructions", isCorrect: true },
      { text: "To break down nutrients", isCorrect: false },
      { text: "To produce ATP", isCorrect: false },
      { text: "To control membrane transport", isCorrect: false },
    ],
  },
  {
    text: "What is genetic recombination?",
    options: [
      {
        text: "The exchange of genetic material during meiosis",
        isCorrect: true,
      },
      { text: "Replication of DNA", isCorrect: false },
      { text: "Transcription of mRNA", isCorrect: false },
      { text: "Repair of damaged DNA", isCorrect: false },
    ],
  },
];

module.exports = geneticsQuestions;
