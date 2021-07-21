//This is the main rendering script

(function(){
    var canvas = document.getElementById('hexmap');
    // Set canvas to fill entire screen
   	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight-50;

    var hexHeight,
        hexRadius,
        hexRectangleHeight,
        hexRectangleWidth,
        hexagonAngle = 0.523598776, // 30 degrees in radians
        rows = 67,
        mod = 12,
        colorArray = findColor(rows, mod);

    var sideLength = canvas.height/2/rows;
    if($(window).width() < 768)
        sideLength = 3;

    hexHeight = Math.sin(hexagonAngle) * sideLength;
    hexRadius = Math.cos(hexagonAngle) * sideLength;
    hexRectangleHeight = sideLength + 2 * hexHeight;
    hexRectangleWidth = 2 * hexRadius;

    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 1;
        drawBoard(ctx, rows);
    }
    function drawBoard(canvasContext, height) {
        var i,
            n = 0,
            j = 0,
            count=0,
            numOfCells = 0,
            row = 0,
            centerAxis=0;

        numOfCells = (height * (1 + height)) / 2;
        centerAxis = canvas.width / 2 - hexRectangleWidth / 2
        for(i = 0; i < rows; i++) {
        	// If row number is even
        	if(i % 2 == 0){
        		// Draw the hexagon in the center
	        	for (x = row/2; x > (0); x--) {
	        		drawHexagon(ctx, centerAxis - hexRectangleWidth * (x), n, colorArray[count]);
	        		count++;
	        	}
	            drawHexagon(ctx, centerAxis, n, colorArray[count], count);
	            count++;

	        	for (y = 0; y < (row/2); y++) {
	        		drawHexagon(ctx, centerAxis + hexRectangleWidth * (y+1), n, colorArray[count]);
	        		count++;
	        	}	        	
        	}else{
        		for (x = (row+1)/2; x > 0; x--) {
		            drawHexagon(
		                ctx, 
		                centerAxis - (2 * x - 1)*(hexRectangleWidth/2), 
		                n, 
		                colorArray[count]
		            );
		            count++;
        		}
        		for (y = 0; y < (row+1)/2; y++) {
		            drawHexagon(
		                ctx, 
		                centerAxis + (2 * y + 1)*(hexRectangleWidth/2), 
		                n, 
		                colorArray[count]
		            );
		            count++;
        		}
        	}
            row++;
            n += sideLength + hexHeight;
        }
    }
    function drawHexagon(canvasContext, x, y, color) {           
        canvasContext.fillStyle = color;
        canvasContext.beginPath();
        canvasContext.moveTo(x + hexRadius, y);
        canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight);
        canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
        canvasContext.lineTo(x + hexRadius, y + hexRectangleHeight);
        canvasContext.lineTo(x, y + sideLength + hexHeight);
        canvasContext.lineTo(x, y + hexHeight);
        canvasContext.closePath();

        canvasContext.fill();
        canvasContext.stroke();
    }

})();


