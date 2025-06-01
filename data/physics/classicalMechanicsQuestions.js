const classicalMechanicsQuestions = [
  {
    text: "What is the unit of force in the SI system?",
    options: [
      { text: "Newton", isCorrect: true },
      { text: "Joule", isCorrect: false },
      { text: "Pascal", isCorrect: false },
      { text: "Watt", isCorrect: false },
    ],
  },
  {
    text: "Which of Newton's laws explains the relationship between force, mass, and acceleration?",
    options: [
      { text: "Second law", isCorrect: true },
      { text: "First law", isCorrect: false },
      { text: "Third law", isCorrect: false },
      { text: "Law of gravitation", isCorrect: false },
    ],
  },
  {
    text: "What quantity is conserved in an elastic collision?",
    options: [
      { text: "Kinetic energy", isCorrect: true },
      { text: "Potential energy", isCorrect: false },
      { text: "Friction", isCorrect: false },
      { text: "Work", isCorrect: false },
    ],
  },
  {
    text: "What is the acceleration due to gravity on Earth's surface?",
    options: [
      { text: "9.8 m/s²", isCorrect: true },
      { text: "6.67 m/s²", isCorrect: false },
      { text: "1.6 m/s²", isCorrect: false },
      { text: "3.2 m/s²", isCorrect: false },
    ],
  },
  {
    text: "Which of the following quantities is a vector?",
    options: [
      { text: "Velocity", isCorrect: true },
      { text: "Speed", isCorrect: false },
      { text: "Mass", isCorrect: false },
      { text: "Distance", isCorrect: false },
    ],
  },
  {
    text: "What is the momentum of a 2 kg object moving at 3 m/s?",
    options: [
      { text: "6 kg·m/s", isCorrect: true },
      { text: "5 kg·m/s", isCorrect: false },
      { text: "3 kg·m/s", isCorrect: false },
      { text: "1.5 kg·m/s", isCorrect: false },
    ],
  },
  {
    text: "What force keeps a planet in orbit around the Sun?",
    options: [
      { text: "Gravitational force", isCorrect: true },
      { text: "Electromagnetic force", isCorrect: false },
      { text: "Nuclear force", isCorrect: false },
      { text: "Frictional force", isCorrect: false },
    ],
  },
  {
    text: "In projectile motion, what is the shape of the path followed by the projectile?",
    options: [
      { text: "Parabola", isCorrect: true },
      { text: "Circle", isCorrect: false },
      { text: "Ellipse", isCorrect: false },
      { text: "Straight line", isCorrect: false },
    ],
  },
  {
    text: "Which law states that for every action, there is an equal and opposite reaction?",
    options: [
      { text: "Newton's Third Law", isCorrect: true },
      { text: "Newton's First Law", isCorrect: false },
      { text: "Newton's Second Law", isCorrect: false },
      { text: "Law of inertia", isCorrect: false },
    ],
  },
  {
    text: "What is the work done when a force of 10 N moves an object 5 meters in the direction of the force?",
    options: [
      { text: "50 joules", isCorrect: true },
      { text: "15 joules", isCorrect: false },
      { text: "5 joules", isCorrect: false },
      { text: "0 joules", isCorrect: false },
    ],
  },
  {
    text: "What is inertia?",
    options: [
      {
        text: "The resistance of an object to change its motion",
        isCorrect: true,
      },
      { text: "The tendency of an object to fall", isCorrect: false },
      { text: "The force due to friction", isCorrect: false },
      { text: "The rate of change of velocity", isCorrect: false },
    ],
  },
  {
    text: "Which physical quantity is defined as the rate of change of displacement?",
    options: [
      { text: "Velocity", isCorrect: true },
      { text: "Acceleration", isCorrect: false },
      { text: "Speed", isCorrect: false },
      { text: "Momentum", isCorrect: false },
    ],
  },
  {
    text: "What is the unit of power in the SI system?",
    options: [
      { text: "Watt", isCorrect: true },
      { text: "Joule", isCorrect: false },
      { text: "Newton", isCorrect: false },
      { text: "Pascal", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a scalar quantity?",
    options: [
      { text: "Mass", isCorrect: true },
      { text: "Displacement", isCorrect: false },
      { text: "Velocity", isCorrect: false },
      { text: "Force", isCorrect: false },
    ],
  },
  {
    text: "What does the area under a velocity-time graph represent?",
    options: [
      { text: "Displacement", isCorrect: true },
      { text: "Speed", isCorrect: false },
      { text: "Acceleration", isCorrect: false },
      { text: "Momentum", isCorrect: false },
    ],
  },
  {
    text: "Which law states that the net force on an object is equal to the product of its mass and acceleration?",
    options: [
      { text: "Newton’s Second Law", isCorrect: true },
      { text: "Newton’s First Law", isCorrect: false },
      { text: "Newton’s Third Law", isCorrect: false },
      { text: "Law of Conservation of Energy", isCorrect: false },
    ],
  },
  {
    text: "In circular motion, which force acts toward the center of the circle?",
    options: [
      { text: "Centripetal force", isCorrect: true },
      { text: "Centrifugal force", isCorrect: false },
      { text: "Gravitational force", isCorrect: false },
      { text: "Frictional force", isCorrect: false },
    ],
  },
  {
    text: "What is kinetic energy dependent on?",
    options: [
      { text: "Mass and velocity", isCorrect: true },
      { text: "Height and mass", isCorrect: false },
      { text: "Mass and time", isCorrect: false },
      { text: "Acceleration and mass", isCorrect: false },
    ],
  },
  {
    text: "Which quantity remains constant in an isolated system with no external forces?",
    options: [
      { text: "Momentum", isCorrect: true },
      { text: "Velocity", isCorrect: false },
      { text: "Kinetic energy", isCorrect: false },
      { text: "Displacement", isCorrect: false },
    ],
  },
  {
    text: "What type of friction occurs when two objects are sliding past one another?",
    options: [
      { text: "Kinetic friction", isCorrect: true },
      { text: "Static friction", isCorrect: false },
      { text: "Rolling friction", isCorrect: false },
      { text: "Fluid friction", isCorrect: false },
    ],
  },
  {
    text: "What is the formula for calculating work done by a constant force?",
    options: [
      { text: "Work = Force × Distance × cos(θ)", isCorrect: true },
      { text: "Work = Mass × Acceleration", isCorrect: false },
      { text: "Work = Power × Time", isCorrect: false },
      { text: "Work = Pressure × Volume", isCorrect: false },
    ],
  },
  {
    text: "Which of the following describes equilibrium?",
    options: [
      { text: "Net force acting on the object is zero", isCorrect: true },
      { text: "Object is accelerating uniformly", isCorrect: false },
      { text: "Object is rotating continuously", isCorrect: false },
      { text: "Kinetic energy is constant", isCorrect: false },
    ],
  },
  {
    text: "What type of energy is stored in a compressed spring?",
    options: [
      { text: "Elastic potential energy", isCorrect: true },
      { text: "Gravitational potential energy", isCorrect: false },
      { text: "Kinetic energy", isCorrect: false },
      { text: "Thermal energy", isCorrect: false },
    ],
  },
  {
    text: "The moment of inertia depends on which of the following?",
    options: [
      { text: "Mass and distribution of mass", isCorrect: true },
      { text: "Only mass", isCorrect: false },
      { text: "Only velocity", isCorrect: false },
      { text: "Friction coefficient", isCorrect: false },
    ],
  },
  {
    text: "What is the net force on an object in uniform circular motion?",
    options: [
      { text: "Directed toward the center", isCorrect: true },
      { text: "Directed outward", isCorrect: false },
      { text: "Zero", isCorrect: false },
      { text: "In the direction of motion", isCorrect: false },
    ],
  },
  {
    text: "Which condition must be met for an object to be in static equilibrium?",
    options: [
      { text: "Net force and net torque must be zero", isCorrect: true },
      { text: "Acceleration must be maximum", isCorrect: false },
      { text: "Velocity must be increasing", isCorrect: false },
      { text: "Only the net force must be zero", isCorrect: false },
    ],
  },
  {
    text: "What is the unit of pressure in the SI system?",
    options: [
      { text: "Pascal", isCorrect: true },
      { text: "Watt", isCorrect: false },
      { text: "Newton", isCorrect: false },
      { text: "Joule", isCorrect: false },
    ],
  },
  {
    text: "In terms of energy, what does the law of conservation state?",
    options: [
      { text: "Energy cannot be created or destroyed", isCorrect: true },
      { text: "Energy can be lost in closed systems", isCorrect: false },
      {
        text: "Energy is constant only in frictionless systems",
        isCorrect: false,
      },
      { text: "Energy changes only when mass changes", isCorrect: false },
    ],
  },
  {
    text: "Which of these best describes torque?",
    options: [
      { text: "A measure of the turning effect of a force", isCorrect: true },
      { text: "A measure of linear momentum", isCorrect: false },
      { text: "A measure of gravitational force", isCorrect: false },
      { text: "A measure of angular velocity", isCorrect: false },
    ],
  },
  {
    text: "What does Hooke's Law state?",
    options: [
      {
        text: "Force is proportional to extension in a spring",
        isCorrect: true,
      },
      { text: "Force equals mass times acceleration", isCorrect: false },
      { text: "Energy is conserved in all systems", isCorrect: false },
      { text: "Pressure equals force divided by area", isCorrect: false },
    ],
  },
  {
    text: "Which quantity is defined as force per unit area?",
    options: [
      { text: "Pressure", isCorrect: true },
      { text: "Density", isCorrect: false },
      { text: "Stress", isCorrect: false },
      { text: "Strain", isCorrect: false },
    ],
  },
  {
    text: "Which of the following represents the SI unit of energy?",
    options: [
      { text: "Joule", isCorrect: true },
      { text: "Watt", isCorrect: false },
      { text: "Pascal", isCorrect: false },
      { text: "Newton", isCorrect: false },
    ],
  },
  {
    text: "What does a negative acceleration indicate?",
    options: [
      { text: "Object is slowing down", isCorrect: true },
      { text: "Object is speeding up", isCorrect: false },
      { text: "Object has zero velocity", isCorrect: false },
      { text: "Object is at rest", isCorrect: false },
    ],
  },
  {
    text: "What is the name for the force that opposes motion between two surfaces?",
    options: [
      { text: "Friction", isCorrect: true },
      { text: "Tension", isCorrect: false },
      { text: "Gravity", isCorrect: false },
      { text: "Centripetal force", isCorrect: false },
    ],
  },
  {
    text: "If no external forces act on a system, what is conserved?",
    options: [
      { text: "Momentum", isCorrect: true },
      { text: "Speed", isCorrect: false },
      { text: "Force", isCorrect: false },
      { text: "Displacement", isCorrect: false },
    ],
  },
  {
    text: "What is the gravitational potential energy of a 5 kg object raised 2 meters above ground? (g = 9.8 m/s²)",
    options: [
      { text: "98 J", isCorrect: true },
      { text: "9.8 J", isCorrect: false },
      { text: "49 J", isCorrect: false },
      { text: "10 J", isCorrect: false },
    ],
  },
  {
    text: "Which term refers to the rotational equivalent of mass?",
    options: [
      { text: "Moment of inertia", isCorrect: true },
      { text: "Angular velocity", isCorrect: false },
      { text: "Torque", isCorrect: false },
      { text: "Angular momentum", isCorrect: false },
    ],
  },
  {
    text: "Which type of collision conserves both momentum and kinetic energy?",
    options: [
      { text: "Elastic", isCorrect: true },
      { text: "Inelastic", isCorrect: false },
      { text: "Plastic", isCorrect: false },
      { text: "Rotational", isCorrect: false },
    ],
  },
  {
    text: "What is the term for the path followed by a projectile under the influence of gravity?",
    options: [
      { text: "Trajectory", isCorrect: true },
      { text: "Vector", isCorrect: false },
      { text: "Displacement", isCorrect: false },
      { text: "Incline", isCorrect: false },
    ],
  },
  {
    text: "Which of Newton's laws explains why passengers lurch forward when a car stops suddenly?",
    options: [
      { text: "First law (inertia)", isCorrect: true },
      { text: "Second law", isCorrect: false },
      { text: "Third law", isCorrect: false },
      { text: "Law of universal gravitation", isCorrect: false },
    ],
  },
  {
    text: "What does the slope of a position-time graph represent?",
    options: [
      { text: "Velocity", isCorrect: true },
      { text: "Acceleration", isCorrect: false },
      { text: "Displacement", isCorrect: false },
      { text: "Force", isCorrect: false },
    ],
  },
  {
    text: "Which quantity is measured in kg·m²/s²?",
    options: [
      { text: "Joule", isCorrect: true },
      { text: "Watt", isCorrect: false },
      { text: "Newton", isCorrect: false },
      { text: "Pascal", isCorrect: false },
    ],
  },
  {
    text: "Which equation gives kinetic energy?",
    options: [
      { text: "½mv²", isCorrect: true },
      { text: "mv", isCorrect: false },
      { text: "mgh", isCorrect: false },
      { text: "F × d", isCorrect: false },
    ],
  },
  {
    text: "Which force acts perpendicular to the surface in contact?",
    options: [
      { text: "Normal force", isCorrect: true },
      { text: "Tension", isCorrect: false },
      { text: "Friction", isCorrect: false },
      { text: "Centripetal", isCorrect: false },
    ],
  },
  {
    text: "Which physical law is described by F = ma?",
    options: [
      { text: "Newton’s Second Law", isCorrect: true },
      { text: "Newton’s First Law", isCorrect: false },
      { text: "Newton’s Third Law", isCorrect: false },
      { text: "Law of Conservation of Energy", isCorrect: false },
    ],
  },
  {
    text: "What quantity has units of kg·m/s?",
    options: [
      { text: "Momentum", isCorrect: true },
      { text: "Energy", isCorrect: false },
      { text: "Power", isCorrect: false },
      { text: "Work", isCorrect: false },
    ],
  },
  {
    text: "What is the condition for mechanical equilibrium?",
    options: [
      { text: "Net force and net torque are zero", isCorrect: true },
      { text: "Velocity is zero", isCorrect: false },
      { text: "Friction is present", isCorrect: false },
      { text: "Mass is constant", isCorrect: false },
    ],
  },
  {
    text: "Which type of motion has constant acceleration?",
    options: [
      { text: "Uniformly accelerated motion", isCorrect: true },
      { text: "Circular motion", isCorrect: false },
      { text: "Simple harmonic motion", isCorrect: false },
      { text: "Random motion", isCorrect: false },
    ],
  },
  {
    text: "A ball is thrown vertically upward. What is its velocity at the highest point?",
    options: [
      { text: "0 m/s", isCorrect: true },
      { text: "9.8 m/s", isCorrect: false },
      { text: "Equal to initial velocity", isCorrect: false },
      { text: "Infinity", isCorrect: false },
    ],
  },
  {
    text: "Which of these is a non-contact force?",
    options: [
      { text: "Gravitational force", isCorrect: true },
      { text: "Friction", isCorrect: false },
      { text: "Tension", isCorrect: false },
      { text: "Normal force", isCorrect: false },
    ],
  },
];

module.exports = classicalMechanicsQuestions;
