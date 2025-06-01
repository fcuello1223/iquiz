const astronomyQuestions = [
  {
    text: "Which planet is known as the Red Planet?",
    options: [
      { text: "Mars", isCorrect: true },
      { text: "Venus", isCorrect: false },
      { text: "Jupiter", isCorrect: false },
      { text: "Saturn", isCorrect: false },
    ],
  },
  {
    text: "What is the name of our galaxy?",
    options: [
      { text: "Milky Way", isCorrect: true },
      { text: "Andromeda", isCorrect: false },
      { text: "Whirlpool", isCorrect: false },
      { text: "Triangulum", isCorrect: false },
    ],
  },
  {
    text: "Which celestial body defines a year on Earth?",
    options: [
      { text: "The Earth's orbit around the Sun", isCorrect: true },
      { text: "The Moon's orbit around the Earth", isCorrect: false },
      { text: "The Sun’s rotation", isCorrect: false },
      { text: "The Earth's rotation", isCorrect: false },
    ],
  },
  {
    text: "Which planet has the most moons?",
    options: [
      { text: "Saturn", isCorrect: true },
      { text: "Jupiter", isCorrect: false },
      { text: "Neptune", isCorrect: false },
      { text: "Uranus", isCorrect: false },
    ],
  },
  {
    text: "What type of star is the Sun?",
    options: [
      { text: "Main sequence star", isCorrect: true },
      { text: "White dwarf", isCorrect: false },
      { text: "Neutron star", isCorrect: false },
      { text: "Red giant", isCorrect: false },
    ],
  },
  {
    text: "Which planet has prominent rings?",
    options: [
      { text: "Saturn", isCorrect: true },
      { text: "Mars", isCorrect: false },
      { text: "Earth", isCorrect: false },
      { text: "Mercury", isCorrect: false },
    ],
  },
  {
    text: "What causes the phases of the Moon?",
    options: [
      {
        text: "The relative positions of the Moon, Earth, and Sun",
        isCorrect: true,
      },
      { text: "Cloud cover on the Moon", isCorrect: false },
      { text: "Moon’s rotation speed", isCorrect: false },
      { text: "Changes in the Moon’s orbit shape", isCorrect: false },
    ],
  },
  {
    text: "Which planet is the hottest in the solar system?",
    options: [
      { text: "Venus", isCorrect: true },
      { text: "Mercury", isCorrect: false },
      { text: "Jupiter", isCorrect: false },
      { text: "Mars", isCorrect: false },
    ],
  },
  {
    text: "What is a light-year a measure of?",
    options: [
      { text: "Distance", isCorrect: true },
      { text: "Time", isCorrect: false },
      { text: "Speed", isCorrect: false },
      { text: "Brightness", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the first man-made satellite to orbit Earth?",
    options: [
      { text: "Sputnik 1", isCorrect: true },
      { text: "Apollo 11", isCorrect: false },
      { text: "Voyager 1", isCorrect: false },
      { text: "Hubble", isCorrect: false },
    ],
  },
  {
    text: "Which planet is farthest from the Sun?",
    options: [
      { text: "Neptune", isCorrect: true },
      { text: "Uranus", isCorrect: false },
      { text: "Saturn", isCorrect: false },
      { text: "Pluto", isCorrect: false },
    ],
  },
  {
    text: "What is a supernova?",
    options: [
      { text: "An explosion of a dying star", isCorrect: true },
      { text: "A newly forming star", isCorrect: false },
      { text: "A comet hitting a planet", isCorrect: false },
      { text: "A solar flare", isCorrect: false },
    ],
  },
  {
    text: "Which of these is not a dwarf planet?",
    options: [
      { text: "Europa", isCorrect: true },
      { text: "Pluto", isCorrect: false },
      { text: "Eris", isCorrect: false },
      { text: "Ceres", isCorrect: false },
    ],
  },
  {
    text: "Which spacecraft was the first to leave the solar system?",
    options: [
      { text: "Voyager 1", isCorrect: true },
      { text: "Pioneer 10", isCorrect: false },
      { text: "Voyager 2", isCorrect: false },
      { text: "Apollo 13", isCorrect: false },
    ],
  },
  {
    text: "What keeps planets in orbit around the Sun?",
    options: [
      { text: "Gravity", isCorrect: true },
      { text: "Magnetism", isCorrect: false },
      { text: "Solar radiation", isCorrect: false },
      { text: "Dark matter", isCorrect: false },
    ],
  },
  {
    text: "Which planet rotates on its side relative to its orbit?",
    options: [
      { text: "Uranus", isCorrect: true },
      { text: "Venus", isCorrect: false },
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the black hole at the center of the Milky Way?",
    options: [
      { text: "Sagittarius A*", isCorrect: true },
      { text: "Cygnus X-1", isCorrect: false },
      { text: "Andromeda Core", isCorrect: false },
      { text: "Betelgeuse", isCorrect: false },
    ],
  },
  {
    text: "Which planet has the largest volcano in the solar system?",
    options: [
      { text: "Mars", isCorrect: true },
      { text: "Earth", isCorrect: false },
      { text: "Venus", isCorrect: false },
      { text: "Jupiter", isCorrect: false },
    ],
  },
  {
    text: "Which layer of the Sun emits visible light?",
    options: [
      { text: "Photosphere", isCorrect: true },
      { text: "Chromosphere", isCorrect: false },
      { text: "Corona", isCorrect: false },
      { text: "Core", isCorrect: false },
    ],
  },
  {
    text: "Which term refers to a rocky object orbiting the Sun, mostly found between Mars and Jupiter?",
    options: [
      { text: "Asteroid", isCorrect: true },
      { text: "Comet", isCorrect: false },
      { text: "Meteor", isCorrect: false },
      { text: "Nebula", isCorrect: false },
    ],
  },
  {
    text: "What do we call a group of stars that forms a recognizable pattern?",
    options: [
      { text: "Constellation", isCorrect: true },
      { text: "Galaxy", isCorrect: false },
      { text: "Nebula", isCorrect: false },
      { text: "Cluster", isCorrect: false },
    ],
  },
  {
    text: "Which phase comes after a full moon?",
    options: [
      { text: "Waning gibbous", isCorrect: true },
      { text: "Waxing crescent", isCorrect: false },
      { text: "New moon", isCorrect: false },
      { text: "First quarter", isCorrect: false },
    ],
  },
  {
    text: "Which planet has the shortest day?",
    options: [
      { text: "Jupiter", isCorrect: true },
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: false },
      { text: "Mercury", isCorrect: false },
    ],
  },
  {
    text: "What causes a solar eclipse?",
    options: [
      { text: "The Moon passes between Earth and the Sun", isCorrect: true },
      {
        text: "The Earth passes between the Sun and the Moon",
        isCorrect: false,
      },
      { text: "The Sun passes behind the Earth", isCorrect: false },
      { text: "The Moon moves into Earth’s shadow", isCorrect: false },
    ],
  },
  {
    text: "What is the most abundant element in the universe?",
    options: [
      { text: "Hydrogen", isCorrect: true },
      { text: "Helium", isCorrect: false },
      { text: "Oxygen", isCorrect: false },
      { text: "Carbon", isCorrect: false },
    ],
  },
  {
    text: "Which object is located at the center of our solar system?",
    options: [
      { text: "The Sun", isCorrect: true },
      { text: "Earth", isCorrect: false },
      { text: "The Moon", isCorrect: false },
      { text: "Jupiter", isCorrect: false },
    ],
  },
  {
    text: "What is the Hubble Space Telescope primarily used for?",
    options: [
      { text: "Observing distant galaxies and stars", isCorrect: true },
      { text: "Measuring earthquakes", isCorrect: false },
      { text: "Tracking asteroids near Earth", isCorrect: false },
      { text: "Monitoring weather patterns", isCorrect: false },
    ],
  },
  {
    text: "Which planet has a large storm called the Great Red Spot?",
    options: [
      { text: "Jupiter", isCorrect: true },
      { text: "Saturn", isCorrect: false },
      { text: "Neptune", isCorrect: false },
      { text: "Mars", isCorrect: false },
    ],
  },
  {
    text: "What are Saturn’s rings primarily made of?",
    options: [
      { text: "Ice and rock particles", isCorrect: true },
      { text: "Gas and dust", isCorrect: false },
      { text: "Lava and ash", isCorrect: false },
      { text: "Liquid hydrogen", isCorrect: false },
    ],
  },
  {
    text: "Which planet has a day longer than its year?",
    options: [
      { text: "Venus", isCorrect: true },
      { text: "Mercury", isCorrect: false },
      { text: "Mars", isCorrect: false },
      { text: "Neptune", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the boundary around a black hole beyond which nothing can escape?",
    options: [
      { text: "Event horizon", isCorrect: true },
      { text: "Singularity", isCorrect: false },
      { text: "Accretion disk", isCorrect: false },
      { text: "Photon shell", isCorrect: false },
    ],
  },
  {
    text: "Which planet has the most tilted axis, causing extreme seasonal changes?",
    options: [
      { text: "Uranus", isCorrect: true },
      { text: "Mars", isCorrect: false },
      { text: "Neptune", isCorrect: false },
      { text: "Saturn", isCorrect: false },
    ],
  },
  {
    text: "Which moon is the largest in the solar system?",
    options: [
      { text: "Ganymede", isCorrect: true },
      { text: "Titan", isCorrect: false },
      { text: "Callisto", isCorrect: false },
      { text: "Europa", isCorrect: false },
    ],
  },
  {
    text: "Which type of galaxy is the Milky Way classified as?",
    options: [
      { text: "Spiral galaxy", isCorrect: true },
      { text: "Elliptical galaxy", isCorrect: false },
      { text: "Irregular galaxy", isCorrect: false },
      { text: "Lenticular galaxy", isCorrect: false },
    ],
  },
  {
    text: "What is the term for a small rocky body that enters Earth's atmosphere and burns up?",
    options: [
      { text: "Meteor", isCorrect: true },
      { text: "Asteroid", isCorrect: false },
      { text: "Comet", isCorrect: false },
      { text: "Meteoroid", isCorrect: false },
    ],
  },
  {
    text: "Which planet is known for having the fastest winds in the solar system?",
    options: [
      { text: "Neptune", isCorrect: true },
      { text: "Jupiter", isCorrect: false },
      { text: "Saturn", isCorrect: false },
      { text: "Uranus", isCorrect: false },
    ],
  },
  {
    text: "Which space observatory detects X-rays from high-energy regions of the universe?",
    options: [
      { text: "Chandra X-ray Observatory", isCorrect: true },
      { text: "Hubble Space Telescope", isCorrect: false },
      { text: "Spitzer Space Telescope", isCorrect: false },
      { text: "James Webb Space Telescope", isCorrect: false },
    ],
  },
  {
    text: "What is dark matter believed to be responsible for?",
    options: [
      { text: "Holding galaxies together via gravity", isCorrect: true },
      { text: "Blocking starlight", isCorrect: false },
      { text: "Emitting cosmic radiation", isCorrect: false },
      { text: "Creating solar flares", isCorrect: false },
    ],
  },
  {
    text: "Which part of a comet points away from the Sun due to solar wind?",
    options: [
      { text: "Tail", isCorrect: true },
      { text: "Nucleus", isCorrect: false },
      { text: "Coma", isCorrect: false },
      { text: "Core", isCorrect: false },
    ],
  },
  {
    text: "What is the approximate age of the universe according to current scientific estimates?",
    options: [
      { text: "13.8 billion years", isCorrect: true },
      { text: "4.6 billion years", isCorrect: false },
      { text: "10 billion years", isCorrect: false },
      { text: "100 billion years", isCorrect: false },
    ],
  },
  {
    text: "Which space telescope was launched in 2021 to succeed Hubble?",
    options: [
      { text: "James Webb Space Telescope", isCorrect: true },
      { text: "Kepler", isCorrect: false },
      { text: "Spitzer", isCorrect: false },
      { text: "Chandra", isCorrect: false },
    ],
  },
  {
    text: "What is the main component of the Sun’s composition?",
    options: [
      { text: "Hydrogen", isCorrect: true },
      { text: "Helium", isCorrect: false },
      { text: "Oxygen", isCorrect: false },
      { text: "Carbon", isCorrect: false },
    ],
  },
  {
    text: "Which planet in the solar system has the highest mountain?",
    options: [
      { text: "Mars", isCorrect: true },
      { text: "Earth", isCorrect: false },
      { text: "Venus", isCorrect: false },
      { text: "Jupiter", isCorrect: false },
    ],
  },
  {
    text: "Which gas gives Uranus and Neptune their bluish color?",
    options: [
      { text: "Methane", isCorrect: true },
      { text: "Carbon dioxide", isCorrect: false },
      { text: "Oxygen", isCorrect: false },
      { text: "Hydrogen", isCorrect: false },
    ],
  },
  {
    text: "What is the Kuiper Belt?",
    options: [
      { text: "A region of icy bodies beyond Neptune", isCorrect: true },
      {
        text: "A region of rocky asteroids between Earth and Mars",
        isCorrect: false,
      },
      { text: "The outer atmosphere of the Sun", isCorrect: false },
      { text: "The debris trail of comets", isCorrect: false },
    ],
  },
  {
    text: "Which planet experiences a runaway greenhouse effect?",
    options: [
      { text: "Venus", isCorrect: true },
      { text: "Mars", isCorrect: false },
      { text: "Jupiter", isCorrect: false },
      { text: "Mercury", isCorrect: false },
    ],
  },
  {
    text: "Which celestial objects are primarily made of ice and dust and develop tails when near the Sun?",
    options: [
      { text: "Comets", isCorrect: true },
      { text: "Asteroids", isCorrect: false },
      { text: "Meteors", isCorrect: false },
      { text: "Dwarf planets", isCorrect: false },
    ],
  },
  {
    text: "What does redshift in the light from galaxies indicate?",
    options: [
      { text: "They are moving away from us", isCorrect: true },
      { text: "They are getting closer", isCorrect: false },
      { text: "They are stationary", isCorrect: false },
      { text: "They are rotating rapidly", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the process by which stars produce energy?",
    options: [
      { text: "Nuclear fusion", isCorrect: true },
      { text: "Combustion", isCorrect: false },
      { text: "Radioactive decay", isCorrect: false },
      { text: "Photosynthesis", isCorrect: false },
    ],
  },
  {
    text: "Which galaxy is expected to collide with the Milky Way in the distant future?",
    options: [
      { text: "Andromeda", isCorrect: true },
      { text: "Triangulum", isCorrect: false },
      { text: "Whirlpool", isCorrect: false },
      { text: "Large Magellanic Cloud", isCorrect: false },
    ],
  },
];

module.exports = astronomyQuestions;
