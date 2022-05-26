//require file system access
let fs = require('fs');

//Read file buffer
imgReadBuffer = fs.readFileSync('machine.jpg');

//Encode image buffer to hex
imaHexEncode = new Buffer(imgReadBuffer).toString('hex');

// buffer for hex string
buffer = new Buffer(imaHexEncode,'hex')

//Output encoded data to console
//console.log(imaHexEncode);

fs.writeFileSync("decode_img.jpg",buffer);



