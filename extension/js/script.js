/*var SERVER = "https://thawing-basin-96551.herokuapp.com/"
var socket = io(SERVER);

 Accept emoji
socket.on('foo', function (data) {
  console.log(data);
  floating({
    content: "img/" + data["emoji"],
    number: 1,
    duration: 8
  });
});

// Accept statistical data
socket.on('delete_acq', function(data) {
	console.log(data);
});*/

var data = [];

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

document.addEventListener('click', this.showCheckboxes.bind(this));

document.addEventListener('click', function (e) {
	

	/*chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
		code: 'floating({ content: "👌", number: 1, duration: 8 });'		
	}); */

	inner_text = document.getElementById("start_button").innerHTML;
	if (inner_text == "START") {
		document.getElementById("start_button").innerHTML = "STOP";
		// Start clock
		execPresentation("start");
		console.log("tukaaaaj");

	} else {
		document.getElementById("start_button").innerHTML = "START";
		execPresentation("stop");
		// Send delete message to the client
		//socket.emit('delete');
	}
	
});

var expanded = false;

    function showCheckboxes() {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }



