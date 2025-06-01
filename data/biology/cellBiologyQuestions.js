const cellBiologyQuestions = [
  {
    text: "What is the basic unit of life?",
    options: [
      { text: "Cell", isCorrect: true },
      { text: "Tissue", isCorrect: false },
      { text: "Organ", isCorrect: false },
      { text: "Atom", isCorrect: false },
    ],
  },
  {
    text: "Which organelle is known as the powerhouse of the cell?",
    options: [
      { text: "Mitochondrion", isCorrect: true },
      { text: "Nucleus", isCorrect: false },
      { text: "Ribosome", isCorrect: false },
      { text: "Golgi apparatus", isCorrect: false },
    ],
  },
  {
    text: "What structure controls the movement of substances in and out of the cell?",
    options: [
      { text: "Cell membrane", isCorrect: true },
      { text: "Cell wall", isCorrect: false },
      { text: "Cytoplasm", isCorrect: false },
      { text: "Endoplasmic reticulum", isCorrect: false },
    ],
  },
  {
    text: "Which organelle is responsible for protein synthesis?",
    options: [
      { text: "Ribosome", isCorrect: true },
      { text: "Lysosome", isCorrect: false },
      { text: "Vacuole", isCorrect: false },
      { text: "Mitochondria", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is found only in plant cells and not in animal cells?",
    options: [
      { text: "Chloroplast", isCorrect: true },
      { text: "Mitochondria", isCorrect: false },
      { text: "Nucleus", isCorrect: false },
      { text: "Ribosomes", isCorrect: false },
    ],
  },
  {
    text: "Where is genetic material stored in a eukaryotic cell?",
    options: [
      { text: "Nucleus", isCorrect: true },
      { text: "Cytoplasm", isCorrect: false },
      { text: "Ribosome", isCorrect: false },
      { text: "Endoplasmic reticulum", isCorrect: false },
    ],
  },
  {
    text: "Which organelle modifies, sorts, and packages proteins?",
    options: [
      { text: "Golgi apparatus", isCorrect: true },
      { text: "Nucleolus", isCorrect: false },
      { text: "Lysosome", isCorrect: false },
      { text: "Centrosome", isCorrect: false },
    ],
  },
  {
    text: "What is the jelly-like substance that fills the inside of the cell?",
    options: [
      { text: "Cytoplasm", isCorrect: true },
      { text: "Nucleoplasm", isCorrect: false },
      { text: "Plasma", isCorrect: false },
      { text: "Matrix", isCorrect: false },
    ],
  },
  {
    text: "What is the function of the lysosome?",
    options: [
      { text: "Break down waste and cellular debris", isCorrect: true },
      { text: "Produce ATP", isCorrect: false },
      { text: "Store genetic information", isCorrect: false },
      { text: "Synthesize proteins", isCorrect: false },
    ],
  },
  {
    text: "Which structure helps plant cells remain rigid?",
    options: [
      { text: "Cell wall", isCorrect: true },
      { text: "Vacuole", isCorrect: false },
      { text: "Cytoskeleton", isCorrect: false },
      { text: "Chloroplast", isCorrect: false },
    ],
  },
  {
    text: "What is the main function of the large central vacuole in plant cells?",
    options: [
      { text: "Storage of water and nutrients", isCorrect: true },
      { text: "Protein synthesis", isCorrect: false },
      { text: "ATP production", isCorrect: false },
      { text: "Genetic storage", isCorrect: false },
    ],
  },
  {
    text: "Which organelle is responsible for detoxifying harmful substances in the cell?",
    options: [
      { text: "Smooth endoplasmic reticulum", isCorrect: true },
      { text: "Rough endoplasmic reticulum", isCorrect: false },
      { text: "Golgi apparatus", isCorrect: false },
      { text: "Nucleolus", isCorrect: false },
    ],
  },
  {
    text: "What is the role of the cytoskeleton?",
    options: [
      {
        text: "To maintain cell shape and assist in movement",
        isCorrect: true,
      },
      { text: "To carry out photosynthesis", isCorrect: false },
      { text: "To produce hormones", isCorrect: false },
      { text: "To control cell division", isCorrect: false },
    ],
  },
  {
    text: "Which structure is responsible for organizing microtubules during cell division?",
    options: [
      { text: "Centrosome", isCorrect: true },
      { text: "Lysosome", isCorrect: false },
      { text: "Ribosome", isCorrect: false },
      { text: "Peroxisome", isCorrect: false },
    ],
  },
  {
    text: "Which type of cell lacks a nucleus?",
    options: [
      { text: "Prokaryotic cell", isCorrect: true },
      { text: "Eukaryotic cell", isCorrect: false },
      { text: "Animal cell", isCorrect: false },
      { text: "Plant cell", isCorrect: false },
    ],
  },
  {
    text: "Which of the following processes occurs in the mitochondria?",
    options: [
      { text: "Cellular respiration", isCorrect: true },
      { text: "Protein synthesis", isCorrect: false },
      { text: "DNA replication", isCorrect: false },
      { text: "Photosynthesis", isCorrect: false },
    ],
  },
  {
    text: "Which cell structure is selectively permeable?",
    options: [
      { text: "Cell membrane", isCorrect: true },
      { text: "Cell wall", isCorrect: false },
      { text: "Cytoplasm", isCorrect: false },
      { text: "Nucleus", isCorrect: false },
    ],
  },
  {
    text: "In which organelle does photosynthesis occur?",
    options: [
      { text: "Chloroplast", isCorrect: true },
      { text: "Mitochondrion", isCorrect: false },
      { text: "Golgi apparatus", isCorrect: false },
      { text: "Endoplasmic reticulum", isCorrect: false },
    ],
  },
  {
    text: "What is the function of the rough endoplasmic reticulum?",
    options: [
      { text: "Protein synthesis and processing", isCorrect: true },
      { text: "Lipid synthesis", isCorrect: false },
      { text: "Cell division", isCorrect: false },
      { text: "Energy production", isCorrect: false },
    ],
  },
  {
    text: "Which structure contains digestive enzymes for breaking down cellular waste?",
    options: [
      { text: "Lysosome", isCorrect: true },
      { text: "Vacuole", isCorrect: false },
      { text: "Peroxisome", isCorrect: false },
      { text: "Golgi body", isCorrect: false },
    ],
  },
  {
    text: "What is the main function of ribosomes?",
    options: [
      { text: "Protein synthesis", isCorrect: true },
      { text: "Energy storage", isCorrect: false },
      { text: "DNA replication", isCorrect: false },
      { text: "Lipid transport", isCorrect: false },
    ],
  },
  {
    text: "What is the role of the nucleolus inside the nucleus?",
    options: [
      { text: "Ribosome production", isCorrect: true },
      { text: "DNA replication", isCorrect: false },
      { text: "Energy production", isCorrect: false },
      { text: "Protein modification", isCorrect: false },
    ],
  },
  {
    text: "Which process allows water to move across a selectively permeable membrane?",
    options: [
      { text: "Osmosis", isCorrect: true },
      { text: "Diffusion", isCorrect: false },
      { text: "Active transport", isCorrect: false },
      { text: "Phagocytosis", isCorrect: false },
    ],
  },
  {
    text: "Which part of the cell helps in intracellular transport and has ribosomes attached?",
    options: [
      { text: "Rough endoplasmic reticulum", isCorrect: true },
      { text: "Smooth endoplasmic reticulum", isCorrect: false },
      { text: "Golgi apparatus", isCorrect: false },
      { text: "Cytoskeleton", isCorrect: false },
    ],
  },
  {
    text: "Which structure allows for communication between plant cells?",
    options: [
      { text: "Plasmodesmata", isCorrect: true },
      { text: "Desmosomes", isCorrect: false },
      { text: "Gap junctions", isCorrect: false },
      { text: "Tight junctions", isCorrect: false },
    ],
  },
  {
    text: "What do chloroplasts and mitochondria have in common?",
    options: [
      { text: "They both have their own DNA", isCorrect: true },
      { text: "They both carry out photosynthesis", isCorrect: false },
      { text: "They both store waste", isCorrect: false },
      { text: "They both produce glucose", isCorrect: false },
    ],
  },
  {
    text: "Which organelle is most abundant in liver cells for detoxification?",
    options: [
      { text: "Smooth endoplasmic reticulum", isCorrect: true },
      { text: "Lysosome", isCorrect: false },
      { text: "Golgi apparatus", isCorrect: false },
      { text: "Rough ER", isCorrect: false },
    ],
  },
  {
    text: "Which type of cell has no membrane-bound organelles?",
    options: [
      { text: "Prokaryotic cell", isCorrect: true },
      { text: "Eukaryotic cell", isCorrect: false },
      { text: "Plant cell", isCorrect: false },
      { text: "Animal cell", isCorrect: false },
    ],
  },
  {
    text: "Which cellular structure is directly involved in mitosis?",
    options: [
      { text: "Centrioles", isCorrect: true },
      { text: "Lysosomes", isCorrect: false },
      { text: "Peroxisomes", isCorrect: false },
      { text: "Nucleolus", isCorrect: false },
    ],
  },
  {
    text: "What is the function of microvilli on the surface of some cells?",
    options: [
      { text: "Increase surface area for absorption", isCorrect: true },
      { text: "Aid in cell division", isCorrect: false },
      { text: "Store nutrients", isCorrect: false },
      { text: "Produce energy", isCorrect: false },
    ],
  },
  {
    text: "Which organelle helps break down fatty acids and detoxifies harmful substances?",
    options: [
      { text: "Peroxisome", isCorrect: true },
      { text: "Lysosome", isCorrect: false },
      { text: "Mitochondria", isCorrect: false },
      { text: "Golgi apparatus", isCorrect: false },
    ],
  },
  {
    text: "What is the main function of the smooth endoplasmic reticulum?",
    options: [
      { text: "Lipid synthesis and detoxification", isCorrect: true },
      { text: "Protein synthesis", isCorrect: false },
      { text: "DNA replication", isCorrect: false },
      { text: "Waste degradation", isCorrect: false },
    ],
  },
  {
    text: "Which structure is responsible for maintaining turgor pressure in plant cells?",
    options: [
      { text: "Central vacuole", isCorrect: true },
      { text: "Chloroplast", isCorrect: false },
      { text: "Cell membrane", isCorrect: false },
      { text: "Cytoskeleton", isCorrect: false },
    ],
  },
  {
    text: "Which type of transport does not require energy?",
    options: [
      { text: "Passive transport", isCorrect: true },
      { text: "Active transport", isCorrect: false },
      { text: "Endocytosis", isCorrect: false },
      { text: "Exocytosis", isCorrect: false },
    ],
  },
  {
    text: "What is pinocytosis?",
    options: [
      { text: "Cell drinking — uptake of fluids", isCorrect: true },
      { text: "Cell eating — engulfing large particles", isCorrect: false },
      { text: "Transport of ions", isCorrect: false },
      { text: "Formation of vesicles in the Golgi", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a function of the cytoplasm?",
    options: [
      { text: "Supports and suspends organelles", isCorrect: true },
      { text: "Stores genetic material", isCorrect: false },
      { text: "Synthesizes proteins", isCorrect: false },
      { text: "Controls cell division", isCorrect: false },
    ],
  },
  {
    text: "What are cilia used for in cells?",
    options: [
      {
        text: "Movement of substances across the cell surface",
        isCorrect: true,
      },
      { text: "Energy production", isCorrect: false },
      { text: "DNA replication", isCorrect: false },
      { text: "Photosynthesis", isCorrect: false },
    ],
  },
  {
    text: "Which cell structure helps form the mitotic spindle during cell division?",
    options: [
      { text: "Centrioles", isCorrect: true },
      { text: "Golgi bodies", isCorrect: false },
      { text: "Chloroplasts", isCorrect: false },
      { text: "Nucleolus", isCorrect: false },
    ],
  },
  {
    text: "Which organelle is most involved in apoptosis (programmed cell death)?",
    options: [
      { text: "Mitochondrion", isCorrect: true },
      { text: "Nucleus", isCorrect: false },
      { text: "Lysosome", isCorrect: false },
      { text: "Golgi apparatus", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is not found in animal cells?",
    options: [
      { text: "Cell wall", isCorrect: true },
      { text: "Lysosome", isCorrect: false },
      { text: "Mitochondrion", isCorrect: false },
      { text: "Nucleus", isCorrect: false },
    ],
  },
  {
    text: "Which organelle is responsible for sorting and packaging proteins?",
    options: [
      { text: "Golgi apparatus", isCorrect: true },
      { text: "Rough ER", isCorrect: false },
      { text: "Lysosome", isCorrect: false },
      { text: "Ribosome", isCorrect: false },
    ],
  },
  {
    text: "What is the liquid component of the cytoplasm called?",
    options: [
      { text: "Cytosol", isCorrect: true },
      { text: "Plasma", isCorrect: false },
      { text: "Matrix", isCorrect: false },
      { text: "Nucleoplasm", isCorrect: false },
    ],
  },
  {
    text: "What is the function of chromatin in the nucleus?",
    options: [
      { text: "To store genetic material in a loose form", isCorrect: true },
      { text: "To assist in energy production", isCorrect: false },
      { text: "To transport proteins", isCorrect: false },
      { text: "To digest cellular debris", isCorrect: false },
    ],
  },
  {
    text: "What do all prokaryotic and eukaryotic cells have in common?",
    options: [
      { text: "Cell membrane", isCorrect: true },
      { text: "Nucleus", isCorrect: false },
      { text: "Mitochondria", isCorrect: false },
      { text: "Endoplasmic reticulum", isCorrect: false },
    ],
  },
  {
    text: "What are glycoproteins in the cell membrane primarily used for?",
    options: [
      { text: "Cell recognition and signaling", isCorrect: true },
      { text: "ATP production", isCorrect: false },
      { text: "Protein synthesis", isCorrect: false },
      { text: "Lipid transport", isCorrect: false },
    ],
  },
  {
    text: "What process do cells use to expel materials in vesicles?",
    options: [
      { text: "Exocytosis", isCorrect: true },
      { text: "Endocytosis", isCorrect: false },
      { text: "Phagocytosis", isCorrect: false },
      { text: "Diffusion", isCorrect: false },
    ],
  },
  {
    text: "Which molecule primarily makes up the cell membrane?",
    options: [
      { text: "Phospholipids", isCorrect: true },
      { text: "Proteins", isCorrect: false },
      { text: "DNA", isCorrect: false },
      { text: "Cholesterol", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the process by which cells maintain internal balance?",
    options: [
      { text: "Homeostasis", isCorrect: true },
      { text: "Mitosis", isCorrect: false },
      { text: "Osmosis", isCorrect: false },
      { text: "Metabolism", isCorrect: false },
    ],
  },
  {
    text: "Which cell structure gives rise to spindle fibers during mitosis?",
    options: [
      { text: "Centrosome", isCorrect: true },
      { text: "Ribosome", isCorrect: false },
      { text: "Golgi apparatus", isCorrect: false },
      { text: "Nucleolus", isCorrect: false },
    ],
  },
  {
    text: "Which organelle contains its own DNA and is inherited maternally?",
    options: [
      { text: "Mitochondrion", isCorrect: true },
      { text: "Chloroplast", isCorrect: false },
      { text: "Nucleus", isCorrect: false },
      { text: "Ribosome", isCorrect: false },
    ],
  },
];

module.exports = cellBiologyQuestions;
