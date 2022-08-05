export default function ({
    minutesDisplay,
    secondsDisplay
}) {

    let timerOut
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
                sounds.kitchenTimer.play()
                return
            }
    
            if(seconds <= 0 ){
                seconds = 60
                --minutes
            }
    
            updateDisplay(minutes, seconds - 1) 
    
            countDown()
        }, 1000)

    }

    function hold() {
        clearTimeout(timerOut)

    }

    return {
        updateDisplay,
        countDown,
        hold
    }
    
}