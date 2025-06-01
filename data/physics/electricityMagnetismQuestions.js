const electricityAndMagnetismQuestions = [
  {
    text: "What is the SI unit of electric current?",
    options: [
      { text: "Ampere", isCorrect: true },
      { text: "Volt", isCorrect: false },
      { text: "Ohm", isCorrect: false },
      { text: "Coulomb", isCorrect: false },
    ],
  },
  {
    text: "Which instrument is used to measure electric current?",
    options: [
      { text: "Ammeter", isCorrect: true },
      { text: "Voltmeter", isCorrect: false },
      { text: "Galvanometer", isCorrect: false },
      { text: "Multimeter", isCorrect: false },
    ],
  },
  {
    text: "What is the resistance of a conductor with voltage 10 V and current 2 A?",
    options: [
      { text: "5 Ω", isCorrect: true },
      { text: "20 Ω", isCorrect: false },
      { text: "0.2 Ω", isCorrect: false },
      { text: "12 Ω", isCorrect: false },
    ],
  },
  {
    text: "What type of charge does an electron carry?",
    options: [
      { text: "Negative", isCorrect: true },
      { text: "Positive", isCorrect: false },
      { text: "Neutral", isCorrect: false },
      { text: "Variable", isCorrect: false },
    ],
  },
  {
    text: "What does Ohm's Law state?",
    options: [
      { text: "V = IR", isCorrect: true },
      { text: "P = IV", isCorrect: false },
      { text: "F = qE", isCorrect: false },
      { text: "Q = It", isCorrect: false },
    ],
  },
  {
    text: "What is the unit of electrical resistance?",
    options: [
      { text: "Ohm", isCorrect: true },
      { text: "Watt", isCorrect: false },
      { text: "Joule", isCorrect: false },
      { text: "Ampere", isCorrect: false },
    ],
  },
  {
    text: "What is the direction of magnetic field lines around a bar magnet?",
    options: [
      { text: "From north to south outside the magnet", isCorrect: true },
      { text: "From south to north outside the magnet", isCorrect: false },
      { text: "Circular around the poles", isCorrect: false },
      { text: "Parallel to the length", isCorrect: false },
    ],
  },
  {
    text: "Which law describes the force between two electric charges?",
    options: [
      { text: "Coulomb’s Law", isCorrect: true },
      { text: "Faraday’s Law", isCorrect: false },
      { text: "Lenz’s Law", isCorrect: false },
      { text: "Ampere’s Law", isCorrect: false },
    ],
  },
  {
    text: "What is the effect of increasing the resistance in a circuit?",
    options: [
      { text: "The current decreases", isCorrect: true },
      { text: "The voltage increases", isCorrect: false },
      { text: "The power increases", isCorrect: false },
      { text: "The charge increases", isCorrect: false },
    ],
  },
  {
    text: "What happens when a conductor moves through a magnetic field?",
    options: [
      { text: "An electric current is induced", isCorrect: true },
      { text: "The conductor becomes magnetic", isCorrect: false },
      { text: "The resistance becomes zero", isCorrect: false },
      { text: "The voltage drops to zero", isCorrect: false },
    ],
  },
  {
    text: "What is the unit of electric potential?",
    options: [
      { text: "Volt", isCorrect: true },
      { text: "Ampere", isCorrect: false },
      { text: "Ohm", isCorrect: false },
      { text: "Farad", isCorrect: false },
    ],
  },
  {
    text: "Which quantity measures the ability of a material to store electric charge?",
    options: [
      { text: "Capacitance", isCorrect: true },
      { text: "Resistance", isCorrect: false },
      { text: "Inductance", isCorrect: false },
      { text: "Conductance", isCorrect: false },
    ],
  },
  {
    text: "Which device stores electrical energy in an electric field?",
    options: [
      { text: "Capacitor", isCorrect: true },
      { text: "Battery", isCorrect: false },
      { text: "Transformer", isCorrect: false },
      { text: "Resistor", isCorrect: false },
    ],
  },
  {
    text: "What is the unit of magnetic field strength?",
    options: [
      { text: "Tesla", isCorrect: true },
      { text: "Gauss", isCorrect: false },
      { text: "Weber", isCorrect: false },
      { text: "Henry", isCorrect: false },
    ],
  },
  {
    text: "Which rule helps determine the direction of induced current?",
    options: [
      { text: "Lenz’s Law", isCorrect: true },
      { text: "Coulomb’s Law", isCorrect: false },
      { text: "Ohm’s Law", isCorrect: false },
      { text: "Newton’s Law", isCorrect: false },
    ],
  },
  {
    text: "Which component opposes changes in current in a circuit?",
    options: [
      { text: "Inductor", isCorrect: true },
      { text: "Capacitor", isCorrect: false },
      { text: "Resistor", isCorrect: false },
      { text: "Switch", isCorrect: false },
    ],
  },
  {
    text: "What is the function of a diode in a circuit?",
    options: [
      { text: "Allows current to flow in only one direction", isCorrect: true },
      { text: "Stores energy", isCorrect: false },
      { text: "Measures current", isCorrect: false },
      { text: "Increases voltage", isCorrect: false },
    ],
  },
  {
    text: "Which law relates the magnetic field around a current-carrying wire?",
    options: [
      { text: "Ampere’s Law", isCorrect: true },
      { text: "Faraday’s Law", isCorrect: false },
      { text: "Ohm’s Law", isCorrect: false },
      { text: "Lenz’s Law", isCorrect: false },
    ],
  },
  {
    text: "What happens when a magnetic field through a loop changes over time?",
    options: [
      { text: "An electromotive force (emf) is induced", isCorrect: true },
      { text: "Current becomes zero", isCorrect: false },
      { text: "Resistance increases", isCorrect: false },
      { text: "Voltage remains constant", isCorrect: false },
    ],
  },
  {
    text: "Which quantity is the rate of flow of electric charge?",
    options: [
      { text: "Electric current", isCorrect: true },
      { text: "Electric potential", isCorrect: false },
      { text: "Capacitance", isCorrect: false },
      { text: "Resistance", isCorrect: false },
    ],
  },
  {
    text: "Which scientist is credited with discovering electromagnetic induction?",
    options: [
      { text: "Michael Faraday", isCorrect: true },
      { text: "James Watt", isCorrect: false },
      { text: "Nikola Tesla", isCorrect: false },
      { text: "André-Marie Ampère", isCorrect: false },
    ],
  },
  {
    text: "What does a transformer do?",
    options: [
      { text: "Changes voltage in AC circuits", isCorrect: true },
      { text: "Generates electricity", isCorrect: false },
      { text: "Converts AC to DC", isCorrect: false },
      { text: "Stores electrical charge", isCorrect: false },
    ],
  },
  {
    text: "Which device converts electrical energy into mechanical energy?",
    options: [
      { text: "Electric motor", isCorrect: true },
      { text: "Generator", isCorrect: false },
      { text: "Capacitor", isCorrect: false },
      { text: "Diode", isCorrect: false },
    ],
  },
  {
    text: "What is the relationship between power, voltage, and current?",
    options: [
      { text: "P = VI", isCorrect: true },
      { text: "P = V/I", isCorrect: false },
      { text: "P = I/V", isCorrect: false },
      { text: "P = V²/I", isCorrect: false },
    ],
  },
  {
    text: "What is the unit of electric charge?",
    options: [
      { text: "Coulomb", isCorrect: true },
      { text: "Ampere", isCorrect: false },
      { text: "Volt", isCorrect: false },
      { text: "Ohm", isCorrect: false },
    ],
  },
  {
    text: "Which material is best known as a good conductor of electricity?",
    options: [
      { text: "Copper", isCorrect: true },
      { text: "Glass", isCorrect: false },
      { text: "Wood", isCorrect: false },
      { text: "Rubber", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a property of magnetic field lines?",
    options: [
      { text: "They never cross each other", isCorrect: true },
      { text: "They start and end at the same pole", isCorrect: false },
      { text: "They are straight lines", isCorrect: false },
      { text: "They point from south to north", isCorrect: false },
    ],
  },
  {
    text: "What is the function of a fuse in an electric circuit?",
    options: [
      { text: "Protects against overcurrent", isCorrect: true },
      { text: "Stores electric charge", isCorrect: false },
      { text: "Amplifies voltage", isCorrect: false },
      { text: "Increases resistance", isCorrect: false },
    ],
  },
  {
    text: "What type of current reverses direction periodically?",
    options: [
      { text: "Alternating current (AC)", isCorrect: true },
      { text: "Direct current (DC)", isCorrect: false },
      { text: "Static current", isCorrect: false },
      { text: "Magnetic current", isCorrect: false },
    ],
  },
  {
    text: "Which component stores energy in a magnetic field?",
    options: [
      { text: "Inductor", isCorrect: true },
      { text: "Capacitor", isCorrect: false },
      { text: "Resistor", isCorrect: false },
      { text: "Battery", isCorrect: false },
    ],
  },
  {
    text: "What is the role of a ground wire in an electrical circuit?",
    options: [
      { text: "Provides a safe path for excess current", isCorrect: true },
      { text: "Increases current flow", isCorrect: false },
      { text: "Measures resistance", isCorrect: false },
      { text: "Stores electrical energy", isCorrect: false },
    ],
  },
  {
    text: "Which part of an atom is responsible for electrical conduction?",
    options: [
      { text: "Electrons", isCorrect: true },
      { text: "Protons", isCorrect: false },
      { text: "Neutrons", isCorrect: false },
      { text: "Nucleus", isCorrect: false },
    ],
  },
  {
    text: "What is the relationship between electric field (E) and electric potential (V)?",
    options: [
      { text: "E = -dV/dx", isCorrect: true },
      { text: "E = V/d", isCorrect: false },
      { text: "E = V × d", isCorrect: false },
      { text: "E = V²/d", isCorrect: false },
    ],
  },
  {
    text: "What is the function of a resistor in an electric circuit?",
    options: [
      { text: "Limits current", isCorrect: true },
      { text: "Stores energy", isCorrect: false },
      { text: "Converts current to voltage", isCorrect: false },
      { text: "Amplifies voltage", isCorrect: false },
    ],
  },
  {
    text: "Which law states that the total current entering a junction equals the total current leaving?",
    options: [
      { text: "Kirchhoff’s Current Law", isCorrect: true },
      { text: "Kirchhoff’s Voltage Law", isCorrect: false },
      { text: "Ohm’s Law", isCorrect: false },
      { text: "Faraday’s Law", isCorrect: false },
    ],
  },
  {
    text: "What happens when like electric charges are brought near each other?",
    options: [
      { text: "They repel", isCorrect: true },
      { text: "They attract", isCorrect: false },
      { text: "They neutralize", isCorrect: false },
      { text: "They form a current", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is true for magnetic monopoles?",
    options: [
      { text: "They do not exist", isCorrect: true },
      { text: "They can be isolated", isCorrect: false },
      { text: "They exist in all magnets", isCorrect: false },
      { text: "They are positively charged", isCorrect: false },
    ],
  },
  {
    text: "What is the primary source of Earth's magnetic field?",
    options: [
      { text: "Motion of molten iron in the outer core", isCorrect: true },
      { text: "Atmospheric pressure", isCorrect: false },
      { text: "Gravitational pull", isCorrect: false },
      { text: "Static electricity in rocks", isCorrect: false },
    ],
  },
  {
    text: "In a parallel circuit, what remains the same across all components?",
    options: [
      { text: "Voltage", isCorrect: true },
      { text: "Current", isCorrect: false },
      { text: "Resistance", isCorrect: false },
      { text: "Charge", isCorrect: false },
    ],
  },
  {
    text: "Which equation gives the force on a charged particle in an electric field?",
    options: [
      { text: "F = qE", isCorrect: true },
      { text: "F = ma", isCorrect: false },
      { text: "F = BIL", isCorrect: false },
      { text: "F = qvB", isCorrect: false },
    ],
  },
  {
    text: "What is the magnetic force on a charged particle moving in a magnetic field?",
    options: [
      { text: "F = qvB sinθ", isCorrect: true },
      { text: "F = qE", isCorrect: false },
      { text: "F = qB", isCorrect: false },
      { text: "F = mv²/r", isCorrect: false },
    ],
  },
  {
    text: "Which of the following describes the direction of the magnetic field around a straight current-carrying wire?",
    options: [
      { text: "Circular around the wire", isCorrect: true },
      { text: "Parallel to the wire", isCorrect: false },
      { text: "Opposite to current", isCorrect: false },
      { text: "In a straight line outward", isCorrect: false },
    ],
  },
  {
    text: "What happens to the total resistance when more resistors are added in parallel?",
    options: [
      { text: "It decreases", isCorrect: true },
      { text: "It increases", isCorrect: false },
      { text: "It remains constant", isCorrect: false },
      { text: "It becomes zero", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of a lightning rod?",
    options: [
      { text: "To safely direct lightning to the ground", isCorrect: true },
      { text: "To block lightning", isCorrect: false },
      { text: "To store lightning energy", isCorrect: false },
      { text: "To create electric current", isCorrect: false },
    ],
  },
  {
    text: "Which type of material is strongly attracted to magnets?",
    options: [
      { text: "Ferromagnetic", isCorrect: true },
      { text: "Diamagnetic", isCorrect: false },
      { text: "Paramagnetic", isCorrect: false },
      { text: "Semiconducting", isCorrect: false },
    ],
  },
  {
    text: "What is the principle behind electric generators?",
    options: [
      { text: "Electromagnetic induction", isCorrect: true },
      { text: "Electrostatic repulsion", isCorrect: false },
      { text: "Electric resistance", isCorrect: false },
      { text: "Heat transfer", isCorrect: false },
    ],
  },
  {
    text: "What is the energy stored in a capacitor given by?",
    options: [
      { text: "½CV²", isCorrect: true },
      { text: "CV", isCorrect: false },
      { text: "QV", isCorrect: false },
      { text: "½QV", isCorrect: false },
    ],
  },
  {
    text: "Which device converts mechanical energy into electrical energy?",
    options: [
      { text: "Generator", isCorrect: true },
      { text: "Motor", isCorrect: false },
      { text: "Resistor", isCorrect: false },
      { text: "Transformer", isCorrect: false },
    ],
  },
  {
    text: "What is the function of a circuit breaker?",
    options: [
      { text: "Interrupts current during overloads", isCorrect: true },
      { text: "Stores electrical charge", isCorrect: false },
      { text: "Measures voltage", isCorrect: false },
      { text: "Converts AC to DC", isCorrect: false },
    ],
  },
  {
    text: "In an electric field, what happens to a positive test charge?",
    options: [
      { text: "It moves in the direction of the field", isCorrect: true },
      { text: "It remains stationary", isCorrect: false },
      { text: "It moves opposite to the field", isCorrect: false },
      { text: "It gets neutralized", isCorrect: false },
    ],
  },
];

module.exports = electricityAndMagnetismQuestions;
