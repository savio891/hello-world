const forwardProgress = (progress) => {
    const videoProgress = document.querySelector('.barra')
    videoProgress.style.width = progress+'%'
}

function adicionarEventosAosBotoes() {
    const play = document.querySelector('[wm-play]')
    const pause = document.querySelector('[wm-pause]')
    const stop = document.querySelector('[wm-stop]')        
    const vid = document.querySelector('#meuVideo')
    let i;
    let progress = 0;

    play.onclick = (e) => {
        vid.play()
        let interval = setInterval(() => {
            if(progress <= 100){
                progress = progress + 2.27272727
            }
           
            forwardProgress(progress)
        },1000 )
        i = interval;
    }
    pause.onclick = (e) => {
        clearInterval(i) 
        vid.pause()
    }
    stop.onclick = (e) => {
        vid.pause()
        vid.currentTime = 0
        clearInterval(i)
        progress = 0
        forwardProgress(0)
    };
}  
    
window.onload = (e) => {
    adicionarEventosAosBotoes()

}
// Falou nariz de pato
