export enum ServerType {
  assureServer33    = 'http://10.1.10.33:8082/ws/WSHOS.asmx',            // Carlos PC o Joel PC http://192.168.0.165:8083/ws/WSHOS.asmx http://10.1.10.212:8083/ws/WSHOS.asmx http://10.1.10.33:8082/ws/WSHOS.asmx
  eldBackup         = "http://login.eldbackup.com/ws/WSHOS.asmx",        // Backup
  livetrack         = "https://livetrack.atcompass.net/ws/WSHOS.asmx",   // Live Assured
  serverCanada      = "https://ca.login.apolloeld.com/ws/WSHOS.asmx",    // Canada Certification
  blueStar          = "https://eld.bluestareld.com/ws/WSHOS.asmx",       // Blue Star
  apollostaging     = "https://staging.apolloeld.com/ws/WSHOS.asmx",     // Apollo Staging 
  apollostagingAPI  = "https://staging.apolloeld.com:8081/ws/WSHOS.asmx" // Apollo Staging API
}
//
export enum ServerName {
  server33               = 'assureServer33',
  serverEldBackup        = 'eldBackup',
  serverProd             = 'livetrack',
  serverCanada           = 'serverCanada',
  serverBlueStar         = 'blueStar',
  serverApolloStaging    = 'apollostaging',
  serverApolloStagingAPI = 'apollostagingAPI'
}
