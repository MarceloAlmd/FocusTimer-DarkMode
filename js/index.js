import Timer from "./timer.js"
import buttonInput from "./buttonInput.js"
import eventsCards from "./eventsCards.js"
import Sounds from "./sound.js"
import buttonEvents from "./buttonEvents.js"
import {
    buttonDarkMode,
    buttonLightMode,
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    minutesDisplay,
    secondsDisplay,
    inputFlorest,
    inputRain,
    inputShop,
    inputFire,
    florest,
    rain,
    shop,
    fire,
    minutes
} from "./elements.js"

import Themes from "./themes.js"

const sounds = Sounds()
const themes = Themes()
const timer = Timer({
    minutesDisplay,
    secondsDisplay
})
buttonEvents({
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    sounds,
    minutes,
    buttonDarkMode,
    buttonLightMode,
    themes,
    timer
})
buttonInput({
    inputFlorest,
    inputRain,
    inputShop,
    inputFire,
    sounds
})
eventsCards({
    florest,
    rain,
    shop,
    fire,
    sounds,
    inputFlorest,
    inputRain,
    inputShop,
    inputFire
})