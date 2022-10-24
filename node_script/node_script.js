
var SName = require('./ServerName');
var serverName = new SName();

var SType = require('./ServerType');
var serverType = new SType();

var os = require('os');
const ServerName = require('./ServerName');
const ServerType = require('./ServerType');

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
/*if(ipServer == '10.0.0.68'){
    serverDomain = 'http://livetrack.atcompass.net/ws/WSHOS.asmx';
}else{
    serverDomain = 'http://10.1.10.33:8082/ws/WSHOS.asmx';
}*/

serverDomain = serverType.getCurrentServerByIp(ipServer, '80');
console.log("The server IP is: " + ipServer);
console.log("The server Domain is: " + serverDomain);


var textEnviroment = ''
+ 'import { ServerName } from \'src/app/core/ServerType\'' + '\n\n'
+ 'export const environment = {' + '\n'
+ 'production: true,' + '\n'
+ 'apiUrl: \'http://livetrack.atcompass.net/ws/WSHOS.asmx\',' + '\n'
+ 'fmcsaexporttest:0,' + '\n'
+ 'dashboardTickUpdate: 120000,' + '\n'
+ 'demo_credential: null,' + '\n'
+ 'serverName: \''  + serverDomain + '\', //canada' + '\n'
+ 'applogs: false,' + '\n'
+ 'appCountry: 2,' + '\n'
+ 'allPermitions: 1 // if server is Blue Star always allPermitions: 1' + '\n'
+ '};' + '\n';


//Write IP Addres in file
//var pathFile = 'C://Work//AngularHOS//AngularGitHubRepo//DrawLogbook//server.ip.encode.js'
//var pathFile = 'C://inetpub//wwwroot//draw-logbook//DrawLogbook//server.ip.encode.js';
var pathFile = 'C://inetpub//wwwroot//draw-logbook//DrawLogbook//src//environments//environment.prod.ts';
fs = require('fs');
fs.writeFile(pathFile, textEnviroment, function (err) {
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