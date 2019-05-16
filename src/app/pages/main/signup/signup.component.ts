import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/core/services/signup.service';

export interface SignUpForm {
  userName: string;
  userPassword: string;
  userPasswordConfirm: string;
  userEmail: string;
  userPermission: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public userName = new FormControl('', [Validators.required]);
  public userPassword = new FormControl('', [Validators.required]);
  public userPasswordConfirm = new FormControl('', [Validators.required]);
  public userEmail = new FormControl('', [Validators.required]);
  public userPermission = new FormControl('', [Validators.required]);

  @Input() display = false;
  @Output() cancel = new EventEmitter<boolean>();
  @Output() choosedEquipment = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private signUpService: SignupService
  ) { }

  ngOnInit() {
  }

  onClickEmitCancelAction() {
    this.router.navigate(['main']);
  }

  onClickEmitNoticeRegister() {
    if (this.userPassword.value !== this.userPasswordConfirm.value) {
      window.alert('Different passwords!');
    } else {
      if (this.userName.value && this.userPassword.value &&
        this.userEmail.value && this.userPasswordConfirm.value) {
          this.register(this.userName.value, this.userEmail.value, this.userPassword.value);
      } else {
        window.alert('You must fill all the fields!');
      }
    }
  }

  register(username, email, password) {
    this.signUpService.register(username, email, password).subscribe(
      res => {
        if (res) {
          window.alert('User registered sucessful!');
        }
      },
      err => window.alert(err.error.message),
      () => location.reload()
    );
  }
}
