const geologyQuestions = [
  {
    text: "What is the Earth's outermost layer called?",
    options: [
      { text: "Crust", isCorrect: true },
      { text: "Mantle", isCorrect: false },
      { text: "Core", isCorrect: false },
      { text: "Lithosphere", isCorrect: false },
    ],
  },
  {
    text: "Which type of rock is formed by cooling and solidification of magma or lava?",
    options: [
      { text: "Igneous rock", isCorrect: true },
      { text: "Sedimentary rock", isCorrect: false },
      { text: "Metamorphic rock", isCorrect: false },
      { text: "Basaltic rock", isCorrect: false },
    ],
  },
  {
    text: "What is the most abundant mineral in Earth’s crust?",
    options: [
      { text: "Feldspar", isCorrect: true },
      { text: "Quartz", isCorrect: false },
      { text: "Calcite", isCorrect: false },
      { text: "Mica", isCorrect: false },
    ],
  },
  {
    text: "Which scale is used to measure the magnitude of earthquakes?",
    options: [
      { text: "Richter scale", isCorrect: true },
      { text: "Beaufort scale", isCorrect: false },
      { text: "Fujita scale", isCorrect: false },
      { text: "Decibel scale", isCorrect: false },
    ],
  },
  {
    text: "What is the process of breaking down rocks by wind, water, or ice called?",
    options: [
      { text: "Weathering", isCorrect: true },
      { text: "Erosion", isCorrect: false },
      { text: "Metamorphism", isCorrect: false },
      { text: "Sedimentation", isCorrect: false },
    ],
  },
  {
    text: "Which layer of the Earth is responsible for its magnetic field?",
    options: [
      { text: "Outer core", isCorrect: true },
      { text: "Inner core", isCorrect: false },
      { text: "Mantle", isCorrect: false },
      { text: "Crust", isCorrect: false },
    ],
  },
  {
    text: "What do we call a crack in the Earth's crust where movement has occurred?",
    options: [
      { text: "Fault", isCorrect: true },
      { text: "Fold", isCorrect: false },
      { text: "Rift", isCorrect: false },
      { text: "Seam", isCorrect: false },
    ],
  },
  {
    text: "Which type of rock is formed by the compaction and cementation of sediments?",
    options: [
      { text: "Sedimentary rock", isCorrect: true },
      { text: "Igneous rock", isCorrect: false },
      { text: "Metamorphic rock", isCorrect: false },
      { text: "Obsidian", isCorrect: false },
    ],
  },
  {
    text: "What is the supercontinent that existed about 300 million years ago?",
    options: [
      { text: "Pangaea", isCorrect: true },
      { text: "Gondwana", isCorrect: false },
      { text: "Laurasia", isCorrect: false },
      { text: "Eurasia", isCorrect: false },
    ],
  },
  {
    text: "Which type of plate boundary is associated with the creation of new oceanic crust?",
    options: [
      { text: "Divergent boundary", isCorrect: true },
      { text: "Convergent boundary", isCorrect: false },
      { text: "Transform boundary", isCorrect: false },
      { text: "Subduction zone", isCorrect: false },
    ],
  },
  {
    text: "Which type of rock is formed under high pressure and temperature without melting?",
    options: [
      { text: "Metamorphic rock", isCorrect: true },
      { text: "Igneous rock", isCorrect: false },
      { text: "Sedimentary rock", isCorrect: false },
      { text: "Volcanic rock", isCorrect: false },
    ],
  },
  {
    text: "What is a tsunami most commonly caused by?",
    options: [
      { text: "Underwater earthquakes", isCorrect: true },
      { text: "Hurricanes", isCorrect: false },
      { text: "Tidal waves", isCorrect: false },
      { text: "Volcanic ash", isCorrect: false },
    ],
  },
  {
    text: "What is the term for molten rock beneath the Earth's surface?",
    options: [
      { text: "Magma", isCorrect: true },
      { text: "Lava", isCorrect: false },
      { text: "Obsidian", isCorrect: false },
      { text: "Basalt", isCorrect: false },
    ],
  },
  {
    text: "Which type of volcano is characterized by gentle slopes and runny lava flows?",
    options: [
      { text: "Shield volcano", isCorrect: true },
      { text: "Composite volcano", isCorrect: false },
      { text: "Cinder cone volcano", isCorrect: false },
      { text: "Stratovolcano", isCorrect: false },
    ],
  },
  {
    text: "What type of geological structure forms when rock layers bend under pressure?",
    options: [
      { text: "Fold", isCorrect: true },
      { text: "Fault", isCorrect: false },
      { text: "Fracture", isCorrect: false },
      { text: "Rift", isCorrect: false },
    ],
  },
  {
    text: "Which geologic era is known as the 'Age of Dinosaurs'?",
    options: [
      { text: "Mesozoic", isCorrect: true },
      { text: "Cenozoic", isCorrect: false },
      { text: "Paleozoic", isCorrect: false },
      { text: "Precambrian", isCorrect: false },
    ],
  },
  {
    text: "What is loam?",
    options: [
      { text: "A mixture of sand, silt, and clay", isCorrect: true },
      { text: "A type of volcanic ash", isCorrect: false },
      { text: "A crystalline mineral", isCorrect: false },
      { text: "Compacted sedimentary rock", isCorrect: false },
    ],
  },
  {
    text: "What is karst topography typically formed by?",
    options: [
      { text: "The dissolution of limestone", isCorrect: true },
      { text: "Volcanic eruptions", isCorrect: false },
      { text: "Tectonic uplift", isCorrect: false },
      { text: "Glacial erosion", isCorrect: false },
    ],
  },
  {
    text: "Which type of sediment is the finest in size?",
    options: [
      { text: "Clay", isCorrect: true },
      { text: "Silt", isCorrect: false },
      { text: "Sand", isCorrect: false },
      { text: "Gravel", isCorrect: false },
    ],
  },
  {
    text: "What is the name for a naturally occurring, solid mass of mineral or mineral-like matter?",
    options: [
      { text: "Rock", isCorrect: true },
      { text: "Crystal", isCorrect: false },
      { text: "Ore", isCorrect: false },
      { text: "Sediment", isCorrect: false },
    ],
  },
  {
    text: "Which boundary type is associated with the formation of mountains?",
    options: [
      { text: "Convergent boundary", isCorrect: true },
      { text: "Divergent boundary", isCorrect: false },
      { text: "Transform boundary", isCorrect: false },
      { text: "Plate interior", isCorrect: false },
    ],
  },
  {
    text: "Which mineral is used to identify hardness level 10 on the Mohs scale?",
    options: [
      { text: "Diamond", isCorrect: true },
      { text: "Quartz", isCorrect: false },
      { text: "Topaz", isCorrect: false },
      { text: "Corundum", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the process where sediments are pressed and glued together?",
    options: [
      { text: "Lithification", isCorrect: true },
      { text: "Weathering", isCorrect: false },
      { text: "Melting", isCorrect: false },
      { text: "Crystallization", isCorrect: false },
    ],
  },
  {
    text: "Which igneous rock has a glassy texture and forms from rapid cooling?",
    options: [
      { text: "Obsidian", isCorrect: true },
      { text: "Granite", isCorrect: false },
      { text: "Basalt", isCorrect: false },
      { text: "Diorite", isCorrect: false },
    ],
  },
  {
    text: "What do geologists call a rock that contains enough metal to be mined profitably?",
    options: [
      { text: "Ore", isCorrect: true },
      { text: "Gemstone", isCorrect: false },
      { text: "Fossil", isCorrect: false },
      { text: "Aggregate", isCorrect: false },
    ],
  },
  {
    text: "Which type of weathering involves the chemical breakdown of minerals?",
    options: [
      { text: "Chemical weathering", isCorrect: true },
      { text: "Mechanical weathering", isCorrect: false },
      { text: "Biological weathering", isCorrect: false },
      { text: "Thermal weathering", isCorrect: false },
    ],
  },
  {
    text: "What is the term for the place inside the Earth where an earthquake originates?",
    options: [
      { text: "Focus", isCorrect: true },
      { text: "Epicenter", isCorrect: false },
      { text: "Fault line", isCorrect: false },
      { text: "Hypocenter", isCorrect: false },
    ],
  },
  {
    text: "What is the name for large, moving masses of ice that shape the landscape?",
    options: [
      { text: "Glaciers", isCorrect: true },
      { text: "Landslides", isCorrect: false },
      { text: "Avalanches", isCorrect: false },
      { text: "Drumlins", isCorrect: false },
    ],
  },
  {
    text: "Which feature is created when a river cuts deeply into bedrock over time?",
    options: [
      { text: "Canyon", isCorrect: true },
      { text: "Delta", isCorrect: false },
      { text: "Alluvial fan", isCorrect: false },
      { text: "Glacial trough", isCorrect: false },
    ],
  },
  {
    text: "What is the name for the continuous movement of Earth's tectonic plates?",
    options: [
      { text: "Plate tectonics", isCorrect: true },
      { text: "Continental drift", isCorrect: false },
      { text: "Subduction", isCorrect: false },
      { text: "Seafloor spreading", isCorrect: false },
    ],
  },
  {
    text: "Which geologic time period is known for the explosion of marine life?",
    options: [
      { text: "Cambrian", isCorrect: true },
      { text: "Jurassic", isCorrect: false },
      { text: "Cretaceous", isCorrect: false },
      { text: "Permian", isCorrect: false },
    ],
  },
  {
    text: "What do we call a bowl-shaped volcanic depression formed by collapse after an eruption?",
    options: [
      { text: "Caldera", isCorrect: true },
      { text: "Crater", isCorrect: false },
      { text: "Lava dome", isCorrect: false },
      { text: "Vent", isCorrect: false },
    ],
  },
  {
    text: "Which type of sedimentary rock is formed from the remains of living organisms?",
    options: [
      { text: "Organic sedimentary rock", isCorrect: true },
      { text: "Clastic sedimentary rock", isCorrect: false },
      { text: "Chemical sedimentary rock", isCorrect: false },
      { text: "Evaporite", isCorrect: false },
    ],
  },
  {
    text: "Which process involves the movement of sediment from one place to another?",
    options: [
      { text: "Erosion", isCorrect: true },
      { text: "Deposition", isCorrect: false },
      { text: "Lithification", isCorrect: false },
      { text: "Compaction", isCorrect: false },
    ],
  },
  {
    text: "Which rock is commonly used as a building material and forms from limestone under heat and pressure?",
    options: [
      { text: "Marble", isCorrect: true },
      { text: "Granite", isCorrect: false },
      { text: "Slate", isCorrect: false },
      { text: "Basalt", isCorrect: false },
    ],
  },
  {
    text: "Which era followed the mass extinction of the dinosaurs?",
    options: [
      { text: "Cenozoic", isCorrect: true },
      { text: "Paleozoic", isCorrect: false },
      { text: "Mesozoic", isCorrect: false },
      { text: "Precambrian", isCorrect: false },
    ],
  },
  {
    text: "Which geological feature is commonly formed at a convergent plate boundary between oceanic and continental plates?",
    options: [
      { text: "Trench", isCorrect: true },
      { text: "Mid-ocean ridge", isCorrect: false },
      { text: "Rift valley", isCorrect: false },
      { text: "Plateau", isCorrect: false },
    ],
  },
  {
    text: "Which term refers to the alignment of minerals in metamorphic rock due to pressure?",
    options: [
      { text: "Foliation", isCorrect: true },
      { text: "Stratification", isCorrect: false },
      { text: "Crystallization", isCorrect: false },
      { text: "Sedimentation", isCorrect: false },
    ],
  },
  {
    text: "Which process is responsible for the formation of deltas at river mouths?",
    options: [
      { text: "Deposition", isCorrect: true },
      { text: "Erosion", isCorrect: false },
      { text: "Weathering", isCorrect: false },
      { text: "Subduction", isCorrect: false },
    ],
  },
  {
    text: "What is the name for a body of intrusive igneous rock that cuts across layers of sedimentary rock?",
    options: [
      { text: "Dike", isCorrect: true },
      { text: "Sill", isCorrect: false },
      { text: "Batholith", isCorrect: false },
      { text: "Laccolith", isCorrect: false },
    ],
  },
  {
    text: "Which layer of the Earth lies just beneath the crust?",
    options: [
      { text: "Mantle", isCorrect: true },
      { text: "Outer core", isCorrect: false },
      { text: "Inner core", isCorrect: false },
      { text: "Asthenosphere", isCorrect: false },
    ],
  },
  {
    text: "What is the term for the process by which continents drift apart over time?",
    options: [
      { text: "Continental drift", isCorrect: true },
      { text: "Seafloor spreading", isCorrect: false },
      { text: "Plate convergence", isCorrect: false },
      { text: "Subduction", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the molten rock that flows out of a volcano?",
    options: [
      { text: "Lava", isCorrect: true },
      { text: "Magma", isCorrect: false },
      { text: "Ash", isCorrect: false },
      { text: "Pumice", isCorrect: false },
    ],
  },
  {
    text: "What type of volcano is Mount St. Helens?",
    options: [
      { text: "Stratovolcano", isCorrect: true },
      { text: "Shield volcano", isCorrect: false },
      { text: "Cinder cone", isCorrect: false },
      { text: "Lava dome", isCorrect: false },
    ],
  },
  {
    text: "Which type of fault is caused by tensional forces?",
    options: [
      { text: "Normal fault", isCorrect: true },
      { text: "Reverse fault", isCorrect: false },
      { text: "Strike-slip fault", isCorrect: false },
      { text: "Oblique fault", isCorrect: false },
    ],
  },
  {
    text: "Which type of rock often contains fossils?",
    options: [
      { text: "Sedimentary", isCorrect: true },
      { text: "Igneous", isCorrect: false },
      { text: "Metamorphic", isCorrect: false },
      { text: "Obsidian", isCorrect: false },
    ],
  },
  {
    text: "Which mineral is commonly used to make table salt?",
    options: [
      { text: "Halite", isCorrect: true },
      { text: "Gypsum", isCorrect: false },
      { text: "Calcite", isCorrect: false },
      { text: "Quartz", isCorrect: false },
    ],
  },
  {
    text: "What is the solid innermost part of Earth made of?",
    options: [
      { text: "Iron and nickel", isCorrect: true },
      { text: "Silicon and oxygen", isCorrect: false },
      { text: "Basalt and granite", isCorrect: false },
      { text: "Water and carbon", isCorrect: false },
    ],
  },
  {
    text: "What term describes the point on the Earth's surface directly above the earthquake focus?",
    options: [
      { text: "Epicenter", isCorrect: true },
      { text: "Focus", isCorrect: false },
      { text: "Hypocenter", isCorrect: false },
      { text: "Fault line", isCorrect: false },
    ],
  },
  {
    text: "Which feature is formed by the erosion of soft rock under a harder rock layer?",
    options: [
      { text: "Arch", isCorrect: true },
      { text: "Delta", isCorrect: false },
      { text: "Volcano", isCorrect: false },
      { text: "Fold", isCorrect: false },
    ],
  },
];

module.exports = geologyQuestions;
