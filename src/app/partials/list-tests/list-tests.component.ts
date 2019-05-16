import { Component, OnInit, ViewChild, ElementRef, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MainService } from 'src/app/core/services/main.service';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ReportService } from 'src/app/core/services/report.service';

@Component({
  selector: 'app-list-tests',
  templateUrl: './list-tests.component.html',
  styleUrls: ['./list-tests.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListTestsComponent implements OnInit, OnChanges {

  public flagAllItems = new FormControl();
  public flagAddTests = 0;
  public testSuite = [];
  public report = [];
  public form: FormGroup;

  @Input() tests = [];
  @Input() title;

  @ViewChild('lstTests') lstTests: ElementRef;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private mainService: MainService,
    private formBuilder: FormBuilder,
    private reportService: ReportService
  ) {
    this.form = this.formBuilder.group({
      tests: new FormArray([])
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.addTests();
  }

  onCancel() {
    this.router.navigate(['autobot']);
  }

  openDialog() {
    // Restarts the array
    this.testSuite = [];

    if (window.confirm('Do you want to run the tests?')) {
      const lstCheckbox = this.lstTests.nativeElement.querySelectorAll('input');

      // Progress active
      this.spinner.show();

      for (let i = 0; i < lstCheckbox.length; i++) {
        if (lstCheckbox[i].checked) {
          this.testSuite.push(this.tests[i]);
        }
      }

      this.mainService.run(this.testSuite).subscribe(
        json => this.report = json.report || [],
        err => { console.error(err); this.spinner.hide(); },
        () => {
          //window.alert('Tests complete!');
          this.spinner.hide();
          this.reportService.setOnCacheTemporarily(this.report);
          this.router.navigate(['main/results']);
        }
      );
    }
  }

  checkSelectedItem() {
    const checkboxes = this.form.controls.tests['controls'];
    let counter = 0;

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value) counter++;
    }

    if (counter !== 0) {
      this.flagAddTests = counter;
    } else {
      this.flagAddTests = 0;
    }

    if (counter === this.tests.length) {
      this.flagAllItems.setValue(true);
    } else if (counter < this.tests.length) {
      this.flagAllItems.setValue(false);
    }
  }

  checkAllItems() {
    const checkboxes = this.form.controls.tests['controls'];

    if (this.flagAllItems.value) {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].setValue(true);
      }
      this.flagAddTests = this.tests.length;
    } else {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].setValue(false);
      }
      this.flagAddTests = 0;
    }
  }

  private addTests() {
    this.tests.map((o, i) => {
      const control = new FormControl(false);
      (this.form.controls.tests as FormArray).push(control);
    });
  }

}
