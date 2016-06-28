function updateClock() {
    // Gets the current time and sets it to new variable
    var currentTime = new Date();
    // Get the hours, minutes and seconds from the current time and set them to new variables
    var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
	var currentMSeconds = currentTime.getMilliseconds();
    // Format hours, minutes, seconds and milliseconds(TERNARY OPERATORS) 
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
	currentMSeconds = (((currentMSeconds < 100) && (currentMSeconds < 10)) ? "00" : "") + currentMSeconds;
    currentMSeconds = (((currentMSeconds < 100) && (currentMSeconds >= 10)) ? "0" : "") + currentMSeconds;
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	// Choose Am or PM (TERNARY OPERATORS)
	var timeOfDay = (currentHours > 12) ? "<span>AM</span>" : "<span>PM</span>";
    // Gets the element id we want to inject the clock into
    var elem = document.getElementById('clock-text');
    // Sets the elements inner HTML value to our clock data
    elem.innerHTML = currentHours + ':' + currentMinutes + ':' + currentSeconds 
    + ':' + currentMSeconds + " " + timeOfDay;
}