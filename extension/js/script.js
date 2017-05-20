var socket = io("https://thawing-basin-96551.herokuapp.com/");

socket.on('foo', function () {
  console.log("data acq");
  floating({
    content: "😇",
    number: 3,
    duration: 11
  });
});
