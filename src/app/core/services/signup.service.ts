import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestSettingsService } from './rest-settings.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private restSettingsService: RestSettingsService,
    private http: HttpClient
  ) { }

  public register(username, email, password): Observable<any> {
    const user = {
      "username": username,
      "email": email,
      "password": password
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.restSettingsService.register, user, httpOptions);
  }
}
