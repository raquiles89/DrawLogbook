import { ServerName } from 'src/app/core/ServerType';
import { Console } from 'console';
import * as fs from 'fs';
import * as path from 'path';


//Read File
fs.readFile(path.join(__dirname, "server.ip.encode.js"), (err, data) => {
  if (err) throw err;
  console.log(data);
})

export const environment = {
  production: true,
  apiUrl: 'http://livetrack.atcompass.net/ws/WSHOS.asmx',
  fmcsaexporttest:0,
  dashboardTickUpdate: 120000,
  demo_credential: null,
  validateURL: true,
  //serverName: ServerName.serverProdSSL, //usa
  serverName: ServerName.serverProd, //canada
  applogs: false,
  appCountry: 2,
  allPermitions: 1 // if server is Blue Star always allPermitions: 1
};
