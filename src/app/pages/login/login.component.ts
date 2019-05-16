import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = new FormControl('', [Validators.required]);
  public password = new FormControl('', [Validators.required]);

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.loginService.isUserAuth) {
      this.router.navigate(['autobot']);
    }
  }

  makeLogin() {
    if (this.username.value && this.password.value) {
      this.loginService.authLogin(this.username.value, this.password.value).subscribe(
        token => {
          if (token) {
            sessionStorage.setItem('token', token.access_token);
            this.router.navigate(['autobot']);
          }
        },
        err => {
          if (err.hasOwnProperty('status')) {
            if (err.status === 0) {
              window.alert('Server does not working!');
            } else if (err.status === 401) {
              window.alert('Invalid login or password!');
            }
          }
        }
      );
    } else {
      window.alert(this.getErrorMessage());
    }
  }

  getErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a username!' :
      this.password.hasError('required') ? 'You must enter a password!' : '';
  }

}
