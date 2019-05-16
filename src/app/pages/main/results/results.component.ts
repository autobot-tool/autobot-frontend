import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/core/services/report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(
    private reportService: ReportService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public get results(): any[] {
    return this.reportService.getReportsFromCache();
  }

  formatSuiteName(name) {
    if (name == 'wifi24') {
      return 'WI-FI 2.4GHz';
    } else if ('wifi50') {
      return 'WI-FI 5.0GHz';
    }
  }

  formatDUTName(dut) {
    if (dut == 'vap') {
      return 'VAP 4641';
    } else if ('net') {
      return 'NET 3P';
    }
  }
}
