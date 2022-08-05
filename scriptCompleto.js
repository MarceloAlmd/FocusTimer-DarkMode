const buttonLightMode = document.querySelector('.lightmode')
const buttonDarkMode = document.querySelector('.darkmode')
const html = document.querySelector("html")

const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style)


// const lightModeColors = {
//     bgBodyLight: getStyle(html, "--bg-bodylight"),
//     bgColorCardLight: getStyle(html, "--bg-colorcardlight"),
//     colorDisplayLight: getStyle(html, "--color-displaylight"),
//     bgInput: getStyle(html, "--bg-input"),
//     fillColor: getStyle(html, "--fill-color:"),
//     fillColorcard: getStyle(html, "--fill-colorcard"),
//     bgcardselect: getStyle(html, "--primary-color"),
//     bgcardDark: getStyle(html, "--bg-cardDark")
// }

// const darkModeColors = {
//     bgBodyLight: "#121214",
//     bgColorCardLight: "#29292E",
//     colorDisplayLight: "#FFF",
//     bgInput: "#FFF",
//     fillColor: "#C4C4CC",
//     fillColorcard: "#C4C4CC",
//     bgcardselect: "#0A3442",
//     bgcardDark: "#0A3442"
// }

const lightModeColors = {
    bgBodyLight: getStyle(html, "--bg-bodylight"),
    bgColorCardLight: getStyle(html, "--bg-colorcardlight"),
    colorDisplayLight: getStyle(html, "--color-displaylight"),
    bgInput: getStyle(html, "--bg-input"),
    fillColor: getStyle(html, "--fill-color:"),
    fillColorcard: getStyle(html, "--fill-colorcard"),
    primaryColor: getStyle(html, "--primary-color"),
    // bgcardDark: getStyle(html, "--bg-cardDark")
}

const darkModeColors = {
    bgBodyLight: "#121214",
    bgColorCardLight: "#29292E",
    colorDisplayLight: "#FFF",
    bgInput: "#FFF",
    fillColor: "#C4C4CC",
    fillColorcard: "#C4C4CC",
    primaryColor: "#0A3442"
    // bgcardDark: "#0A3442"
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}


const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')


const inputFlorest = document.querySelector('.florest input')
const inputRain = document.querySelector('.rain input')
const inputShop = document.querySelector('.shop input')
const inputFire = document.querySelector('.fire input')

const florest = document.querySelector('.florest')
const rain = document.querySelector('.rain')
const shop = document.querySelector('.shop')
const fire = document.querySelector('.fire')

const soundFlorest = new Audio("sounds/Floresta.wav")
const soundRain = new Audio("sounds/Chuva.wav")
const soundShop = new Audio("sounds/Cafeteria.wav")
const soundFire = new Audio("sounds/Lareira.wav")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

let timerOut
let minutes = Number(minutesDisplay.textContent)

soundFlorest.loop = true
soundRain.loop = true
soundShop.loop = true
soundFire.loop = true

function updateDisplay (minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}
function countDown (){
    timerOut = setTimeout(function(){
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        if(minutes <= 0 && seconds <= 0 ){
            updateDisplay(25, 0)
            kitchenTimer.play()
            return
        }

        if(seconds <= 0 ){
            seconds = 2
            --minutes
        }

        updateDisplay(minutes, seconds - 1) 

        countDown()
    }, 1000)
}
























buttonLightMode.addEventListener('click', function(){ 
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
    changeColors(darkModeColors)
})
buttonDarkMode.addEventListener('click', function(){ 
    buttonDarkMode.classList.add('hide')
    buttonLightMode.classList.remove('hide')
    changeColors(lightModeColors) 
    shop.addEventListener('click', function ( ) {
        shop.classList.add('cardDark')
        shop.classList.remove('cardOn')
    })
})

































inputFlorest.addEventListener('input', function(){
    let currentVolume = inputFlorest.value / 100
    soundFlorest.volume = currentVolume
})
inputRain.addEventListener('input', function(){
    let currentVolume = inputRain.value / 100
    soundRain.volume = currentVolume
})
inputShop.addEventListener('input', function(){
    let currentVolume = inputShop.value / 100
    soundShop.volume = currentVolume
})
inputFire.addEventListener('input', function () {
    let currentVolume = inputFire.value / 100
    soundFire.volume = currentVolume
})

florest.addEventListener('click', function(){
    florest.classList.toggle('cardOn')

    if(soundFlorest.paused){
        soundFlorest.play()
        inputFlorest.value = 50
        soundFlorest.volume = 0.5
    }else{
        soundFlorest.pause()
    }

    inputFlorest.classList.toggle('darkinput')
})

rain.addEventListener('click', function(){
   rain.classList.toggle('cardOn')

   if(soundRain.paused){
        soundRain.play()
        inputRain.value = 50
        soundRain.volume = 0.5
   }else{
    soundRain.pause()
   }

   inputRain.classList.toggle('darkinput')
})

shop.addEventListener('click', function(e){
    console.dir(e.target)
    const inputActive = e.target.type != "range" 
    if(inputActive){
        shop.classList.toggle('cardOn')

        if(soundShop.paused){
            soundShop.play()
            inputShop.value = 50
            soundShop.volume = 0.5
        }else {
            soundShop.pause()
        }
        inputShop.classList.toggle('darkinput')
    }
//    fazendo funcionar o botão range sem desligar o som
//    fazendo funcionar o botão range sem desligar o som
//    fazendo funcionar o botão range sem desligar o som
//    fazendo funcionar o botão range sem desligar o som
//    fazendo funcionar o botão range sem desligar o som
//    fazendo funcionar o botão range sem desligar o som
})

























fire.addEventListener('click', function(){
    fire.classList.toggle('cardOn')
    if(soundFire.paused){
        soundFire.play()
        inputFire.value = 50
        soundFire.volume = 0.5
    }else{
        soundFire.pause()
    }
    inputFire.classList.toggle('darkinput')
})










































buttonPlay.addEventListener('click', function(){
    countDown()
    buttonPressAudio.play()
})

buttonStop.addEventListener('click', function (){
    clearTimeout(timerOut)
    buttonPressAudio.play()
})

buttonPlus.addEventListener('click', function(){
    minutes += 5
    updateDisplay(minutes, 0)
})

buttonMinus.addEventListener('click', function (){
    minutes -= 5
    updateDisplay(minutes, 0)

    if(minutes <= 0 ){
        alert("não é possivel diminuir em 5 minutos")
        updateDisplay(5, 0)
        return
    }
})