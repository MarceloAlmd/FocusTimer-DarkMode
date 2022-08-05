export default function ({
    florest,
    rain,
    shop,
    fire,
    sounds,
    inputFlorest,
    inputRain,
    inputShop,
    inputFire,
    
}) {
    florest.addEventListener('click', function(e){
        if(e.target.type != "range"){
    
            florest.classList.toggle('cardOn')
            
            sounds.playAudio(sounds.florest, inputFlorest)
            
            inputFlorest.classList.toggle('darkinput')
    
        }
    })
    
    rain.addEventListener('click', function(e){
        if(e.target.type != "range"){
    
            rain.classList.toggle('cardOn')
         
            sounds.playAudio(sounds.rain, inputRain)
         
            inputRain.classList.toggle('darkinput')
    
        }
    })
    
    shop.addEventListener('click', function(e){
    
        if( e.target.type != "range" ){
            shop.classList.toggle('cardOn')
    
            sounds.playAudio(sounds.shop, inputShop)
    
            inputShop.classList.toggle('darkinput')
        }
    })
    


    fire.addEventListener('click', function(e){
    
        if(e.target.type != "range"){
            fire.classList.toggle('cardOn')

            sounds.playAudio(sounds.fire, inputFire)

            inputFire.classList.toggle('darkinput')
    
        }
    })



}