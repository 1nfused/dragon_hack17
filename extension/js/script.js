var SERVER = "https://thawing-basin-96551.herokuapp.com/"
var socket = io(SERVER);

// Accept emoji
socket.on('foo', function (data) {
  floating({
    content: data["emoji"],
    number: 1,
    duration: 8
  });
});

// Accept statistical data
socket.on('delete_acq', function(data) {
	console.log(data);
});


function execPresentation(phase) {

	// Set countdown date
  	var countDownDate = new Date().getTime();
  	var x;

  	if (phase == "start"){
  		// Update the count down every 1 second
	  	x = setInterval(function() {
	    	// Get todays date and time
	    	var now = new Date().getTime();

	    	// Find the distance between now an the count down date
	    	var distance = countDownDate + now;

	    	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	    	// Display the result in the element with id="demo"
	    	document.getElementById("evt_timer").innerHTML = minutes + "m " + seconds + "s ";
	  	}, 1000);
  	}
  	if (phase == "stop") {
		clearInterval(x);
		document.getElementById("evt_timer").innerHTML = "";
		return;
	}
}

document.addEventListener('click', function (e) {
	inner_text = document.getElementById("start_button").innerHTML;
	if (inner_text == "START") {
		document.getElementById("start_button").innerHTML = "STOP";
		// Start clock
		execPresentation("start");
	} else {
		document.getElementById("start_button").innerHTML = "START";
		execPresentation("stop");
		// Send delete message to the client
		socket.emit('delete');
	}
	
});


