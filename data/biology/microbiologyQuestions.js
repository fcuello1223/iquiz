const microbiologyQuestions = [
  {
    text: "What is the basic structural and functional unit of all living organisms?",
    options: [
      { text: "Cell", isCorrect: true },
      { text: "Virus", isCorrect: false },
      { text: "Organ", isCorrect: false },
      { text: "Tissue", isCorrect: false },
    ],
  },
  {
    text: "Which microorganism is not considered living because it cannot reproduce on its own?",
    options: [
      { text: "Virus", isCorrect: true },
      { text: "Bacteria", isCorrect: false },
      { text: "Fungi", isCorrect: false },
      { text: "Protozoa", isCorrect: false },
    ],
  },
  {
    text: "Which of the following microorganisms is prokaryotic?",
    options: [
      { text: "Bacteria", isCorrect: true },
      { text: "Fungi", isCorrect: false },
      { text: "Algae", isCorrect: false },
      { text: "Protozoa", isCorrect: false },
    ],
  },
  {
    text: "Which structure helps bacteria move?",
    options: [
      { text: "Flagella", isCorrect: true },
      { text: "Cilia", isCorrect: false },
      { text: "Capsule", isCorrect: false },
      { text: "Ribosome", isCorrect: false },
    ],
  },
  {
    text: "What type of microorganism causes malaria?",
    options: [
      { text: "Protozoan", isCorrect: true },
      { text: "Bacterium", isCorrect: false },
      { text: "Virus", isCorrect: false },
      { text: "Fungus", isCorrect: false },
    ],
  },
  {
    text: "Which stain is used to classify bacteria into Gram-positive or Gram-negative?",
    options: [
      { text: "Gram stain", isCorrect: true },
      { text: "Acid-fast stain", isCorrect: false },
      { text: "Endospore stain", isCorrect: false },
      { text: "Capsule stain", isCorrect: false },
    ],
  },
  {
    text: "What is the function of bacterial endospores?",
    options: [
      { text: "Survival in harsh conditions", isCorrect: true },
      { text: "Protein synthesis", isCorrect: false },
      { text: "Motility", isCorrect: false },
      { text: "Energy production", isCorrect: false },
    ],
  },
  {
    text: "Which domain includes all bacteria?",
    options: [
      { text: "Bacteria", isCorrect: true },
      { text: "Archaea", isCorrect: false },
      { text: "Eukarya", isCorrect: false },
      { text: "Protista", isCorrect: false },
    ],
  },
  {
    text: "Which enzyme allows retroviruses like HIV to convert RNA into DNA?",
    options: [
      { text: "Reverse transcriptase", isCorrect: true },
      { text: "DNA polymerase", isCorrect: false },
      { text: "RNA polymerase", isCorrect: false },
      { text: "Ligase", isCorrect: false },
    ],
  },
  {
    text: "Which scientist is credited with developing the first vaccine?",
    options: [
      { text: "Edward Jenner", isCorrect: true },
      { text: "Louis Pasteur", isCorrect: false },
      { text: "Robert Koch", isCorrect: false },
      { text: "Alexander Fleming", isCorrect: false },
    ],
  },
  {
    text: "Which scientist is known for proving that microorganisms cause disease (the germ theory)?",
    options: [
      { text: "Louis Pasteur", isCorrect: true },
      { text: "Edward Jenner", isCorrect: false },
      { text: "Anton van Leeuwenhoek", isCorrect: false },
      { text: "Joseph Lister", isCorrect: false },
    ],
  },
  {
    text: "What structure protects bacteria from phagocytosis?",
    options: [
      { text: "Capsule", isCorrect: true },
      { text: "Flagellum", isCorrect: false },
      { text: "Cell wall", isCorrect: false },
      { text: "Pilus", isCorrect: false },
    ],
  },
  {
    text: "Which type of microorganism is used in the production of antibiotics like penicillin?",
    options: [
      { text: "Fungi", isCorrect: true },
      { text: "Bacteria", isCorrect: false },
      { text: "Viruses", isCorrect: false },
      { text: "Protozoa", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a common bacterial shape?",
    options: [
      { text: "Coccus", isCorrect: true },
      { text: "Helix", isCorrect: false },
      { text: "Disk", isCorrect: false },
      { text: "Oval", isCorrect: false },
    ],
  },
  {
    text: "Which type of microorganism contains chitin in its cell wall?",
    options: [
      { text: "Fungi", isCorrect: true },
      { text: "Bacteria", isCorrect: false },
      { text: "Algae", isCorrect: false },
      { text: "Protozoa", isCorrect: false },
    ],
  },
  {
    text: "What is the term for a virus that infects bacteria?",
    options: [
      { text: "Bacteriophage", isCorrect: true },
      { text: "Mycophage", isCorrect: false },
      { text: "Virion", isCorrect: false },
      { text: "Retrovirus", isCorrect: false },
    ],
  },
  {
    text: "Which staining technique is used to identify Mycobacterium tuberculosis?",
    options: [
      { text: "Acid-fast stain", isCorrect: true },
      { text: "Gram stain", isCorrect: false },
      { text: "Simple stain", isCorrect: false },
      { text: "Capsule stain", isCorrect: false },
    ],
  },
  {
    text: "What is the term for the time between exposure to a pathogen and the appearance of symptoms?",
    options: [
      { text: "Incubation period", isCorrect: true },
      { text: "Convalescence period", isCorrect: false },
      { text: "Prodromal stage", isCorrect: false },
      { text: "Infectious period", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a gram-negative bacterium?",
    options: [
      { text: "Escherichia coli", isCorrect: true },
      { text: "Staphylococcus aureus", isCorrect: false },
      { text: "Bacillus subtilis", isCorrect: false },
      { text: "Clostridium tetani", isCorrect: false },
    ],
  },
  {
    text: "What is the main component of bacterial cell walls?",
    options: [
      { text: "Peptidoglycan", isCorrect: true },
      { text: "Chitin", isCorrect: false },
      { text: "Cellulose", isCorrect: false },
      { text: "Lipopolysaccharide", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a common method for sterilizing surgical instruments?",
    options: [
      { text: "Autoclaving", isCorrect: true },
      { text: "Refrigeration", isCorrect: false },
      { text: "Filtration", isCorrect: false },
      { text: "Pasteurization", isCorrect: false },
    ],
  },
  {
    text: "Which structure allows bacteria to exchange genetic material?",
    options: [
      { text: "Pilus", isCorrect: true },
      { text: "Flagellum", isCorrect: false },
      { text: "Capsule", isCorrect: false },
      { text: "Ribosome", isCorrect: false },
    ],
  },
  {
    text: "Which type of immunity is provided by a vaccine?",
    options: [
      { text: "Artificial active immunity", isCorrect: true },
      { text: "Natural active immunity", isCorrect: false },
      { text: "Artificial passive immunity", isCorrect: false },
      { text: "Natural passive immunity", isCorrect: false },
    ],
  },
  {
    text: "Which scientist first observed microorganisms under a microscope?",
    options: [
      { text: "Anton van Leeuwenhoek", isCorrect: true },
      { text: "Robert Koch", isCorrect: false },
      { text: "Louis Pasteur", isCorrect: false },
      { text: "Alexander Fleming", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a fungal infection?",
    options: [
      { text: "Candidiasis", isCorrect: true },
      { text: "Tuberculosis", isCorrect: false },
      { text: "Influenza", isCorrect: false },
      { text: "Lyme disease", isCorrect: false },
    ],
  },
  {
    text: "Which group of microorganisms includes molds and yeasts?",
    options: [
      { text: "Fungi", isCorrect: true },
      { text: "Bacteria", isCorrect: false },
      { text: "Protozoa", isCorrect: false },
      { text: "Viruses", isCorrect: false },
    ],
  },
  {
    text: "Which of the following best describes an obligate anaerobe?",
    options: [
      { text: "It cannot survive in the presence of oxygen", isCorrect: true },
      { text: "It requires oxygen to live", isCorrect: false },
      { text: "It can live with or without oxygen", isCorrect: false },
      { text: "It lives only in acidic environments", isCorrect: false },
    ],
  },
  {
    text: "Which microbial structure is primarily involved in attachment to surfaces?",
    options: [
      { text: "Fimbriae", isCorrect: true },
      { text: "Flagella", isCorrect: false },
      { text: "Endospores", isCorrect: false },
      { text: "Capsules", isCorrect: false },
    ],
  },
  {
    text: "What is the function of lysozyme in human secretions like saliva and tears?",
    options: [
      { text: "It breaks down bacterial cell walls", isCorrect: true },
      { text: "It digests proteins", isCorrect: false },
      { text: "It neutralizes viruses", isCorrect: false },
      { text: "It produces antibodies", isCorrect: false },
    ],
  },
  {
    text: "What is a biofilm?",
    options: [
      {
        text: "A community of microorganisms attached to a surface",
        isCorrect: true,
      },
      { text: "A single-celled organism", isCorrect: false },
      { text: "A type of viral envelope", isCorrect: false },
      { text: "A fungal spore layer", isCorrect: false },
    ],
  },
  {
    text: "Which bacterial structure is involved in the formation of biofilms and helps in surface attachment?",
    options: [
      { text: "Fimbriae", isCorrect: true },
      { text: "Flagella", isCorrect: false },
      { text: "Endospore", isCorrect: false },
      { text: "Ribosome", isCorrect: false },
    ],
  },
  {
    text: "Which microorganism is responsible for causing tuberculosis?",
    options: [
      { text: "Mycobacterium tuberculosis", isCorrect: true },
      { text: "Escherichia coli", isCorrect: false },
      { text: "Streptococcus pneumoniae", isCorrect: false },
      { text: "Salmonella typhi", isCorrect: false },
    ],
  },
  {
    text: "What is the term for the complete elimination of all forms of microbial life?",
    options: [
      { text: "Sterilization", isCorrect: true },
      { text: "Disinfection", isCorrect: false },
      { text: "Sanitization", isCorrect: false },
      { text: "Pasteurization", isCorrect: false },
    ],
  },
  {
    text: "What is the primary function of plasmids in bacteria?",
    options: [
      { text: "Carry extra genetic information", isCorrect: true },
      { text: "Provide energy for the cell", isCorrect: false },
      { text: "Assist in motility", isCorrect: false },
      { text: "Form part of the cell membrane", isCorrect: false },
    ],
  },
  {
    text: "Which of the following diseases is caused by a protozoan parasite?",
    options: [
      { text: "Amoebic dysentery", isCorrect: true },
      { text: "Cholera", isCorrect: false },
      { text: "Tuberculosis", isCorrect: false },
      { text: "Whooping cough", isCorrect: false },
    ],
  },
  {
    text: "Which virus is known to cause cervical cancer?",
    options: [
      { text: "Human papillomavirus (HPV)", isCorrect: true },
      { text: "Hepatitis B virus", isCorrect: false },
      { text: "Epstein-Barr virus", isCorrect: false },
      { text: "HIV", isCorrect: false },
    ],
  },
  {
    text: "Which component of Gram-negative bacteria can cause septic shock?",
    options: [
      { text: "Lipopolysaccharide (LPS)", isCorrect: true },
      { text: "Peptidoglycan", isCorrect: false },
      { text: "Flagellin", isCorrect: false },
      { text: "Teichoic acid", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is commonly used as a disinfectant in healthcare settings?",
    options: [
      { text: "Bleach (sodium hypochlorite)", isCorrect: true },
      { text: "Water", isCorrect: false },
      { text: "Ethanolamine", isCorrect: false },
      { text: "Glycerol", isCorrect: false },
    ],
  },
  {
    text: "What is the function of a bacterial capsule?",
    options: [
      { text: "Protect against phagocytosis", isCorrect: true },
      { text: "Aid in cell division", isCorrect: false },
      { text: "Generate energy", isCorrect: false },
      { text: "Assist in protein synthesis", isCorrect: false },
    ],
  },
  {
    text: "Which of the following microbes reproduces by binary fission?",
    options: [
      { text: "Bacteria", isCorrect: true },
      { text: "Fungi", isCorrect: false },
      { text: "Viruses", isCorrect: false },
      { text: "Protozoa", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a method used to identify bacteria based on genetic material?",
    options: [
      { text: "PCR (Polymerase Chain Reaction)", isCorrect: true },
      { text: "Gram staining", isCorrect: false },
      { text: "Culture plating", isCorrect: false },
      { text: "Microscopy", isCorrect: false },
    ],
  },
  {
    text: "What term describes the ability of a microorganism to cause disease?",
    options: [
      { text: "Pathogenicity", isCorrect: true },
      { text: "Virulence", isCorrect: false },
      { text: "Toxicity", isCorrect: false },
      { text: "Immunogenicity", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a common bacterial toxin that inhibits protein synthesis?",
    options: [
      { text: "Diphtheria toxin", isCorrect: true },
      { text: "Cholera toxin", isCorrect: false },
      { text: "Botulinum toxin", isCorrect: false },
      { text: "Tetanus toxin", isCorrect: false },
    ],
  },
  {
    text: "Which term describes bacteria that grow best at moderate temperatures?",
    options: [
      { text: "Mesophiles", isCorrect: true },
      { text: "Thermophiles", isCorrect: false },
      { text: "Psychrophiles", isCorrect: false },
      { text: "Halophiles", isCorrect: false },
    ],
  },
  {
    text: "What is the term for a substance produced by microbes that inhibits other microbes?",
    options: [
      { text: "Antibiotic", isCorrect: true },
      { text: "Antigen", isCorrect: false },
      { text: "Enzyme", isCorrect: false },
      { text: "Toxin", isCorrect: false },
    ],
  },
  {
    text: "Which of the following best describes a facultative anaerobe?",
    options: [
      { text: "Can grow with or without oxygen", isCorrect: true },
      { text: "Dies in the presence of oxygen", isCorrect: false },
      { text: "Requires oxygen to survive", isCorrect: false },
      { text: "Lives only in extreme environments", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a protozoan disease transmitted by contaminated water?",
    options: [
      { text: "Giardiasis", isCorrect: true },
      { text: "Tetanus", isCorrect: false },
      { text: "Measles", isCorrect: false },
      { text: "Syphilis", isCorrect: false },
    ],
  },
  {
    text: "What component is found in fungal cell walls but not bacterial cell walls?",
    options: [
      { text: "Chitin", isCorrect: true },
      { text: "Peptidoglycan", isCorrect: false },
      { text: "Cellulose", isCorrect: false },
      { text: "Lignin", isCorrect: false },
    ],
  },
  {
    text: "Which of the following viruses is transmitted primarily through blood and body fluids?",
    options: [
      { text: "Hepatitis B", isCorrect: true },
      { text: "Norovirus", isCorrect: false },
      { text: "Rotavirus", isCorrect: false },
      { text: "Rhinovirus", isCorrect: false },
    ],
  },
  {
    text: "What laboratory technique separates components of a mixture based on size and charge?",
    options: [
      { text: "Gel electrophoresis", isCorrect: true },
      { text: "Centrifugation", isCorrect: false },
      { text: "Filtration", isCorrect: false },
      { text: "Spectrophotometry", isCorrect: false },
    ],
  },
];

module.exports = microbiologyQuestions;
