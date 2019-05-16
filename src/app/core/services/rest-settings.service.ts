import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export class Servers {
  public AUTOBOT_API_LOCAL = 'http://127.0.0.1:5000';
  public AUTOBOT_API_PROD = 'https://autobot.serveo.net';

  public get AUTOBOT_API(): string {
    return this.AUTOBOT_API_LOCAL;
  }

}

@Injectable({
  providedIn: 'root'
})
export class RestSettingsService {

  private servers = new Servers();

  constructor() { }

  public get auth(): string {
    return this.servers.AUTOBOT_API + '/auth';
  }

  public get tests(): string {
    return this.servers.AUTOBOT_API + '/tests';
  }

  public get run(): string {
    return this.servers.AUTOBOT_API + '/run';
  }

  public get register(): string {
    return this.servers.AUTOBOT_API + '/register';
  }

}
