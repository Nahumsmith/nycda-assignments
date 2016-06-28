function squareNumber(sqrInput) {
 	var sqrInput = document.getElementById('square-input');
 	sqrInput = sqrInput.value;
   	var sqrAnswer = sqrInput * sqrInput;
  	console.log("The result of squaring the number " + sqrInput + " is " + sqrAnswer);
 	document.getElementById('square-answer').innerText = sqrAnswer;
 	document.getElementById('solution').innerText = "The result of squaring the number " + sqrInput + " is " + sqrAnswer;
 	alert("The result of squaring the number " + sqrInput + " is " + sqrAnswer);
  }
function clearForm1() {
	document.getElementById("square-answer").innerText = "";
}
function halfNumber(halfInput) {
	var halfInput = document.getElementById('half-input');
	halfInput = halfInput.value;
	var halfNum = halfInput / 2;
	console.log("Half of " + halfInput + " is " + halfNum);
	document.getElementById('half-answer').innerText = halfNum;
	document.getElementById('solution').innerText = "Half of " + halfInput + " is " + halfNum;
	alert("Half of " + halfInput + " is " + halfNum)
}
function clearForm2() {
	document.getElementById("half-answer").innerText = "";
}
function percentOf(num1, num2) {
	var num1 = document.getElementById('percent1-input');
	num1 = num1.value;
	var num2 = document.getElementById('percent2-input');
	num2 = num2.value;
	var percentOfTwo = (num1 / num2) * 100;
	console.log(num1 + " is " + percentOfTwo + "% of " + num2);
	document.getElementById('percent-answer').innerText = percentOfTwo + "%";
	document.getElementById('solution').innerText = num1 + " is " + percentOfTwo + "% of " + num2;
	alert(num1 + " is " + percentOfTwo + "% of " + num2);
}
function clearForm3() {
	document.getElementById("percent-answer").innerText = "";
}
function areaOfCircle(radius) {
	var radius = document.getElementById('area-input');
	radius = radius.value;
	var circleArea = Math.PI * (radius * radius);
	circleArea = Math.round((circleArea * 100) / 100);
	console.log("The area for a circle with a radius of " + radius + " is " + circleArea);
	document.getElementById('radius-answer').innerText = circleArea;
	document.getElementById('solution').innerText = "The area for a circle with a radius of " + radius + " is " + circleArea;
	alert("The area for a circle with a radius of " + radius + " is " + circleArea);
}
function clearForm4() {
	document.getElementById("radius-answer").innerText = "";
}
/*function comboFunction(num) {
	var result1 = halfNumber(num);
	var result2 = squareNumber(result1);
	var result3 = areaOfCircle(result2);
	var result4 = percentOf(result3, (result3 * result3));
return result4;
}
*/
document.getElementById('square-button').addEventListener('click', squareNumber);
document.getElementById('clear1').addEventListener('click', clearForm1);
document.getElementById('half-button').addEventListener('click', halfNumber);
document.getElementById('clear2').addEventListener('click', clearForm2);
document.getElementById('percent-button').addEventListener('click', percentOf);
document.getElementById('clear3').addEventListener('click', clearForm3);
document.getElementById('area-button').addEventListener('click', areaOfCircle);
document.getElementById('clear4').addEventListener('click', clearForm4);




