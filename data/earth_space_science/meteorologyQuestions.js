const meteorologyQuestions = [
  {
    text: "What instrument is used to measure atmospheric pressure?",
    options: [
      { text: "Barometer", isCorrect: true },
      { text: "Anemometer", isCorrect: false },
      { text: "Hygrometer", isCorrect: false },
      { text: "Thermometer", isCorrect: false },
    ],
  },
  {
    text: "Which layer of the atmosphere contains most of Earth’s weather?",
    options: [
      { text: "Troposphere", isCorrect: true },
      { text: "Stratosphere", isCorrect: false },
      { text: "Mesosphere", isCorrect: false },
      { text: "Thermosphere", isCorrect: false },
    ],
  },
  {
    text: "What scale is used to classify the strength of hurricanes?",
    options: [
      { text: "Saffir-Simpson scale", isCorrect: true },
      { text: "Fujita scale", isCorrect: false },
      { text: "Richter scale", isCorrect: false },
      { text: "Beaufort scale", isCorrect: false },
    ],
  },
  {
    text: "What is the main cause of wind?",
    options: [
      { text: "Differences in air pressure", isCorrect: true },
      { text: "Earth’s rotation", isCorrect: false },
      { text: "Cloud formation", isCorrect: false },
      { text: "Precipitation", isCorrect: false },
    ],
  },
  {
    text: "What type of cloud is often associated with thunderstorms?",
    options: [
      { text: "Cumulonimbus", isCorrect: true },
      { text: "Stratus", isCorrect: false },
      { text: "Cirrus", isCorrect: false },
      { text: "Nimbostratus", isCorrect: false },
    ],
  },
  {
    text: "Which instrument measures wind speed?",
    options: [
      { text: "Anemometer", isCorrect: true },
      { text: "Barometer", isCorrect: false },
      { text: "Rain gauge", isCorrect: false },
      { text: "Hygrometer", isCorrect: false },
    ],
  },
  {
    text: "What is relative humidity?",
    options: [
      {
        text: "The percentage of moisture in the air compared to what it can hold",
        isCorrect: true,
      },
      { text: "The temperature at which water freezes", isCorrect: false },
      { text: "The speed at which clouds move", isCorrect: false },
      { text: "The amount of sunlight reaching the ground", isCorrect: false },
    ],
  },
  {
    text: "Which gas is most abundant in Earth's atmosphere?",
    options: [
      { text: "Nitrogen", isCorrect: true },
      { text: "Oxygen", isCorrect: false },
      { text: "Carbon dioxide", isCorrect: false },
      { text: "Argon", isCorrect: false },
    ],
  },
  {
    text: "What is a front in meteorology?",
    options: [
      { text: "A boundary between two air masses", isCorrect: true },
      { text: "A cloud formation", isCorrect: false },
      { text: "A type of precipitation", isCorrect: false },
      { text: "An area of low pressure", isCorrect: false },
    ],
  },
  {
    text: "What causes lightning?",
    options: [
      {
        text: "The discharge of static electricity in clouds",
        isCorrect: true,
      },
      { text: "The reflection of sunlight by ice crystals", isCorrect: false },
      { text: "Heat from the sun striking the ground", isCorrect: false },
      { text: "Changes in atmospheric pressure", isCorrect: false },
    ],
  },
  {
    text: "What is the term for a large rotating storm system over warm ocean waters?",
    options: [
      { text: "Hurricane", isCorrect: true },
      { text: "Tornado", isCorrect: false },
      { text: "Thunderstorm", isCorrect: false },
      { text: "Monsoon", isCorrect: false },
    ],
  },
  {
    text: "Which part of a hurricane typically has the calmest weather?",
    options: [
      { text: "Eye", isCorrect: true },
      { text: "Eye wall", isCorrect: false },
      { text: "Rainbands", isCorrect: false },
      { text: "Outer spiral", isCorrect: false },
    ],
  },
  {
    text: "What causes the Coriolis effect?",
    options: [
      { text: "Earth’s rotation", isCorrect: true },
      { text: "Gravitational pull from the Moon", isCorrect: false },
      { text: "Differences in humidity", isCorrect: false },
      { text: "Ocean currents", isCorrect: false },
    ],
  },
  {
    text: "Which scale is used to measure tornado intensity?",
    options: [
      { text: "Enhanced Fujita scale", isCorrect: true },
      { text: "Saffir-Simpson scale", isCorrect: false },
      { text: "Beaufort scale", isCorrect: false },
      { text: "Mercalli scale", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the line on a weather map that connects points of equal pressure?",
    options: [
      { text: "Isobar", isCorrect: true },
      { text: "Isotherm", isCorrect: false },
      { text: "Isohyet", isCorrect: false },
      { text: "Contour", isCorrect: false },
    ],
  },
  {
    text: "Which type of precipitation forms when raindrops freeze before hitting the ground?",
    options: [
      { text: "Sleet", isCorrect: true },
      { text: "Hail", isCorrect: false },
      { text: "Snow", isCorrect: false },
      { text: "Freezing rain", isCorrect: false },
    ],
  },
  {
    text: "What is the main energy source that drives Earth’s weather systems?",
    options: [
      { text: "The Sun", isCorrect: true },
      { text: "The Moon", isCorrect: false },
      { text: "Ocean currents", isCorrect: false },
      { text: "Earth’s core", isCorrect: false },
    ],
  },
  {
    text: "Which atmospheric phenomenon is caused by the refraction and reflection of light in water droplets?",
    options: [
      { text: "Rainbow", isCorrect: true },
      { text: "Halo", isCorrect: false },
      { text: "Aurora", isCorrect: false },
      { text: "Sun dog", isCorrect: false },
    ],
  },
  {
    text: "What is the term for high-altitude, thin, wispy clouds made mostly of ice crystals?",
    options: [
      { text: "Cirrus clouds", isCorrect: true },
      { text: "Stratus clouds", isCorrect: false },
      { text: "Cumulus clouds", isCorrect: false },
      { text: "Nimbostratus clouds", isCorrect: false },
    ],
  },
  {
    text: "What is the dew point?",
    options: [
      {
        text: "The temperature at which air becomes saturated with moisture",
        isCorrect: true,
      },
      { text: "The temperature when rain begins", isCorrect: false },
      { text: "The average nighttime low", isCorrect: false },
      { text: "The point of highest pressure in a storm", isCorrect: false },
    ],
  },
  {
    text: "What is a cold front?",
    options: [
      {
        text: "A boundary where a cold air mass replaces a warm air mass",
        isCorrect: true,
      },
      { text: "An area with below-average temperatures", isCorrect: false },
      { text: "A fast-moving stream of cold air", isCorrect: false },
      { text: "A zone of high humidity and low temperature", isCorrect: false },
    ],
  },
  {
    text: "Which cloud type typically forms in layers and often brings steady rain?",
    options: [
      { text: "Stratus", isCorrect: true },
      { text: "Cirrus", isCorrect: false },
      { text: "Cumulus", isCorrect: false },
      { text: "Cumulonimbus", isCorrect: false },
    ],
  },
  {
    text: "What causes the greenhouse effect?",
    options: [
      {
        text: "Trapping of heat by gases like CO₂ and methane",
        isCorrect: true,
      },
      { text: "Heat from volcanic eruptions", isCorrect: false },
      { text: "Increased solar activity", isCorrect: false },
      { text: "Excessive rainfall", isCorrect: false },
    ],
  },
  {
    text: "What is the main component of a cloud?",
    options: [
      { text: "Tiny water droplets or ice crystals", isCorrect: true },
      { text: "Carbon dioxide", isCorrect: false },
      { text: "Dust particles only", isCorrect: false },
      { text: "Water vapor only", isCorrect: false },
    ],
  },
  {
    text: "What is the term for rising warm air in the atmosphere?",
    options: [
      { text: "Convection", isCorrect: true },
      { text: "Radiation", isCorrect: false },
      { text: "Conduction", isCorrect: false },
      { text: "Advection", isCorrect: false },
    ],
  },
  {
    text: "Which weather event is characterized by rotating columns of air touching the ground?",
    options: [
      { text: "Tornado", isCorrect: true },
      { text: "Hurricane", isCorrect: false },
      { text: "Waterspout", isCorrect: false },
      { text: "Microburst", isCorrect: false },
    ],
  },
  {
    text: "Which device is used to measure rainfall?",
    options: [
      { text: "Rain gauge", isCorrect: true },
      { text: "Anemometer", isCorrect: false },
      { text: "Thermometer", isCorrect: false },
      { text: "Barometer", isCorrect: false },
    ],
  },
  {
    text: "What type of weather is typically associated with high-pressure systems?",
    options: [
      { text: "Clear and dry", isCorrect: true },
      { text: "Stormy", isCorrect: false },
      { text: "Rainy and overcast", isCorrect: false },
      { text: "Humid and foggy", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the boundary between the troposphere and the stratosphere?",
    options: [
      { text: "Tropopause", isCorrect: true },
      { text: "Stratopause", isCorrect: false },
      { text: "Mesopause", isCorrect: false },
      { text: "Thermopause", isCorrect: false },
    ],
  },
  {
    text: "What is the term for a seasonal shift in wind that brings heavy rains, especially in South Asia?",
    options: [
      { text: "Monsoon", isCorrect: true },
      { text: "Cyclone", isCorrect: false },
      { text: "Trade wind", isCorrect: false },
      { text: "Jet stream", isCorrect: false },
    ],
  },
  {
    text: "Which wind belt is located between 30° and 60° latitude in both hemispheres?",
    options: [
      { text: "Westerlies", isCorrect: true },
      { text: "Trade winds", isCorrect: false },
      { text: "Polar easterlies", isCorrect: false },
      { text: "Doldrums", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the narrow band of strong winds in the upper atmosphere?",
    options: [
      { text: "Jet stream", isCorrect: true },
      { text: "Trade wind", isCorrect: false },
      { text: "Sea breeze", isCorrect: false },
      { text: "Monsoon", isCorrect: false },
    ],
  },
  {
    text: "What does a hygrometer measure?",
    options: [
      { text: "Humidity", isCorrect: true },
      { text: "Air pressure", isCorrect: false },
      { text: "Wind speed", isCorrect: false },
      { text: "Solar radiation", isCorrect: false },
    ],
  },
  {
    text: "What is the term for precipitation that evaporates before reaching the ground?",
    options: [
      { text: "Virga", isCorrect: true },
      { text: "Sleet", isCorrect: false },
      { text: "Freezing rain", isCorrect: false },
      { text: "Graupel", isCorrect: false },
    ],
  },
  {
    text: "Which gas contributes most to the greenhouse effect?",
    options: [
      { text: "Water vapor", isCorrect: true },
      { text: "Carbon dioxide", isCorrect: false },
      { text: "Methane", isCorrect: false },
      { text: "Ozone", isCorrect: false },
    ],
  },
  {
    text: "Which hemisphere's hurricanes rotate clockwise?",
    options: [
      { text: "Southern Hemisphere", isCorrect: true },
      { text: "Northern Hemisphere", isCorrect: false },
      { text: "Equatorial region", isCorrect: false },
      { text: "Both hemispheres", isCorrect: false },
    ],
  },
  {
    text: "Which cloud type is highest in altitude?",
    options: [
      { text: "Cirrus", isCorrect: true },
      { text: "Cumulus", isCorrect: false },
      { text: "Stratus", isCorrect: false },
      { text: "Nimbostratus", isCorrect: false },
    ],
  },
  {
    text: "What is albedo?",
    options: [
      { text: "The reflectivity of a surface", isCorrect: true },
      { text: "The temperature at which dew forms", isCorrect: false },
      { text: "The speed of cloud formation", isCorrect: false },
      { text: "The rate of precipitation", isCorrect: false },
    ],
  },
  {
    text: "What is the Intertropical Convergence Zone (ITCZ)?",
    options: [
      {
        text: "A low-pressure area near the equator where trade winds meet",
        isCorrect: true,
      },
      { text: "A high-pressure zone near the poles", isCorrect: false },
      {
        text: "The boundary between the troposphere and stratosphere",
        isCorrect: false,
      },
      { text: "The region of descending cold air", isCorrect: false },
    ],
  },
  {
    text: "What does a red 'L' on a weather map usually indicate?",
    options: [
      { text: "A low-pressure system", isCorrect: true },
      { text: "A lightning storm", isCorrect: false },
      { text: "A cold front", isCorrect: false },
      { text: "A warm front", isCorrect: false },
    ],
  },
  {
    text: "Which weather instrument uses a spinning cup mechanism to detect wind speed?",
    options: [
      { text: "Anemometer", isCorrect: true },
      { text: "Barometer", isCorrect: false },
      { text: "Hygrometer", isCorrect: false },
      { text: "Thermograph", isCorrect: false },
    ],
  },
  {
    text: "Which type of front forms when a warm air mass is caught between two cold air masses?",
    options: [
      { text: "Occluded front", isCorrect: true },
      { text: "Warm front", isCorrect: false },
      { text: "Cold front", isCorrect: false },
      { text: "Stationary front", isCorrect: false },
    ],
  },
  {
    text: "What does the term 'barometric pressure' refer to?",
    options: [
      { text: "The pressure exerted by the atmosphere", isCorrect: true },
      { text: "The amount of UV radiation", isCorrect: false },
      { text: "The force of ocean tides", isCorrect: false },
      { text: "The strength of wind currents", isCorrect: false },
    ],
  },
  {
    text: "Which condition is necessary for fog to form?",
    options: [
      { text: "High humidity and cooling air", isCorrect: true },
      { text: "Low pressure and strong winds", isCorrect: false },
      { text: "Dry air and high temperature", isCorrect: false },
      { text: "Clear skies and high elevation", isCorrect: false },
    ],
  },
  {
    text: "What type of radiation causes sunburn and is absorbed by the ozone layer?",
    options: [
      { text: "Ultraviolet (UV)", isCorrect: true },
      { text: "Infrared", isCorrect: false },
      { text: "Microwave", isCorrect: false },
      { text: "Gamma", isCorrect: false },
    ],
  },
  {
    text: "What is the Beaufort scale used for?",
    options: [
      { text: "Measuring wind speed", isCorrect: true },
      { text: "Classifying hurricanes", isCorrect: false },
      { text: "Ranking tornado damage", isCorrect: false },
      { text: "Estimating rainfall", isCorrect: false },
    ],
  },
  {
    text: "Which atmospheric layer contains the ozone layer?",
    options: [
      { text: "Stratosphere", isCorrect: true },
      { text: "Troposphere", isCorrect: false },
      { text: "Mesosphere", isCorrect: false },
      { text: "Thermosphere", isCorrect: false },
    ],
  },
  {
    text: "What is the process of liquid water turning into water vapor called?",
    options: [
      { text: "Evaporation", isCorrect: true },
      { text: "Condensation", isCorrect: false },
      { text: "Precipitation", isCorrect: false },
      { text: "Sublimation", isCorrect: false },
    ],
  },
  {
    text: "Which phenomenon occurs when cold air is trapped beneath a layer of warm air?",
    options: [
      { text: "Temperature inversion", isCorrect: true },
      { text: "Convection current", isCorrect: false },
      { text: "Cold front", isCorrect: false },
      { text: "Low pressure", isCorrect: false },
    ],
  },
  {
    text: "Which factor has the greatest influence on local weather patterns?",
    options: [
      { text: "Air pressure systems", isCorrect: true },
      { text: "Magnetic fields", isCorrect: false },
      { text: "Tectonic activity", isCorrect: false },
      { text: "Solar eclipses", isCorrect: false },
    ],
  },
];

module.exports = meteorologyQuestions;
