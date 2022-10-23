//GET Read IP Address
var os = require('os');

var networkInterfaces = os.networkInterfaces();

console.log(networkInterfaces);

const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(networkInterfaces)) {
    for (const net of networkInterfaces[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal && name === 'Wi-Fi') {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

var ipServer = results['Wi-Fi'][0];
var serverDomain = '';
if(ipServer == '10.0.0.68'){
    serverDomain = 'http://livetrack.atcompass.net/ws/WSHOS.asmx';
}else{
    serverDomain = 'http://10.1.10.33:8082/ws/WSHOS.asmx';
}
console.log("The server IP is: " + ipServer);

//Write IP Addres in file
//var pathFile = 'C://Work//AngularHOS//AngularGitHubRepo//DrawLogbook//server.ip.encode.js'
var pathFile = 'C://inetpub//wwwroot//draw-logbook//DrawLogbook//server.ip.encode.js';
fs = require('fs');
fs.writeFile(pathFile, serverDomain, function (err) {
  if (err) return console.log(err);
  console.log('Document save.OK');
});

//Read File
fs.readFile(pathFile, 'utf8', function (err,data) {
	if (err) {
	  return console.log(err);
	}
	console.log("Document Read:\n")
	console.log(data);
  });