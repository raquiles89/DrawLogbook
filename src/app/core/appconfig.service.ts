import { Injectable } from '@angular/core';
import { ServerType } from './ServerType';

@Injectable({
  providedIn: 'root'
})
export class AppconfigService {

  localurlSet: any = {
    assets: '/assets',
    carriers: '/carriers',
    drivers: '/drivers',
    homebase: '/homebase',
    reseller: '/reseller'
  }

  constructor() { }

  /**
   * Get CurrentServer
   * @param serverType
   */
  getCurrentServer(serverType: any): string {

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
  }
}
