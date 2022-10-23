import { ServerName } from 'src/app/core/ServerType';


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
