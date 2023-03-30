let time = 1000,
positionCurrentImage = 0,
images  = document.querySelectorAll('[wm-slider]')
max = images.length

slider = () => {
    images[positionCurrentImage]
    .classList.remove("selected")

    positionCurrentImage++

    if(positionCurrentImage => max) {
        positionCurrentImage = 0

        images[positionCurrentImage]
        .classList.add("selected")
    }
}
 function start() {
    setInterval(() => {
    slider()        
    }, time);
 }

 window.addEventListener("load", start)
