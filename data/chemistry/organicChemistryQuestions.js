const organicChemistryQuestions = [
  //1
  {
    text: "What is the simplest alkane?",
    options: [
      { text: "Methane", isCorrect: true },
      { text: "Ethene", isCorrect: false },
      { text: "Ethyne", isCorrect: false },
      { text: "Butane", isCorrect: false },
    ],
  },
  //2
  {
    text: "Which functional group is present in alcohols?",
    options: [
      { text: "-OH", isCorrect: true },
      { text: "-COOH", isCorrect: false },
      { text: "-NH₂", isCorrect: false },
      { text: "-CHO", isCorrect: false },
    ],
  },
  //3
  {
    text: "What is the IUPAC name of CH₃CH₂OH?",
    options: [
      { text: "Ethanol", isCorrect: true },
      { text: "Methanol", isCorrect: false },
      { text: "Propanol", isCorrect: false },
      { text: "Butanol", isCorrect: false },
    ],
  },
  //4
  {
    text: "Which type of bond is found in alkenes?",
    options: [
      { text: "Double bond", isCorrect: true },
      { text: "Single bond", isCorrect: false },
      { text: "Triple bond", isCorrect: false },
      { text: "Ionic bond", isCorrect: false },
    ],
  },
  //5
  {
    text: "Which hydrocarbon is unsaturated?",
    options: [
      { text: "Ethene", isCorrect: true },
      { text: "Methane", isCorrect: false },
      { text: "Propane", isCorrect: false },
      { text: "Butane", isCorrect: false },
    ],
  },
  //6
  {
    text: "What is the general formula for alkanes?",
    options: [
      { text: "CₙH₂ₙ₊₂", isCorrect: true },
      { text: "CₙH₂ₙ", isCorrect: false },
      { text: "CₙH₂ₙ₋₂", isCorrect: false },
      { text: "CₙHₙ", isCorrect: false },
    ],
  },
  //7
  {
    text: "Which compound contains a carboxylic acid group?",
    options: [
      { text: "CH₃COOH", isCorrect: true },
      { text: "CH₃CH₂OH", isCorrect: false },
      { text: "CH₄", isCorrect: false },
      { text: "CH₃NH₂", isCorrect: false },
    ],
  },
  //8
  {
    text: "What is the product of esterification of an alcohol and a carboxylic acid?",
    options: [
      { text: "Ester", isCorrect: true },
      { text: "Ether", isCorrect: false },
      { text: "Aldehyde", isCorrect: false },
      { text: "Amide", isCorrect: false },
    ],
  },
  //9
  {
    text: "Which is an example of an aromatic hydrocarbon?",
    options: [
      { text: "Benzene", isCorrect: true },
      { text: "Butane", isCorrect: false },
      { text: "Ethene", isCorrect: false },
      { text: "Methanol", isCorrect: false },
    ],
  },
  //10
  {
    text: "Which type of reaction involves the addition of hydrogen to an alkene?",
    options: [
      { text: "Hydrogenation", isCorrect: true },
      { text: "Hydrolysis", isCorrect: false },
      { text: "Dehydration", isCorrect: false },
      { text: "Oxidation", isCorrect: false },
    ],
  },
  //11
  {
    text: "Which of the following is a ketone?",
    options: [
      { text: "CH₃COCH₃", isCorrect: true },
      { text: "CH₃CH₂OH", isCorrect: false },
      { text: "CH₃COOH", isCorrect: false },
      { text: "CH₃CHO", isCorrect: false },
    ],
  },
  //12
  {
    text: "What is the IUPAC name for CH₃CH₂CH₂CH₃?",
    options: [
      { text: "Butane", isCorrect: true },
      { text: "Propane", isCorrect: false },
      { text: "Pentane", isCorrect: false },
      { text: "Methane", isCorrect: false },
    ],
  },
  //13
  {
    text: "Which functional group is characteristic of amines?",
    options: [
      { text: "-NH₂", isCorrect: true },
      { text: "-OH", isCorrect: false },
      { text: "-COOH", isCorrect: false },
      { text: "-CHO", isCorrect: false },
    ],
  },
  //14
  {
    text: "Which type of isomerism involves compounds with the same molecular formula but different connectivity of atoms?",
    options: [
      { text: "Structural isomerism", isCorrect: true },
      { text: "Geometric isomerism", isCorrect: false },
      { text: "Optical isomerism", isCorrect: false },
      { text: "Stereoisomerism", isCorrect: false },
    ],
  },
  //15
  {
    text: "What is the product of the complete combustion of a hydrocarbon?",
    options: [
      { text: "Carbon dioxide and water", isCorrect: true },
      { text: "Carbon monoxide and hydrogen", isCorrect: false },
      { text: "Oxygen and nitrogen", isCorrect: false },
      { text: "Methane and ethane", isCorrect: false },
    ],
  },
  //16
  {
    text: "Which organic compound is used as a common solvent and has the formula CH₃COCH₃?",
    options: [
      { text: "Acetone", isCorrect: true },
      { text: "Acetic acid", isCorrect: false },
      { text: "Ethanol", isCorrect: false },
      { text: "Formaldehyde", isCorrect: false },
    ],
  },
  //17
  {
    text: "What is the functional group of an aldehyde?",
    options: [
      { text: "-CHO", isCorrect: true },
      { text: "-COOH", isCorrect: false },
      { text: "-OH", isCorrect: false },
      { text: "-NH₂", isCorrect: false },
    ],
  },
  //18
  {
    text: "Which term refers to a carbon atom bonded to four different groups?",
    options: [
      { text: "Chiral center", isCorrect: true },
      { text: "Isotope", isCorrect: false },
      { text: "Functional group", isCorrect: false },
      { text: "Saturated carbon", isCorrect: false },
    ],
  },
  //19
  {
    text: "Which of the following is an ether?",
    options: [
      { text: "CH₃CH₂OCH₃", isCorrect: true },
      { text: "CH₃CH₂OH", isCorrect: false },
      { text: "CH₃COOH", isCorrect: false },
      { text: "CH₃NH₂", isCorrect: false },
    ],
  },
  //20
  {
    text: "Which hydrocarbon contains a triple bond?",
    options: [
      { text: "Ethyne", isCorrect: true },
      { text: "Ethene", isCorrect: false },
      { text: "Propane", isCorrect: false },
      { text: "Butane", isCorrect: false },
    ],
  },
  //21
  {
    text: "Which type of reaction is characteristic of alkenes?",
    options: [
      { text: "Addition reaction", isCorrect: true },
      { text: "Substitution reaction", isCorrect: false },
      { text: "Elimination reaction", isCorrect: false },
      { text: "Condensation reaction", isCorrect: false },
    ],
  },
  //22
  {
    text: "What is the IUPAC name for CH₃CH=CH₂?",
    options: [
      { text: "Propene", isCorrect: true },
      { text: "Propane", isCorrect: false },
      { text: "Ethyne", isCorrect: false },
      { text: "Propyne", isCorrect: false },
    ],
  },
  //23
  {
    text: "Which polymer is formed from the monomer ethene?",
    options: [
      { text: "Polyethylene", isCorrect: true },
      { text: "Polystyrene", isCorrect: false },
      { text: "Polyvinyl chloride", isCorrect: false },
      { text: "Polypropylene", isCorrect: false },
    ],
  },
  //24
  {
    text: "What is the main product of the dehydration of an alcohol?",
    options: [
      { text: "Alkene", isCorrect: true },
      { text: "Alkane", isCorrect: false },
      { text: "Ether", isCorrect: false },
      { text: "Ketone", isCorrect: false },
    ],
  },
  //25
  {
    text: "Which organic compound is commonly used as vinegar?",
    options: [
      { text: "Acetic acid", isCorrect: true },
      { text: "Formic acid", isCorrect: false },
      { text: "Ethanol", isCorrect: false },
      { text: "Methanol", isCorrect: false },
    ],
  },
  //26
  {
    text: "What kind of compound is formed by the reaction of an amine and a carboxylic acid?",
    options: [
      { text: "Amide", isCorrect: true },
      { text: "Ester", isCorrect: false },
      { text: "Alcohol", isCorrect: false },
      { text: "Ketone", isCorrect: false },
    ],
  },
  //27
  {
    text: "Which reagent is commonly used to test for unsaturation in organic compounds?",
    options: [
      { text: "Bromine water", isCorrect: true },
      { text: "Sodium hydroxide", isCorrect: false },
      { text: "Hydrochloric acid", isCorrect: false },
      { text: "Silver nitrate", isCorrect: false },
    ],
  },
  //28
  {
    text: "What is the major organic product when ethene reacts with hydrogen in the presence of a catalyst?",
    options: [
      { text: "Ethane", isCorrect: true },
      { text: "Ethanol", isCorrect: false },
      { text: "Acetylene", isCorrect: false },
      { text: "Methane", isCorrect: false },
    ],
  },
  //29
  {
    text: "Which functional group is present in esters?",
    options: [
      { text: "-COO-", isCorrect: true },
      { text: "-OH", isCorrect: false },
      { text: "-NH₂", isCorrect: false },
      { text: "-CHO", isCorrect: false },
    ],
  },
  //30
  {
    text: "What is a hydrocarbon that contains only single bonds called?",
    options: [
      { text: "Alkane", isCorrect: true },
      { text: "Alkene", isCorrect: false },
      { text: "Alkyne", isCorrect: false },
      { text: "Aromatic compound", isCorrect: false },
    ],
  },
  //31
  {
    text: "Which class of organic compounds is characterized by a nitrogen atom bonded to one or more carbon atoms?",
    options: [
      { text: "Amines", isCorrect: true },
      { text: "Alcohols", isCorrect: false },
      { text: "Ethers", isCorrect: false },
      { text: "Aldehydes", isCorrect: false },
    ],
  },
  //32
  {
    text: "What is the IUPAC name for CH₃CH₂COOH?",
    options: [
      { text: "Propanoic acid", isCorrect: true },
      { text: "Acetic acid", isCorrect: false },
      { text: "Butanoic acid", isCorrect: false },
      { text: "Formic acid", isCorrect: false },
    ],
  },
  //33
  {
    text: "Which reaction converts an alcohol into an alkene?",
    options: [
      { text: "Dehydration", isCorrect: true },
      { text: "Hydration", isCorrect: false },
      { text: "Hydrolysis", isCorrect: false },
      { text: "Combustion", isCorrect: false },
    ],
  },
  //34
  {
    text: "Which of the following is a secondary alcohol?",
    options: [
      { text: "Isopropanol", isCorrect: true },
      { text: "Methanol", isCorrect: false },
      { text: "Ethanol", isCorrect: false },
      { text: "Tert-butanol", isCorrect: false },
    ],
  },
  //35
  {
    text: "What is the term for the spatial arrangement of atoms around a chiral center?",
    options: [
      { text: "Stereochemistry", isCorrect: true },
      { text: "Isomerization", isCorrect: false },
      { text: "Hybridization", isCorrect: false },
      { text: "Configuration", isCorrect: false },
    ],
  },
  //36
  {
    text: "What type of isomerism is shown by cis- and trans- forms of a compound?",
    options: [
      { text: "Geometric isomerism", isCorrect: true },
      { text: "Structural isomerism", isCorrect: false },
      { text: "Chain isomerism", isCorrect: false },
      { text: "Optical isomerism", isCorrect: false },
    ],
  },
  //37
  {
    text: "Which compound is formed when an aldehyde is oxidized?",
    options: [
      { text: "Carboxylic acid", isCorrect: true },
      { text: "Alcohol", isCorrect: false },
      { text: "Ketone", isCorrect: false },
      { text: "Alkane", isCorrect: false },
    ],
  },
  //38
  {
    text: "What is the general formula for alkenes?",
    options: [
      { text: "CₙH₂ₙ", isCorrect: true },
      { text: "CₙH₂ₙ₊₂", isCorrect: false },
      { text: "CₙH₂ₙ₋₂", isCorrect: false },
      { text: "CₙHₙ", isCorrect: false },
    ],
  },
  //39
  {
    text: "Which technique is commonly used to separate and purify organic liquids based on boiling points?",
    options: [
      { text: "Distillation", isCorrect: true },
      { text: "Filtration", isCorrect: false },
      { text: "Chromatography", isCorrect: false },
      { text: "Extraction", isCorrect: false },
    ],
  },
  //40
  {
    text: "What is the main product when a primary alcohol is oxidized?",
    options: [
      { text: "Aldehyde", isCorrect: true },
      { text: "Ketone", isCorrect: false },
      { text: "Carboxylic acid", isCorrect: false },
      { text: "Alkene", isCorrect: false },
    ],
  },
  //41
  {
    text: "Which compound is a tertiary alcohol?",
    options: [
      { text: "Tert-butanol", isCorrect: true },
      { text: "Methanol", isCorrect: false },
      { text: "Propanol", isCorrect: false },
      { text: "Ethanol", isCorrect: false },
    ],
  },
  //42
  {
    text: "Which process is used to convert vegetable oils into margarine?",
    options: [
      { text: "Hydrogenation", isCorrect: true },
      { text: "Dehydration", isCorrect: false },
      { text: "Esterification", isCorrect: false },
      { text: "Fermentation", isCorrect: false },
    ],
  },
  //43
  {
    text: "Which of the following is an unsaturated hydrocarbon?",
    options: [
      { text: "Ethene", isCorrect: true },
      { text: "Propane", isCorrect: false },
      { text: "Butane", isCorrect: false },
      { text: "Methane", isCorrect: false },
    ],
  },
  //44
  {
    text: "Which test is used to detect the presence of phenols?",
    options: [
      { text: "Ferric chloride test", isCorrect: true },
      { text: "Benedict’s test", isCorrect: false },
      { text: "Tollen’s test", isCorrect: false },
      { text: "Iodoform test", isCorrect: false },
    ],
  },
  //45
  {
    text: "What type of compound is formed in a reaction between a carboxylic acid and an alcohol?",
    options: [
      { text: "Ester", isCorrect: true },
      { text: "Amide", isCorrect: false },
      { text: "Ketone", isCorrect: false },
      { text: "Aldehyde", isCorrect: false },
    ],
  },
  //46
  {
    text: "Which compound will give a positive iodoform test?",
    options: [
      { text: "Ethanol", isCorrect: true },
      { text: "Methanol", isCorrect: false },
      { text: "Formaldehyde", isCorrect: false },
      { text: "Acetic acid", isCorrect: false },
    ],
  },
  //47
  {
    text: "What is the main product of nitration of benzene?",
    options: [
      { text: "Nitrobenzene", isCorrect: true },
      { text: "Aniline", isCorrect: false },
      { text: "Phenol", isCorrect: false },
      { text: "Toluene", isCorrect: false },
    ],
  },
  //48
  {
    text: "Which type of hybridization is found in the carbon atoms of ethyne?",
    options: [
      { text: "sp", isCorrect: true },
      { text: "sp²", isCorrect: false },
      { text: "sp³", isCorrect: false },
      { text: "sp²d", isCorrect: false },
    ],
  },
  //49
  {
    text: "Which of the following is a common organic solvent?",
    options: [
      { text: "Diethyl ether", isCorrect: true },
      { text: "Hydrochloric acid", isCorrect: false },
      { text: "Sodium chloride solution", isCorrect: false },
      { text: "Ammonium hydroxide", isCorrect: false },
    ],
  },
  //50
  {
    text: "Which reagent is used in the oxidation of a primary alcohol to a carboxylic acid?",
    options: [
      { text: "Potassium permanganate (KMnO₄)", isCorrect: true },
      { text: "Sodium chloride", isCorrect: false },
      { text: "Hydrogen gas", isCorrect: false },
      { text: "Bromine water", isCorrect: false },
    ],
  },
];

module.exports = organicChemistryQuestions;
