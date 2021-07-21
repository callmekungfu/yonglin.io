/*  
    This Script contains methods that calculate the array of colors to be applied on the triangle image
    according to the given number of rows and the mod number. 

    Author: Yonglin Wang
    Last Official Edit: 10/28/2016
*/


/*
    CalcMod is a method that utilizes the special pattern of the Pascal's Triangle in which -
    - tri[i][j] = tri[i-1][j-1] + tri[i-1][j] -
    Using this formula, we are able to calculate the modulor value of each element in the Pascal's triangle
    based on the given mod number.

    The method requires 2 parameters to function properly:
        rowNum - Defines the number of rows in the Pascal's Triangle to be calculated.
        mod - Defines the mod number the triangle is going to be calculated by.

    The method returns a 2 dimensional array containing the post calculated values.
*/
function calcMod(rowNum, mod){
    var tri = [[1],[1,1]];
    for(var i = 2; i < rowNum; i++){
        tri[i] = [];//define a new row in the array.
        
        tri[i][0] = 1;// Initialize each row's first number to the value 1
        tri[i][i] = 1;// Initialize each row's last number to the value 1

        for(var j = 1; j <= (i-1); j++){
            tri[i][j] = (tri[i-1][j-1] + tri[i-1][j]) % mod;
        }
    }
    return tri;
}

function getRandomColor(colors) {
	var letters = '0123456789ABCDEF';
	var color;
    while(true){
        color = "#";
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        if (!colors.includes(color)) {
            break;
        }
    }
	return color;
}

/*
    findColor is the method that brings everything together to generate the array of colors used in rendering.
*/
function findColor(rowNum, mod){
    var pascalArray = calcMod(rowNum, mod),
        colorArray = [],
        output = [];
    for(var c = 0; c < mod; c++){
        colorArray[c] = getRandomColor(colorArray);
    }   
    for(var i = 0; i < pascalArray.length; i++){
        for(var j = 0; j < pascalArray[i].length; j++){
            output.push(colorArray[pascalArray[i][j]]);
        }
    }
    allColor = output;
    return output;
}