const buttonLightMode = document.querySelector('.lightmode')
const buttonDarkMode = document.querySelector('.darkmode')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)



const inputFlorest = document.querySelector('.florest input')
const inputRain = document.querySelector('.rain input')
const inputShop = document.querySelector('.shop input')
const inputFire = document.querySelector('.fire input')

const florest = document.querySelector('.florest')
const rain = document.querySelector('.rain')
const shop = document.querySelector('.shop')
const fire = document.querySelector('.fire')

export {
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
}