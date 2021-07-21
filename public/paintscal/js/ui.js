/*
    This script contains methods and variables that bring life to the User Interface Elements for Paintscal.
    
*/

$(document).ready(function () {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', '/paintscal/no.mp3');
  $.get();
  audioElement.addEventListener(
    'load',
    function () {
      audioElement.play();
    },
    true,
  );
  $('#rows').on('input propertychange paste', function () {
    $('.alert').hide();
    var input = $('#rows').val();
    if (input > 1000) {
      $('.error-info').text('TOO BIG, TOO BIG.');
      $('.alert').show();
      $('#rows').val($('#rows').val().slice(0, -1));
      audioElement.play();
    } else if (input < 1) {
      $('.error-info').text(
        "TOO SMALL, TOO SMALL (The input value is too small, I can't draw a Pascal's Triangle with no rows).",
      );
      $('.alert').show();
      $('#rows').val('');
      audioElement.play();
    } else {
      if (!Number.isInteger(Number(input))) {
        $('.error-info').text('INTEGER ONLY PLS!');
        $('.alert').show();
        $('#rows').val('');
        audioElement.play();
      } else {
        repaint($('#rows').val(), $('#mod').val());
      }
    }
  });

  $('#mod').on('input propertychange paste', function () {
    $('.alert').hide();
    var input = $('#mod').val();
    if (input < 1) {
      $('.error-info').text('The MOD value has to be greater or equal to 2');
      $('.alert').show();
      $('#mod').val('');
      audioElement.play();
    } else if (input > 9000) {
      $('.error-info').text('TOO BIG, TOO BIG.');
      $('.alert').show();
      $('#rows').val('');
      audioElement.play();
    } else {
      if (!Number.isInteger(Number(input))) {
        $('.error-info').text('INTEGER ONLY PLS!');
        $('.alert').show();
        $('#mod').val('');
        audioElement.play();
      } else {
        console.log(allColor);
        repaint($('#rows').val(), $('#mod').val());
      }
    }
  });

  $('#custom').spectrum({
    color: '#f00',
  });
});

function getFormData() {
  var mod = document.getElementById('mod').value;
  var rows = document.getElementById('rows').value;
  repaint(rows, mod);
}

function repaint(rows, mod) {
  var canvas = document.getElementById('hexmap');

  var hexHeight,
    hexRadius,
    hexRectangleHeight,
    hexRectangleWidth,
    hexagonAngle = 0.523598776, // 30 degrees in radians
    colorArray = findColor(rows, mod);

  var sideLength = canvas.height / 2 / rows;

  hexHeight = Math.sin(hexagonAngle) * sideLength;
  hexRadius = Math.cos(hexagonAngle) * sideLength;
  hexRectangleHeight = sideLength + 2 * hexHeight;
  hexRectangleWidth = 2 * hexRadius;

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard(ctx, rows);
  }
  function drawBoard(canvasContext, height) {
    var i,
      n = 0,
      j = 0,
      count = 0,
      numOfCells = 0,
      row = 0,
      centerAxis = 0;

    numOfCells = (height * (1 + height)) / 2;
    centerAxis = canvas.width / 2 - hexRectangleWidth / 2;
    for (i = 0; i < rows; i++) {
      // If row number is even
      if (i % 2 == 0) {
        // Draw the hexagon in the center
        for (x = row / 2; x > 0; x--) {
          drawHexagon(
            ctx,
            centerAxis - hexRectangleWidth * x,
            n,
            colorArray[count],
          );
          count++;
        }
        drawHexagon(ctx, centerAxis, n, colorArray[count], count);
        count++;

        for (y = 0; y < row / 2; y++) {
          drawHexagon(
            ctx,
            centerAxis + hexRectangleWidth * (y + 1),
            n,
            colorArray[count],
          );
          count++;
        }
      } else {
        for (x = (row + 1) / 2; x > 0; x--) {
          drawHexagon(
            ctx,
            centerAxis - (2 * x - 1) * (hexRectangleWidth / 2),
            n,
            colorArray[count],
          );
          count++;
        }
        for (y = 0; y < (row + 1) / 2; y++) {
          drawHexagon(
            ctx,
            centerAxis + (2 * y + 1) * (hexRectangleWidth / 2),
            n,
            colorArray[count],
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
}

function downloadCanvas(link, canvasId, filename) {
  link.href = document.getElementById(canvasId).toDataURL();
  link.download = filename;
}

document.getElementById('download').addEventListener('click', function () {
  downloadCanvas(this, 'hexmap', 'paintscal.png');
});

/* This simple method ensures that the page will not scroll when it's being used. */
$('html, body').css({
  overflow: 'hidden',
  height: '100%',
});
