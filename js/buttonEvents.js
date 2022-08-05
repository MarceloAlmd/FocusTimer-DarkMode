export default function ({
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    sounds,
    minutes,
    themes,
    buttonDarkMode,
    buttonLightMode,
    timer
}) {
   


    buttonPlay.addEventListener('click', function(){
        timer.countDown()
        sounds.buttonPressAudio.play()
    })
    
    buttonStop.addEventListener('click', function (){
        timer.hold()
        sounds.buttonPressAudio.play()
    })
    
    buttonPlus.addEventListener('click', function(){
        minutes += 5
        timer.updateDisplay(minutes, 0)
    })
    
    buttonMinus.addEventListener('click', function (){
        minutes -= 5
        timer.updateDisplay(minutes, 0)
    
        if(minutes <= 0 ){
            alert("não é possivel diminuir em 5 minutos")
            timer.updateDisplay(5, 0)
            return
        }
    })

    buttonLightMode.addEventListener('click', function(){ 
        buttonLightMode.classList.add('hide')
        buttonDarkMode.classList.remove('hide')
        themes.changeColors(themes.darkModeColors)
    })
    buttonDarkMode.addEventListener('click', function(){ 
        buttonDarkMode.classList.add('hide')
        buttonLightMode.classList.remove('hide')
        themes.changeColors(themes.lightModeColors) 
     
    })
}
