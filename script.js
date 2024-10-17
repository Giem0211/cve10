const chapters = {
    1: {
        title: "Introduction to Hydrology",
        questions: [
            {
                question: "1. What is hydrology?",
                choices: [
                    "A) The study of weather systems",
                    "B) The study of water's occurrence, circulation, and distribution on Earth",
                    "C) The analysis of marine ecosystems",
                    "D) The study of geological formations"
                ],
                correct: 1
            },
            {
                question: "2. Which of the following is not a domain of hydrology?",
                choices: [
                    "A) Hydrometeorology",
                    "B) Surface hydrology",
                    "C) Hydrogeology",
                    "D) Oceanography"
                ],
                correct: 3
            },
            {
                question: "3. What are the primary factors that affect the hydrologic cycle?",
                choices: [
                    "A) Tides, weather inputs, and air pressure",
                    "B) Weather inputs, soil types, and topography",
                    "C) Atmospheric pressure, soil type, and magnetism",
                    "D) Ocean currents, precipitation, and air density"
                ],
                correct: 1
            },
            {
                question: "4. Which of the following is not part of the hydrologic cycle?",
                choices: [
                    "A) Precipitation",
                    "B) Evaporation",
                    "C) Infiltration",
                    "D) Sublimation"
                ],
                correct: 3
            },
            {
                question: "5. What is the primary source of water for the hydrologic cycle?",
                choices: [
                    "A) Groundwater",
                    "B) Rivers",
                    "C) Oceans",
                    "D) Lakes"
                ],
                correct: 2
            },
            {
                question: "6. Precipitation is best defined as:",
                choices: [
                    "A) Water vapor transforming into solid form",
                    "B) Any product of the condensation of atmospheric water vapor that falls under gravity",
                    "C) Water vapor rising to the atmosphere",
                    "D) Water flowing over land surfaces"
                ],
                correct: 1
            },
            {
                question: "7. Which of the following is not a form of precipitation?",
                choices: [
                    "A) Drizzle",
                    "B) Sleet",
                    "C) Dew",
                    "D) Hail"
                ],
                correct: 2
            },
            {
                question: "8. What is evaporation?",
                choices: [
                    "A) The conversion of water vapor into clouds",
                    "B) The process by which water is absorbed into the ground",
                    "C) The process of water turning into vapor due to heat",
                    "D) Water turning into ice at low temperatures"
                ],
                correct: 2
            },
            {
                question: "9. Transpiration refers to:",
                choices: [
                    "A) Water being absorbed by plant roots",
                    "B) Water being exhaled as vapor by plants through stomata",
                    "C) Water flowing from plants into rivers",
                    "D) Water freezing inside plant tissues"
                ],
                correct: 1
            },
            {
                question: "10. What does evapotranspiration refer to?",
                choices: [
                    "A) The sum of evaporation and condensation processes",
                    "B) The combination of evaporation from the land and transpiration from plants",
                    "C) The transport of water into clouds",
                    "D) The process by which water turns directly from solid to gas"
                ],
                correct: 1
            },
            {
                question: "11. What is infiltration in the hydrologic cycle?",
                choices: [
                    "A) Water rising from the ocean into the atmosphere",
                    "B) The process by which water flows over the land surface",
                    "C) Water soaking into subsurface soils and rock formations",
                    "D) Water evaporating from plants"
                ],
                correct: 2
            },
            {
                question: "12. Groundwater is described as:",
                choices: [
                    "A) Water in oceans and lakes",
                    "B) Water flowing in porous media below the earth's surface",
                    "C) Water that evaporates from rivers",
                    "D) Water present in the atmosphere"
                ],
                correct: 1
            },
            {
                question: "13. What is direct runoff?",
                choices: [
                    "A) Water that seeps into the ground",
                    "B) The portion of precipitation that flows over land into streams and rivers",
                    "C) Water evaporating from oceans",
                    "D) Groundwater being pumped for municipal use"
                ],
                correct: 1
            },
            {
                question: "14. Humidity is a measure of:",
                choices: [
                    "A) The amount of solid water particles in the air",
                    "B) The amount of water vapor in the atmosphere",
                    "C) The water pressure at sea level",
                    "D) The weight of the air above"
                ],
                correct: 1
            },
            {
                question: "15. What is specific humidity?",
                choices: [
                    "A) The amount of water vapor compared to total air pressure",
                    "B) The mass of water vapor in a unit mass of moist air",
                    "C) The temperature at which water vapor condenses",
                    "D) The ratio of water vapor to dry air"
                ],
                correct: 1
            },
            {
                question: "16. Relative humidity is:",
                choices: [
                    "A) The ratio of the actual water vapor content to the amount needed for saturation at a given temperature",
                    "B) The absolute amount of water vapor in the atmosphere",
                    "C) The mass of water vapor in a cubic meter of air",
                    "D) The temperature at which condensation occurs"
                ],
                correct: 0
            },
            {
                question: "17. Dew point temperature refers to:",
                choices: [
                    "A) The point at which water evaporates",
                    "B) The temperature at which air becomes saturated with moisture",
                    "C) The highest temperature air can hold moisture",
                    "D) The lowest point at which water flows in rivers"
                ],
                correct: 1
            },
            {
                question: "18. What type of cloud produces thunderstorms?",
                choices: [
                    "A) Stratus clouds",
                    "B) Cirrus clouds",
                    "C) Cumulonimbus clouds",
                    "D) Altostratus clouds"
                ],
                correct: 2
            },
            {
                question: "19. How do hurricanes and typhoons differ?",
                choices: [
                    "A) They occur at different latitudes",
                    "B) Hurricanes develop north of the equator and typhoons develop south",
                    "C) They are the same phenomena but named differently based on location",
                    "D) Hurricanes spin clockwise, typhoons spin counterclockwise"
                ],
                correct: 2
            },
            {
                question: "20. What mechanism initiates precipitation formation?",
                choices: [
                    "A) Condensation without phase change",
                    "B) The cooling and lifting of moist air, leading to condensation",
                    "C) Evaporation of ocean water",
                    "D) Ice melting into the atmosphere"
                ],
                correct: 1
            }
        ]
    },
    2: {
        title: "Precipitation",
        questions: [
            {
                question: "1. What is the definition of precipitation?",
                choices: [
                    "A) The process of water turning into vapor",
                    "B) The condensation of atmospheric water vapor that falls under gravity",
                    "C) The melting of snow into water",
                    "D) The freezing of rain droplets into ice"
                ],
                correct: 1
            },
            {
                question: "2. What is rain?",
                choices: [
                    "A) Frozen droplets of water",
                    "B) Solid ice falling from clouds",
                    "C) Liquid water drops larger than 0.5mm in diameter",
                    "D) Mist consisting of tiny liquid water droplets"
                ],
                correct: 2
            },
            {
                question: "3. How is rainfall intensity measured?",
                choices: [
                    "A) Volume of rain per day",
                    "B) Depth of rain per unit time, typically in mm/h",
                    "C) Total water vapor in the atmosphere",
                    "D) Weight of rain falling on a surface"
                ],
                correct: 1
            },
            {
                question: "4. Which of the following factors controls the distribution of rainfall over Earth's surface?",
                choices: [
                    "A) Atmospheric pressure and moon phases",
                    "B) Air temperature and ocean currents",
                    "C) Soil types and magnetic fields",
                    "D) River flow and mountain height"
                ],
                correct: 1
            },
            {
                question: "5. What is drizzle?",
                choices: [
                    "A) Large liquid water drops",
                    "B) Tiny liquid water droplets, typically between 0.1mm and 0.5mm",
                    "C) Frozen water droplets",
                    "D) Ice crystals agglomerated into snowflakes"
                ],
                correct: 1
            },
            {
                question: "6. What is glaze?",
                choices: [
                    "A) Rain that evaporates before reaching the ground",
                    "B) A light form of rain",
                    "C) A coating of ice formed by the freezing of supercooled water",
                    "D) Frozen snowflakes falling to the ground"
                ],
                correct: 2
            },
            {
                question: "7. Which of the following forms of precipitation is made up of ice crystals?",
                choices: [
                    "A) Hail",
                    "B) Snow",
                    "C) Sleet",
                    "D) Ice pellets"
                ],
                correct: 1
            },
            {
                question: "8. What are hailstones?",
                choices: [
                    "A) Frozen rain droplets smaller than 5mm",
                    "B) Balls or irregular lumps of ice",
                    "C) Transparent grains of ice",
                    "D) Large raindrops"
                ],
                correct: 1
            },
            {
                question: "9. What is acid rain?",
                choices: [
                    "A) Rain mixed with chemicals like sulfuric and nitric acid from the atmosphere",
                    "B) Rain containing only carbonic acid",
                    "C) Rain with a pH higher than 7",
                    "D) Precipitation that evaporates before reaching the ground"
                ],
                correct: 0
            },
            {
                question: "10. How does acid rain affect soils?",
                choices: [
                    "A) It has no impact on soil composition",
                    "B) It increases soil fertility",
                    "C) It intensifies the negative impact by increasing rainfall intensity",
                    "D) It causes soil to become more alkaline"
                ],
                correct: 2
            },
            {
                question: "11. Which of the following is an effect of acid rain on buildings?",
                choices: [
                    "A) It strengthens the stone material",
                    "B) It neutralizes chemicals on the surface",
                    "C) It corrodes metal and damages the paint on structures",
                    "D) It has no visible effects on materials"
                ],
                correct: 2
            },
            {
                question: "12. What is the typical pH of acid rain in industrial areas?",
                choices: [
                    "A) 7.0",
                    "B) 5.6",
                    "C) Below 2.4",
                    "D) 3.5"
                ],
                correct: 2
            },
            {
                question: "13. Cyclonic precipitation occurs due to which process?",
                choices: [
                    "A) Warm air rising due to lower pressure",
                    "B) Cold air rising above warm air",
                    "C) Air being forced upward by mountains",
                    "D) Air evaporating into the atmosphere"
                ],
                correct: 0
            },
            {
                question: "14. What is orographic precipitation?",
                choices: [
                    "A) Rainfall that occurs from evaporation",
                    "B) Rain caused by air rising due to heating",
                    "C) Precipitation formed by air being mechanically lifted over mountains",
                    "D) Rain caused by collision of warm and cold fronts"
                ],
                correct: 2
            },
            {
                question: "15. What is convective precipitation?",
                choices: [
                    "A) Rainfall that occurs when air is cooled below the saturation point",
                    "B) Precipitation that happens when warm, light air rises in colder denser surroundings",
                    "C) Rain caused by air rising over a mountain",
                    "D) Precipitation formed by condensation alone"
                ],
                correct: 1
            }
        ]
    },
    3: {
        title: "Rainfall Characteristics",
        questions: [
            {
                question: "1. What is rainfall?",
                choices: [
                    "A) The accumulation of snowflakes on Earth's surface",
                    "B) The amount of precipitation in the form of rain that descends onto Earth's surface",
                    "C) The transformation of vapor into water",
                    "D) The freezing of water droplets in the atmosphere"
                ],
                correct: 1
            },
            {
                question: "2. What is a hyetograph?",
                choices: [
                    "A) A tool for measuring temperature",
                    "B) A graphical representation of rainfall intensity over time",
                    "C) A map showing rainfall distribution",
                    "D) A gauge for recording wind speeds"
                ],
                correct: 1
            },
            {
                question: "3. Which of the following is not a factor that influences the magnitude and form of precipitation?",
                choices: [
                    "A) Wind",
                    "B) Humidity",
                    "C) Soil type",
                    "D) Temperature"
                ],
                correct: 2
            },
            {
                question: "4. Which weather system does not influence precipitation?",
                choices: [
                    "A) Hurricane",
                    "B) Typhoon",
                    "C) Tornado",
                    "D) Intertropical Convergence Zone (ITCZ)"
                ],
                correct: 2
            },
            {
                question: "5. When does the Northeast (NE) monsoon typically occur?",
                choices: [
                    "A) November to February",
                    "B) July to September",
                    "C) May to August",
                    "D) January to March"
                ],
                correct: 0
            },
            {
                question: "6. Which of the following is not a primary variable of rainfall?",
                choices: [
                    "A) Space",
                    "B) Frequency",
                    "C) Wind speed",
                    "D) Intensity"
                ],
                correct: 2
            },
            {
                question: "7. Which classification of rain gauge is non-recording?",
                choices: [
                    "A) Tipping bucket",
                    "B) Standard cylindrical gauge",
                    "C) Radar-based gauge",
                    "D) Automated gauge"
                ],
                correct: 1
            },
            {
                question: "8. Which classification of rain gauge is recording?",
                choices: [
                    "A) Standard cylindrical gauge",
                    "B) Tipping bucket",
                    "C) Mercury barometer",
                    "D) Wind vane gauge"
                ],
                correct: 1
            },
            {
                question: "9. What does a meteorological radar measure?",
                choices: [
                    "A) Temperature variations over time",
                    "B) Wind speed and direction",
                    "C) The aerial extent, location, and movement of rainstorms",
                    "D) Soil moisture content"
                ],
                correct: 2
            },
            {
                question: "10. Which of the following describes very light rainfall intensity?",
                choices: [
                    "A) Traces of rain without completely wetting surfaces",
                    "B) 2.5 mm/hr, with noticeable splashing on pavement",
                    "C) 7.5 mm/hr, creating full downspouts",
                    "D) Over 10 mm/hr, forming puddles quickly"
                ],
                correct: 0
            },
            {
                question: "11. What characterizes moderate rainfall?",
                choices: [
                    "A) Individual droplets still distinguishable with downspouts half full",
                    "B) Droplets no longer distinguishable and paddies forming",
                    "C) Slight sound on the roof with no splashing",
                    "D) No noticeable water on surfaces"
                ],
                correct: 0
            },
            {
                question: "12. What are the three main characteristics of rainfall?",
                choices: [
                    "A) Widespread, intense, continuous",
                    "B) Isolated, scattered, widespread",
                    "C) Heavy, continuous, frequent",
                    "D) Light, moderate, heavy"
                ],
                correct: 1
            },
            {
                question: "13. What type of rainfall is described as isolated?",
                choices: [
                    "A) Rain that occurs over large areas",
                    "B) Rain occurring only in specific small regions",
                    "C) Rain spread evenly across a wide region",
                    "D) Rain that lasts for extended periods of time"
                ],
                correct: 1
            },
            {
                question: "14. What defines widespread rainfall?",
                choices: [
                    "A) Heavy rain in a localized area",
                    "B) Rainfall over large areas, affecting entire regions",
                    "C) Rain concentrated around water bodies",
                    "D) Rare, sporadic rainfall patterns"
                ],
                correct: 1
            },
            {
                question: "15. Which rainfall intensity is described when downspouts are completely full and paddies form?",
                choices: [
                    "A) Very light",
                    "B) Light",
                    "C) Moderate",
                    "D) Heavy"
                ],
                correct: 3
            }
        ]
    }
};

let currentChapter = null;
let currentQuestionIndex = 0;
let score = 0;

function loadChapter(chapterNumber) {
    currentChapter = chapters[chapterNumber];
    document.getElementById('chapter-title').innerText = currentChapter.title;
    document.getElementById('category-label').innerText = currentChapter.title;
    document.getElementById('chapter-selection').classList.add('hidden');
    document.getElementById('category-label').classList.remove('hidden');
    document.getElementById('flashcard').classList.remove('hidden');
    document.querySelector('.button-container').classList.remove('hidden');
    document.querySelector('.go-to-container').classList.remove('hidden');
    document.getElementById('go-back-btn').classList.add('hidden'); // Hide "Go Back" button
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = currentChapter.questions[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1} of ${currentChapter.questions.length}`;
    document.getElementById('question').innerText = currentQuestion.question;
    const choiceButtons = document.querySelectorAll('.choice');
    choiceButtons.forEach((button, index) => {
        button.innerText = currentQuestion.choices[index];
        button.disabled = false;
    });
    document.getElementById('result').innerText = '';
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('prev-btn').classList.toggle('hidden', currentQuestionIndex === 0); // Hide previous button on first question
}

function checkAnswer(choiceIndex) {
    const currentQuestion = currentChapter.questions[currentQuestionIndex];
    const isCorrect = choiceIndex === currentQuestion.correct;

    if (isCorrect) {
        document.getElementById('result').innerText = 'Correct!';
        score++;
    } else {
        document.getElementById('result').innerText = 'Wrong! The correct answer was: ' +
            currentQuestion.choices[currentQuestion.correct];
    }

    const choiceButtons = document.querySelectorAll('.choice');
    choiceButtons.forEach(button => button.disabled = true);

    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentChapter.questions.length) {
        loadQuestion();
    } else {
        document.getElementById('flashcard').classList.add('hidden');
        document.getElementById('result').innerText = `Quiz finished! Your score is ${score}/${currentChapter.questions.length}.`;
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('prev-btn').classList.add('hidden'); // Hide previous button at end
        document.getElementById('go-back-btn').classList.remove('hidden'); // Show "Go Back" button
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function goToQuestion() {
    const input = document.getElementById('go-to-input').value;
    const questionIndex = parseInt(input) - 1; // Convert to zero-based index

    if (questionIndex >= 0 && questionIndex < currentChapter.questions.length) {
        currentQuestionIndex = questionIndex;
        loadQuestion();
        document.getElementById('go-to-input').value = ''; // Clear the input
    } else {
        alert('Invalid question number. Please enter a number between 1 and ' + currentChapter.questions.length + '.');
    }
}

function goBack() {
    // Reset variables and UI for going back to chapter selection
    currentChapter = null;
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('chapter-title').innerText = "Di 'wag, sino ba naman aq.";
    document.getElementById('chapter-selection').classList.remove('hidden');
    document.getElementById('category-label').classList.add('hidden');
    document.getElementById('flashcard').classList.add('hidden');
    document.querySelector('.button-container').classList.add('hidden');
    document.querySelector('.go-to-container').classList.add('hidden');
    document.getElementById('go-back-btn').classList.add('hidden'); // Hide "Go Back" button
}

// Initial UI setup
document.getElementById('category-label').classList.add('hidden');
document.getElementById('flashcard').classList.add('hidden');