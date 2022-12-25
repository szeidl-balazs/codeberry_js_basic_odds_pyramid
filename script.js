function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let canvasWidth = canvas.clientWidth;
    let canvasHeight = canvas.height;
    let positionX = 0;
    let positionY = positionX % 2 === 0 ? canvasHeight/2  : canvasHeight/2;

    context.beginPath();

    context.moveTo(positionX,positionY);
    context.lineTo(positionX,positionY);
    context.strokeStyle ='rgba(255,0,0,.5)';
    context.stroke();



}

window.addEventListener("load", pageLoaded);