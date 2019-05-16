import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestSettingsService } from './rest-settings.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private restSettingsService: RestSettingsService
  ) { }

  public authLogin(username, password): Observable<any> {
    const login = {
      "username": username,
      "password": password
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.restSettingsService.auth, login, httpOptions);
  }

  public get isUserAuth(): string {
    return sessionStorage.getItem('token') || '';
  }

}
