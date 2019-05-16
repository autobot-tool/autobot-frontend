import { Injectable } from '@angular/core';
import { RestSettingsService } from './rest-settings.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private restSettingsServices: RestSettingsService,
    private http: HttpClient
  ) { }

  public tests(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `JWT ${sessionStorage.getItem('token')}`
      })
    };
    return this.http.get<any>(this.restSettingsServices.tests, httpOptions);
  }

  public run(testSuite): Observable<any> {
    const body = {
      'test_suite': testSuite
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `JWT ${sessionStorage.getItem('token')}`
      })
    };
    return this.http.post<any>(this.restSettingsServices.run, body, httpOptions);
  }

}
