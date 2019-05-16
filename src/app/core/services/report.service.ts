import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }

  setOnCacheTemporarily(reports: any[]) {
    sessionStorage.setItem('reports', JSON.stringify(reports));
  }

  getReportsFromCache(): any[] {
    return JSON.parse(sessionStorage.getItem('reports'));
  }

}
