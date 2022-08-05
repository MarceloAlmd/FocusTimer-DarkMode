export default function ({
    inputFlorest,
    inputRain,
    inputShop,
    inputFire,
    sounds
}) {

    inputFlorest.addEventListener('input', function(){
        let currentVolume = inputFlorest.value / 100
        sounds.florest.volume = currentVolume
    })
    inputRain.addEventListener('input', function(){
        let currentVolume = inputRain.value / 100
        sounds.rain.volume = currentVolume
    })
    inputShop.addEventListener('input', function(){
        let currentVolume = inputShop.value / 100
        sounds.shop.volume = currentVolume
    })
    inputFire.addEventListener('input', function () {
        let currentVolume = inputFire.value / 100
        sounds.fire.volume = currentVolume
    })

    return {

    }


}
