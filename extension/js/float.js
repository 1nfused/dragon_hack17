/*console.log("lalalalala")
floating({
    content: '<img src="https://emojipedia-us.s3.amazonaws.com/cache/17/1f/171fab7619ba56380a2fc11d94f2010a.png">',
    number: 1,
    duration: 8
  });
*/

var SERVER = "https://thawing-basin-96551.herokuapp.com/"
var socket = io(SERVER);

// Accept emoji
socket.on('foo', function (data) {
    console.log(data);
    switch (data) {
        case 0:
            // like
            floating({
                content: '<img src="https://emojipedia-us.s3.amazonaws.com/cache/9d/f7/9df70eb33161bb2d69c9f20651c7eb98.png">',
                number: 1,
                repeat: 1,
                duration: 8,
                size: 5
            });
            break;
        case 1:
            // srcek
            floating({
                content: '<img src="https://emojipedia-us.s3.amazonaws.com/cache/1e/14/1e144e61e596c32371b3265229fc9806.png">',
                number: 1,
                repeat: 1,
                duration: 8,
                size: 5
            });
            break;
        case 2:
            // dislike
            floating({
                content: '<img src="https://emojipedia-us.s3.amazonaws.com/cache/b0/7d/b07d51a7a40810e74d586b60aeff11bf.png">',
                number: 1,
                repeat: 1,
                duration: 8,
                size: 5
            });
            break;
        case 3:
            // smiley
            floating({
                content: '<img src="https://emojipedia-us.s3.amazonaws.com/cache/a8/57/a857eb7cf744d9a565685bb713aa20d5.png">',
                number: 1,
                repeat: 1,
                duration: 8,
                size: 5
            });
            break;
        case 4:
            // zaspan
            floating({
                content: '<img src="https://emojipedia-us.s3.amazonaws.com/cache/1a/e4/1ae4bfca0bd939df842cdff2b6ac3c40.png">',
                number: 1,
                repeat: 1,
                duration: 8,
                size: 5
            });
            break;
        
    }
    
});

// Accept statistical data
socket.on('delete_acq', function (data) {
    console.log(data);
});

