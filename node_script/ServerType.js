module.exports = class ServerType{
  
  assureServer33    = 'http://10.1.10.33:8082/ws/WSHOS.asmx';            // Carlos PC o Joel PC http://192.168.0.165:8083/ws/WSHOS.asmx http://10.1.10.212:8083/ws/WSHOS.asmx http://10.1.10.33:8082/ws/WSHOS.asmx
  eldBackup         = "http://login.eldbackup.com/ws/WSHOS.asmx";        // Backup
  livetrack         = "https://livetrack.atcompass.net/ws/WSHOS.asmx";   // Live Assured
  serverCanada      = "https://ca.login.apolloeld.com/ws/WSHOS.asmx";    // Canada Certification
  blueStar          = "https://eld.bluestareld.com/ws/WSHOS.asmx";       // Blue Star
  apollostaging     = "https://staging.apolloeld.com/ws/WSHOS.asmx";     // Apollo Staging 
  apollostagingAPI  = "https://staging.apolloeld.com:8081/ws/WSHOS.asmx"; // Apollo Staging API

  constructor(){
  
  }

  getCurrentServerByIp(ip, port) {
    if(ip ==  '10.0.0.68' || ip == '10.1.10.206'){
      return ServerType.livetrack;
    }
    switch (ip) {
      case '10.0.0.68':
        return ServerType.livetrack;
        break;
      case '10.1.10.33':
        return ServerType.assureServer33;
        break;
      case '209.160.41.199':
        return ServerType.eldBackup;
        break;
      case '209.160.41.114':
        return ServerType.livetrack;
        break;
      case '209.160.27.38':
        return ServerType.blueStar;
        break;
      case '209.160.41.27':
        if(port == '9090'){
          return ServerType.serverCanada;
        }else if(port == '80'){
          return ServerType.apollostaging;
        }else if(port == '8081'){
          return ServerType.apollostagingAPI;
        }else{
          return "";
        }
        break;
    }
    return "";
   }

   getCurrentServer (serverType) {
    switch (serverType) {
      case 'assureServer33':
        return ServerType.assureServer33;
        break;
      case 'eldBackup':
        return ServerType.eldBackup;
        break;
      case 'livetrack':
        return ServerType.livetrack;
        break;
      case 'serverCanada':
        return ServerType.serverCanada;
        break;
      case 'blueStar':
        return ServerType.blueStar;
        break;
      case 'apollostaging':
        return ServerType.apollostaging;
        break;
      case 'apollostagingAPI':
        return ServerType.apollostagingAPI;
        break;
    }
    return "";
   }
}