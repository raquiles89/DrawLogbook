// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ServerName } from 'src/app/core/ServerType';
//import { Console } from 'console';
//import * as fs from 'fs';
//import * as path from 'path';

//var dataServer;
//Read File
/*fs.readFile(path.join(__dirname, "server.ip.encode.js"), (err, data) => {
  if (err) throw err;
  dataServer = data;
  console.log(dataServer);
})*/

export const environment = {
  production: false,
  apiUrl: '',
  fmcsaexporttest:1,
  dashboardTickUpdate: 120000,
  demo_credential: '',
  localdev: false,
  validateURL: false,//true,
  serverName: "",
  applogs: false,
  allPermitions: 1 // if server is Blue Star always allPermitions: 1 (only in Prod)
  // appCountry: 2
  // demo_credential: super_admin, hos_support, cli, demo_credential, reseller_credential, demo_prometheus_credential
  //ServerType
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
