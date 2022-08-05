    export default function ( ) {
    const florest = new Audio("sounds/Floresta.wav")
    const rain = new Audio("sounds/Chuva.wav")
    const shop = new Audio("sounds/Cafeteria.wav")
    const fire = new Audio("sounds/Lareira.wav")
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    florest.loop = true
    rain.loop = true
    shop.loop = true
    fire.loop = true


    function playAudio(sounds,typeInput){
        if(sounds.paused){
            sounds.play()
            typeInput.value = 50
            sounds.volume = 0.5
            
        }else{
            sounds.pause()
        }
    }

    return {
        playAudio,
        florest,
        rain,
        shop,
        fire,
        buttonPressAudio,
        kitchenTimer
    }
}