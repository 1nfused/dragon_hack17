var SERVER = "https://thawing-basin-96551.herokuapp.com/"
var socket = io(SERVER);

socket.on('foo', function () {
  console.log("data acq");
  floating({
    content: "😇",
    number: 3,
    duration: 11
  });
});


function startPresentation() {
	window.alert("HEyah");
  	var countDownDate = new Date().getTime();

  	// Update the count down every 1 second
  	var x = setInterval(function() {

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



