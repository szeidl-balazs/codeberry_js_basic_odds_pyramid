function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let canvasWidth = canvas.clientWidth;
    let canvasHeight = canvas.height;
    let origoX = 0;
    let origoY = canvasHeight * .5;
    let peakX = canvasWidth * .5;
    let peakY = 0;

    
    for (i = 0; i < canvasWidth / 3; i++) {

        context.beginPath();        

        context.moveTo(origoX,origoY);
        context.lineTo(peakX,peakY);
        context.strokeStyle ='rgba(255,0,0,.5)';
        context.stroke();

        origoX += 3;  

        if (origoX % 2 === 0) {
            peakY = 0;   /*The peakY has to be reset to 0 otherwise after the first odds origoX it remains the value of canvasHeight*/
        } else {
            peakY = canvasHeight;
        }
        
    }



}

window.addEventListener("load", pageLoaded);