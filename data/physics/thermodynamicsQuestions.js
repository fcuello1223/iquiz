const thermodynamicsQuestions = [
  {
    text: "What is the SI unit of temperature?",
    options: [
      { text: "Kelvin", isCorrect: true },
      { text: "Celsius", isCorrect: false },
      { text: "Fahrenheit", isCorrect: false },
      { text: "Joule", isCorrect: false },
    ],
  },
  {
    text: "Which law of thermodynamics states that energy cannot be created or destroyed?",
    options: [
      { text: "First Law", isCorrect: true },
      { text: "Second Law", isCorrect: false },
      { text: "Third Law", isCorrect: false },
      { text: "Zeroth Law", isCorrect: false },
    ],
  },
  {
    text: "What does the second law of thermodynamics imply about heat flow?",
    options: [
      { text: "Heat flows spontaneously from hot to cold", isCorrect: true },
      { text: "Heat flows from cold to hot", isCorrect: false },
      { text: "Heat can be created", isCorrect: false },
      { text: "Energy is always conserved", isCorrect: false },
    ],
  },
  {
    text: "What is entropy a measure of?",
    options: [
      { text: "Disorder in a system", isCorrect: true },
      { text: "Heat capacity", isCorrect: false },
      { text: "Internal energy", isCorrect: false },
      { text: "Temperature", isCorrect: false },
    ],
  },
  {
    text: "Which law of thermodynamics introduces the concept of absolute zero?",
    options: [
      { text: "Third Law", isCorrect: true },
      { text: "First Law", isCorrect: false },
      { text: "Second Law", isCorrect: false },
      { text: "Zeroth Law", isCorrect: false },
    ],
  },
  {
    text: "What is the internal energy of an ideal gas dependent on?",
    options: [
      { text: "Temperature only", isCorrect: true },
      { text: "Pressure only", isCorrect: false },
      { text: "Volume only", isCorrect: false },
      { text: "Temperature and pressure", isCorrect: false },
    ],
  },
  {
    text: "What is the term for the heat required to raise the temperature of 1 gram of a substance by 1°C?",
    options: [
      { text: "Specific heat capacity", isCorrect: true },
      { text: "Latent heat", isCorrect: false },
      { text: "Thermal conductivity", isCorrect: false },
      { text: "Enthalpy", isCorrect: false },
    ],
  },
  {
    text: "In which type of thermodynamic process does the pressure remain constant?",
    options: [
      { text: "Isobaric", isCorrect: true },
      { text: "Isochoric", isCorrect: false },
      { text: "Isothermal", isCorrect: false },
      { text: "Adiabatic", isCorrect: false },
    ],
  },
  {
    text: "Which thermodynamic process occurs without heat exchange?",
    options: [
      { text: "Adiabatic", isCorrect: true },
      { text: "Isobaric", isCorrect: false },
      { text: "Isothermal", isCorrect: false },
      { text: "Isochoric", isCorrect: false },
    ],
  },
  {
    text: "What does the Zeroth Law of Thermodynamics define?",
    options: [
      { text: "Thermal equilibrium", isCorrect: true },
      { text: "Energy conservation", isCorrect: false },
      { text: "Entropy behavior", isCorrect: false },
      { text: "Absolute zero", isCorrect: false },
    ],
  },
  {
    text: "Which device operates based on the principles of the first law of thermodynamics?",
    options: [
      { text: "Heat engine", isCorrect: true },
      { text: "Voltmeter", isCorrect: false },
      { text: "Barometer", isCorrect: false },
      { text: "Ammeter", isCorrect: false },
    ],
  },
  {
    text: "What happens to the temperature of an ideal gas during an isothermal process?",
    options: [
      { text: "It remains constant", isCorrect: true },
      { text: "It increases", isCorrect: false },
      { text: "It decreases", isCorrect: false },
      { text: "It fluctuates", isCorrect: false },
    ],
  },
  {
    text: "Which quantity is kept constant in an isochoric process?",
    options: [
      { text: "Volume", isCorrect: true },
      { text: "Pressure", isCorrect: false },
      { text: "Temperature", isCorrect: false },
      { text: "Heat", isCorrect: false },
    ],
  },
  {
    text: "Which type of energy transfer occurs without the involvement of matter?",
    options: [
      { text: "Radiation", isCorrect: true },
      { text: "Conduction", isCorrect: false },
      { text: "Convection", isCorrect: false },
      { text: "Evaporation", isCorrect: false },
    ],
  },
  {
    text: "In a reversible adiabatic process for an ideal gas, what is conserved?",
    options: [
      { text: "Entropy", isCorrect: false },
      { text: "Heat", isCorrect: false },
      { text: "Total energy", isCorrect: true },
      { text: "Volume", isCorrect: false },
    ],
  },
  {
    text: "Which of the following best defines enthalpy (H)?",
    options: [
      { text: "H = U + PV", isCorrect: true },
      { text: "H = PV − U", isCorrect: false },
      { text: "H = T × S", isCorrect: false },
      { text: "H = Q − W", isCorrect: false },
    ],
  },
  {
    text: "Which cycle is used to model the operation of a heat engine?",
    options: [
      { text: "Carnot cycle", isCorrect: true },
      { text: "Otto cycle", isCorrect: false },
      { text: "Rankine cycle", isCorrect: false },
      { text: "Refrigeration cycle", isCorrect: false },
    ],
  },
  {
    text: "What is the efficiency of a Carnot engine dependent on?",
    options: [
      { text: "Temperatures of the hot and cold reservoirs", isCorrect: true },
      { text: "Volume of gas", isCorrect: false },
      { text: "Entropy of the system", isCorrect: false },
      { text: "Mass of the gas", isCorrect: false },
    ],
  },
  {
    text: "What is the heat capacity at constant volume denoted by?",
    options: [
      { text: "Cv", isCorrect: true },
      { text: "Cp", isCorrect: false },
      { text: "H", isCorrect: false },
      { text: "Q", isCorrect: false },
    ],
  },
  {
    text: "What does a positive value of work (W > 0) indicate in thermodynamics?",
    options: [
      { text: "Work is done by the system", isCorrect: true },
      { text: "Work is done on the system", isCorrect: false },
      { text: "No work is done", isCorrect: false },
      { text: "Work is negative", isCorrect: false },
    ],
  },
  {
    text: "Which quantity remains constant in an isothermal process for an ideal gas?",
    options: [
      { text: "Internal energy", isCorrect: true },
      { text: "Pressure", isCorrect: false },
      { text: "Volume", isCorrect: false },
      { text: "Entropy", isCorrect: false },
    ],
  },
  {
    text: "Which device is used to measure the heat absorbed or released in a chemical reaction?",
    options: [
      { text: "Calorimeter", isCorrect: true },
      { text: "Thermometer", isCorrect: false },
      { text: "Barometer", isCorrect: false },
      { text: "Manometer", isCorrect: false },
    ],
  },
  {
    text: "Which term describes the maximum possible efficiency of a heat engine?",
    options: [
      { text: "Carnot efficiency", isCorrect: true },
      { text: "Entropy limit", isCorrect: false },
      { text: "Adiabatic ratio", isCorrect: false },
      { text: "Reversible limit", isCorrect: false },
    ],
  },
  {
    text: "In which process does the system exchange energy only as work, not heat?",
    options: [
      { text: "Adiabatic", isCorrect: true },
      { text: "Isothermal", isCorrect: false },
      { text: "Isobaric", isCorrect: false },
      { text: "Isochoric", isCorrect: false },
    ],
  },
  {
    text: "What is the total entropy change of a reversible process?",
    options: [
      { text: "Zero", isCorrect: true },
      { text: "Positive", isCorrect: false },
      { text: "Negative", isCorrect: false },
      { text: "Infinite", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is not a state function?",
    options: [
      { text: "Work", isCorrect: true },
      { text: "Internal energy", isCorrect: false },
      { text: "Enthalpy", isCorrect: false },
      { text: "Entropy", isCorrect: false },
    ],
  },
  {
    text: "What is the primary function of a refrigerator in thermodynamic terms?",
    options: [
      { text: "Transfer heat from cold to hot", isCorrect: true },
      { text: "Convert heat to work", isCorrect: false },
      { text: "Reduce entropy", isCorrect: false },
      { text: "Produce mechanical energy", isCorrect: false },
    ],
  },
  {
    text: "What does Cp − Cv equal for an ideal gas?",
    options: [
      { text: "The gas constant R", isCorrect: true },
      { text: "Zero", isCorrect: false },
      { text: "Internal energy", isCorrect: false },
      { text: "Enthalpy", isCorrect: false },
    ],
  },
  {
    text: "Which law of thermodynamics sets a limit on the efficiency of heat engines?",
    options: [
      { text: "Second Law", isCorrect: true },
      { text: "First Law", isCorrect: false },
      { text: "Third Law", isCorrect: false },
      { text: "Zeroth Law", isCorrect: false },
    ],
  },
  {
    text: "In thermodynamics, what is a closed system?",
    options: [
      {
        text: "A system that exchanges energy but not matter with surroundings",
        isCorrect: true,
      },
      {
        text: "A system that exchanges both matter and energy",
        isCorrect: false,
      },
      { text: "A system that exchanges only matter", isCorrect: false },
      {
        text: "A system that exchanges neither matter nor energy",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the heat required to change a substance from solid to liquid without changing its temperature?",
    options: [
      { text: "Latent heat of fusion", isCorrect: true },
      { text: "Specific heat", isCorrect: false },
      { text: "Enthalpy", isCorrect: false },
      { text: "Latent heat of vaporization", isCorrect: false },
    ],
  },
  {
    text: "What happens to the pressure of a gas when its volume decreases at constant temperature?",
    options: [
      { text: "It increases", isCorrect: true },
      { text: "It decreases", isCorrect: false },
      { text: "It remains the same", isCorrect: false },
      { text: "It becomes zero", isCorrect: false },
    ],
  },
  {
    text: "Which term describes the total kinetic and potential energy of the molecules in a system?",
    options: [
      { text: "Internal energy", isCorrect: true },
      { text: "Enthalpy", isCorrect: false },
      { text: "Entropy", isCorrect: false },
      { text: "Heat", isCorrect: false },
    ],
  },
  {
    text: "What is the process called when a liquid changes to a gas at a temperature below its boiling point?",
    options: [
      { text: "Evaporation", isCorrect: true },
      { text: "Condensation", isCorrect: false },
      { text: "Sublimation", isCorrect: false },
      { text: "Boiling", isCorrect: false },
    ],
  },
  {
    text: "Which of the following increases as a substance absorbs heat during a phase change?",
    options: [
      { text: "Potential energy", isCorrect: true },
      { text: "Temperature", isCorrect: false },
      { text: "Kinetic energy", isCorrect: false },
      { text: "Pressure", isCorrect: false },
    ],
  },
  {
    text: "Which law of thermodynamics introduces the concept of temperature as a fundamental and measurable property?",
    options: [
      { text: "Zeroth Law", isCorrect: true },
      { text: "First Law", isCorrect: false },
      { text: "Second Law", isCorrect: false },
      { text: "Third Law", isCorrect: false },
    ],
  },
  {
    text: "What is the term for a substance used in refrigerators to absorb and release heat?",
    options: [
      { text: "Refrigerant", isCorrect: true },
      { text: "Coolant", isCorrect: false },
      { text: "Insulator", isCorrect: false },
      { text: "Conductor", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is an example of a heat engine?",
    options: [
      { text: "Steam turbine", isCorrect: true },
      { text: "Refrigerator", isCorrect: false },
      { text: "Electric motor", isCorrect: false },
      { text: "Transformer", isCorrect: false },
    ],
  },
  {
    text: "Which process involves the direct transfer of heat through a material without the movement of the material itself?",
    options: [
      { text: "Conduction", isCorrect: true },
      { text: "Convection", isCorrect: false },
      { text: "Radiation", isCorrect: false },
      { text: "Absorption", isCorrect: false },
    ],
  },
  {
    text: "What does the efficiency of a real heat engine always remain below?",
    options: [
      { text: "Carnot efficiency", isCorrect: true },
      { text: "100%", isCorrect: false },
      { text: "Internal energy", isCorrect: false },
      { text: "Specific heat", isCorrect: false },
    ],
  },
  {
    text: "What is the relationship between pressure and volume in Boyle's Law?",
    options: [
      { text: "They are inversely proportional", isCorrect: true },
      { text: "They are directly proportional", isCorrect: false },
      { text: "They are unrelated", isCorrect: false },
      { text: "They both remain constant", isCorrect: false },
    ],
  },
  {
    text: "Which thermodynamic process occurs at constant temperature?",
    options: [
      { text: "Isothermal", isCorrect: true },
      { text: "Adiabatic", isCorrect: false },
      { text: "Isochoric", isCorrect: false },
      { text: "Isobaric", isCorrect: false },
    ],
  },
  {
    text: "Which law states that the entropy of a perfect crystal approaches zero as temperature approaches absolute zero?",
    options: [
      { text: "Third Law", isCorrect: true },
      { text: "Second Law", isCorrect: false },
      { text: "First Law", isCorrect: false },
      { text: "Zeroth Law", isCorrect: false },
    ],
  },
  {
    text: "Which gas law relates pressure, volume, and temperature?",
    options: [
      { text: "Ideal Gas Law", isCorrect: true },
      { text: "Boyle's Law", isCorrect: false },
      { text: "Charles's Law", isCorrect: false },
      { text: "Avogadro's Law", isCorrect: false },
    ],
  },
  {
    text: "In the ideal gas equation PV = nRT, what does 'R' represent?",
    options: [
      { text: "Universal gas constant", isCorrect: true },
      { text: "Internal energy", isCorrect: false },
      { text: "Pressure", isCorrect: false },
      { text: "Entropy", isCorrect: false },
    ],
  },
  {
    text: "Which process has no change in volume?",
    options: [
      { text: "Isochoric", isCorrect: true },
      { text: "Isothermal", isCorrect: false },
      { text: "Isobaric", isCorrect: false },
      { text: "Adiabatic", isCorrect: false },
    ],
  },
  {
    text: "What is the primary function of insulation in thermal systems?",
    options: [
      { text: "Reduce heat transfer", isCorrect: true },
      { text: "Increase temperature", isCorrect: false },
      { text: "Absorb moisture", isCorrect: false },
      { text: "Store energy", isCorrect: false },
    ],
  },
  {
    text: "Which of the following processes is least efficient at transferring heat?",
    options: [
      { text: "Radiation through vacuum", isCorrect: false },
      { text: "Convection in air", isCorrect: true },
      { text: "Conduction in metal", isCorrect: false },
      { text: "Convection in liquid", isCorrect: false },
    ],
  },
  {
    text: "When a gas expands adiabatically, what happens to its temperature?",
    options: [
      { text: "It decreases", isCorrect: true },
      { text: "It increases", isCorrect: false },
      { text: "It stays the same", isCorrect: false },
      { text: "It becomes infinite", isCorrect: false },
    ],
  },
  {
    text: "Which law of thermodynamics deals with the concept of thermal equilibrium?",
    options: [
      { text: "Zeroth Law", isCorrect: true },
      { text: "First Law", isCorrect: false },
      { text: "Second Law", isCorrect: false },
      { text: "Third Law", isCorrect: false },
    ],
  },
];

module.exports = thermodynamicsQuestions;
