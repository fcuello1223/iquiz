const biochemistryQuestions = [
  //1
  {
    text: "What type of biomolecule are enzymes?",
    options: [
      { text: "Proteins", isCorrect: true },
      { text: "Lipids", isCorrect: false },
      { text: "Carbohydrates", isCorrect: false },
      { text: "Nucleic acids", isCorrect: false },
    ],
  },
  //2
  {
    text: "Which molecule is the main energy currency of the cell?",
    options: [
      { text: "ATP", isCorrect: true },
      { text: "DNA", isCorrect: false },
      { text: "Glucose", isCorrect: false },
      { text: "RNA", isCorrect: false },
    ],
  },
  //3
  {
    text: "What is the monomer of proteins?",
    options: [
      { text: "Amino acids", isCorrect: true },
      { text: "Nucleotides", isCorrect: false },
      { text: "Monosaccharides", isCorrect: false },
      { text: "Fatty acids", isCorrect: false },
    ],
  },
  //4
  {
    text: "Which of the following is a polysaccharide?",
    options: [
      { text: "Starch", isCorrect: true },
      { text: "Glucose", isCorrect: false },
      { text: "Fructose", isCorrect: false },
      { text: "Sucrose", isCorrect: false },
    ],
  },
  //5
  {
    text: "Which type of bond connects amino acids in a protein chain?",
    options: [
      { text: "Peptide bond", isCorrect: true },
      { text: "Glycosidic bond", isCorrect: false },
      { text: "Hydrogen bond", isCorrect: false },
      { text: "Ionic bond", isCorrect: false },
    ],
  },
  //6
  {
    text: "Which vitamin is essential for blood clotting?",
    options: [
      { text: "Vitamin K", isCorrect: true },
      { text: "Vitamin D", isCorrect: false },
      { text: "Vitamin C", isCorrect: false },
      { text: "Vitamin A", isCorrect: false },
    ],
  },
  //7
  {
    text: "Which organ is primarily responsible for regulating blood glucose levels?",
    options: [
      { text: "Liver", isCorrect: true },
      { text: "Kidney", isCorrect: false },
      { text: "Heart", isCorrect: false },
      { text: "Stomach", isCorrect: false },
    ],
  },
  //8
  {
    text: "Which nucleic acid is responsible for carrying genetic information?",
    options: [
      { text: "DNA", isCorrect: true },
      { text: "RNA", isCorrect: false },
      { text: "ATP", isCorrect: false },
      { text: "NADH", isCorrect: false },
    ],
  },
  //9
  {
    text: "Which part of a phospholipid is hydrophobic?",
    options: [
      { text: "Fatty acid tails", isCorrect: true },
      { text: "Phosphate head", isCorrect: false },
      { text: "Glycerol backbone", isCorrect: false },
      { text: "Carboxyl group", isCorrect: false },
    ],
  },
  //10
  {
    text: "What is the primary function of insulin?",
    options: [
      { text: "Lower blood glucose", isCorrect: true },
      { text: "Increase blood pressure", isCorrect: false },
      { text: "Stimulate red blood cell production", isCorrect: false },
      { text: "Digest proteins", isCorrect: false },
    ],
  },
  //11
  {
    text: "Which biomolecule stores genetic information?",
    options: [
      { text: "DNA", isCorrect: true },
      { text: "Protein", isCorrect: false },
      { text: "Carbohydrate", isCorrect: false },
      { text: "Lipid", isCorrect: false },
    ],
  },
  //12
  {
    text: "Which enzyme breaks down starch into maltose?",
    options: [
      { text: "Amylase", isCorrect: true },
      { text: "Lipase", isCorrect: false },
      { text: "Pepsin", isCorrect: false },
      { text: "Trypsin", isCorrect: false },
    ],
  },
  //13
  {
    text: "Which coenzyme is essential for cellular respiration and electron transport?",
    options: [
      { text: "NAD⁺", isCorrect: true },
      { text: "ATP", isCorrect: false },
      { text: "Glucose", isCorrect: false },
      { text: "FADH₂", isCorrect: false },
    ],
  },
  //14
  {
    text: "Which lipid type is a major component of cell membranes?",
    options: [
      { text: "Phospholipids", isCorrect: true },
      { text: "Steroids", isCorrect: false },
      { text: "Triglycerides", isCorrect: false },
      { text: "Waxes", isCorrect: false },
    ],
  },
  //15
  {
    text: "What is the process of building larger molecules from smaller ones called?",
    options: [
      { text: "Anabolism", isCorrect: true },
      { text: "Catabolism", isCorrect: false },
      { text: "Hydrolysis", isCorrect: false },
      { text: "Oxidation", isCorrect: false },
    ],
  },
  //16
  {
    text: "Which structure of a protein refers to its sequence of amino acids?",
    options: [
      { text: "Primary structure", isCorrect: true },
      { text: "Secondary structure", isCorrect: false },
      { text: "Tertiary structure", isCorrect: false },
      { text: "Quaternary structure", isCorrect: false },
    ],
  },
  //17
  {
    text: "Which molecule is formed as a byproduct of peptide bond formation?",
    options: [
      { text: "Water (H₂O)", isCorrect: true },
      { text: "Carbon dioxide (CO₂)", isCorrect: false },
      { text: "Oxygen (O₂)", isCorrect: false },
      { text: "Ammonia (NH₃)", isCorrect: false },
    ],
  },
  //18
  {
    text: "What is the main function of hemoglobin?",
    options: [
      { text: "Transport oxygen", isCorrect: true },
      { text: "Digest fats", isCorrect: false },
      { text: "Break down proteins", isCorrect: false },
      { text: "Store glycogen", isCorrect: false },
    ],
  },
  //19
  {
    text: "Which sugar is found in RNA?",
    options: [
      { text: "Ribose", isCorrect: true },
      { text: "Deoxyribose", isCorrect: false },
      { text: "Glucose", isCorrect: false },
      { text: "Fructose", isCorrect: false },
    ],
  },
  //20
  {
    text: "Which vitamin is a precursor of NAD⁺?",
    options: [
      { text: "Niacin (Vitamin B3)", isCorrect: true },
      { text: "Thiamine (Vitamin B1)", isCorrect: false },
      { text: "Riboflavin (Vitamin B2)", isCorrect: false },
      { text: "Cobalamin (Vitamin B12)", isCorrect: false },
    ],
  },
  //21
  {
    text: "Which organelle is primarily responsible for ATP production in cells?",
    options: [
      { text: "Mitochondria", isCorrect: true },
      { text: "Nucleus", isCorrect: false },
      { text: "Ribosome", isCorrect: false },
      { text: "Endoplasmic reticulum", isCorrect: false },
    ],
  },
  //22
  {
    text: "Which metabolic pathway converts glucose into pyruvate?",
    options: [
      { text: "Glycolysis", isCorrect: true },
      { text: "Krebs cycle", isCorrect: false },
      { text: "Gluconeogenesis", isCorrect: false },
      { text: "Beta-oxidation", isCorrect: false },
    ],
  },
  //23
  {
    text: "Which of the following is a non-essential amino acid?",
    options: [
      { text: "Alanine", isCorrect: true },
      { text: "Leucine", isCorrect: false },
      { text: "Lysine", isCorrect: false },
      { text: "Valine", isCorrect: false },
    ],
  },
  //24
  {
    text: "Which enzyme unwinds DNA during replication?",
    options: [
      { text: "Helicase", isCorrect: true },
      { text: "Ligase", isCorrect: false },
      { text: "Polymerase", isCorrect: false },
      { text: "Topoisomerase", isCorrect: false },
    ],
  },
  //25
  {
    text: "Which nucleotide pairs with adenine in RNA?",
    options: [
      { text: "Uracil", isCorrect: true },
      { text: "Thymine", isCorrect: false },
      { text: "Cytosine", isCorrect: false },
      { text: "Guanine", isCorrect: false },
    ],
  },
  //26
  {
    text: "Which molecule acts as the final electron acceptor in the electron transport chain?",
    options: [
      { text: "Oxygen", isCorrect: true },
      { text: "NAD⁺", isCorrect: false },
      { text: "FAD", isCorrect: false },
      { text: "Water", isCorrect: false },
    ],
  },
  //27
  {
    text: "What type of biomolecule are antibodies?",
    options: [
      { text: "Proteins", isCorrect: true },
      { text: "Carbohydrates", isCorrect: false },
      { text: "Lipids", isCorrect: false },
      { text: "Nucleic acids", isCorrect: false },
    ],
  },
  //28
  {
    text: "Which vitamin is essential for collagen synthesis?",
    options: [
      { text: "Vitamin C", isCorrect: true },
      { text: "Vitamin D", isCorrect: false },
      { text: "Vitamin A", isCorrect: false },
      { text: "Vitamin K", isCorrect: false },
    ],
  },
  //29
  {
    text: "Which of the following is not a component of a nucleotide?",
    options: [
      { text: "Fatty acid", isCorrect: true },
      { text: "Phosphate group", isCorrect: false },
      { text: "Nitrogenous base", isCorrect: false },
      { text: "Pentose sugar", isCorrect: false },
    ],
  },
  //30
  {
    text: "Which element is present in all amino acids but not in carbohydrates?",
    options: [
      { text: "Nitrogen", isCorrect: true },
      { text: "Carbon", isCorrect: false },
      { text: "Hydrogen", isCorrect: false },
      { text: "Oxygen", isCorrect: false },
    ],
  },
  //31
  {
    text: "Which biomolecule is the primary source of long-term energy storage in animals?",
    options: [
      { text: "Lipids", isCorrect: true },
      { text: "Carbohydrates", isCorrect: false },
      { text: "Proteins", isCorrect: false },
      { text: "Nucleic acids", isCorrect: false },
    ],
  },
  //32
  {
    text: "What is the role of tRNA in protein synthesis?",
    options: [
      { text: "It carries amino acids to the ribosome", isCorrect: true },
      { text: "It synthesizes RNA from DNA", isCorrect: false },
      { text: "It forms the peptide bond", isCorrect: false },
      { text: "It signals transcription termination", isCorrect: false },
    ],
  },
  //33
  {
    text: "Which enzyme catalyzes the formation of ATP from ADP and Pi?",
    options: [
      { text: "ATP synthase", isCorrect: true },
      { text: "Kinase", isCorrect: false },
      { text: "Isomerase", isCorrect: false },
      { text: "Polymerase", isCorrect: false },
    ],
  },
  //34
  {
    text: "Which structure is responsible for protein synthesis?",
    options: [
      { text: "Ribosome", isCorrect: true },
      { text: "Nucleolus", isCorrect: false },
      { text: "Mitochondria", isCorrect: false },
      { text: "Lysosome", isCorrect: false },
    ],
  },
  //35
  {
    text: "Which of the following is a disaccharide?",
    options: [
      { text: "Sucrose", isCorrect: true },
      { text: "Glucose", isCorrect: false },
      { text: "Starch", isCorrect: false },
      { text: "Cellulose", isCorrect: false },
    ],
  },
  //36
  {
    text: "What is the role of coenzyme A in metabolism?",
    options: [
      { text: "It carries acyl groups in the Krebs cycle", isCorrect: true },
      { text: "It transports oxygen", isCorrect: false },
      { text: "It breaks down peptides", isCorrect: false },
      { text: "It neutralizes acids", isCorrect: false },
    ],
  },
  //37
  {
    text: "Which process produces lactic acid during anaerobic respiration in humans?",
    options: [
      { text: "Lactic acid fermentation", isCorrect: true },
      { text: "Alcoholic fermentation", isCorrect: false },
      { text: "Beta oxidation", isCorrect: false },
      { text: "Oxidative phosphorylation", isCorrect: false },
    ],
  },
  //38
  {
    text: "What type of macromolecule is hemoglobin?",
    options: [
      { text: "Protein", isCorrect: true },
      { text: "Carbohydrate", isCorrect: false },
      { text: "Lipid", isCorrect: false },
      { text: "Nucleic acid", isCorrect: false },
    ],
  },
  //39
  {
    text: "Which biomolecule contains the genetic code for protein synthesis?",
    options: [
      { text: "DNA", isCorrect: true },
      { text: "mRNA", isCorrect: false },
      { text: "tRNA", isCorrect: false },
      { text: "rRNA", isCorrect: false },
    ],
  },
  //40
  {
    text: "Which of the following is NOT a function of proteins?",
    options: [
      { text: "Energy storage", isCorrect: true },
      { text: "Catalysis", isCorrect: false },
      { text: "Cell signaling", isCorrect: false },
      { text: "Structural support", isCorrect: false },
    ],
  },
  //41
  {
    text: "Which metabolic pathway occurs in the cytoplasm and does not require oxygen?",
    options: [
      { text: "Glycolysis", isCorrect: true },
      { text: "Krebs cycle", isCorrect: false },
      { text: "Electron transport chain", isCorrect: false },
      { text: "Beta-oxidation", isCorrect: false },
    ],
  },
  //42
  {
    text: "Which of the following molecules is an example of a saturated fatty acid?",
    options: [
      { text: "Palmitic acid", isCorrect: true },
      { text: "Oleic acid", isCorrect: false },
      { text: "Linoleic acid", isCorrect: false },
      { text: "Arachidonic acid", isCorrect: false },
    ],
  },
  //43
  {
    text: "Which vitamin is essential for the synthesis of NAD⁺ and NADP⁺?",
    options: [
      { text: "Niacin (Vitamin B3)", isCorrect: true },
      { text: "Riboflavin (Vitamin B2)", isCorrect: false },
      { text: "Thiamine (Vitamin B1)", isCorrect: false },
      { text: "Pantothenic acid (Vitamin B5)", isCorrect: false },
    ],
  },
  //44
  {
    text: "Which enzyme is involved in DNA replication and synthesizes new DNA strands?",
    options: [
      { text: "DNA polymerase", isCorrect: true },
      { text: "RNA polymerase", isCorrect: false },
      { text: "Ligase", isCorrect: false },
      { text: "Helicase", isCorrect: false },
    ],
  },
  //45
  {
    text: "What is the function of chylomicrons in the body?",
    options: [
      { text: "Transport dietary lipids", isCorrect: true },
      { text: "Digest proteins", isCorrect: false },
      { text: "Produce glucose", isCorrect: false },
      { text: "Store genetic information", isCorrect: false },
    ],
  },
  //46
  {
    text: "Which of the following amino acids is aromatic?",
    options: [
      { text: "Phenylalanine", isCorrect: true },
      { text: "Alanine", isCorrect: false },
      { text: "Valine", isCorrect: false },
      { text: "Lysine", isCorrect: false },
    ],
  },
  //47
  {
    text: "Which organ converts ammonia into urea for excretion?",
    options: [
      { text: "Liver", isCorrect: true },
      { text: "Kidney", isCorrect: false },
      { text: "Pancreas", isCorrect: false },
      { text: "Stomach", isCorrect: false },
    ],
  },
  //48
  {
    text: "What is the main purpose of the urea cycle?",
    options: [
      { text: "To remove excess nitrogen", isCorrect: true },
      { text: "To produce ATP", isCorrect: false },
      { text: "To generate glucose", isCorrect: false },
      { text: "To oxidize fatty acids", isCorrect: false },
    ],
  },
  //49
  {
    text: "Which macromolecule forms enzymes, antibodies, and some hormones?",
    options: [
      { text: "Proteins", isCorrect: true },
      { text: "Lipids", isCorrect: false },
      { text: "Carbohydrates", isCorrect: false },
      { text: "Nucleic acids", isCorrect: false },
    ],
  },
  //50
  {
    text: "Which molecule connects glycolysis and the Krebs cycle?",
    options: [
      { text: "Acetyl-CoA", isCorrect: true },
      { text: "Pyruvate", isCorrect: false },
      { text: "NADH", isCorrect: false },
      { text: "ATP", isCorrect: false },
    ],
  },
];

module.exports = biochemistryQuestions;
