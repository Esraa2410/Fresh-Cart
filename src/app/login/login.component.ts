import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false;
  apiError: string = '';
  constructor(private _ToastrService: ToastrService, public dialog: MatDialog, private _AuthService: AuthService, private _Router: Router) { }

  openDialog(): void {
    this.dialog.open(ForgetPasswordComponent, {
      width: '450px',
      height: '230px',

    });
  }


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),

  })


  handleLoginForm(loginForm: FormGroup) {
    this.isLoading = true;
    this._AuthService.login(loginForm.value).subscribe({
      next: (response) => {
        if (response.message === 'success') {
          localStorage.setItem('userToken', response.token);
          this._AuthService.decodeUserData()
          this.isLoading = true;
          this._Router.navigate(['/home']);
        }
      },
      error: (err: HttpErrorResponse) => {
        this._ToastrService.error(err.error.message);
        this.isLoading = false;
      }, complete: () => {
        this.isLoading = false;
      }

    })

  }

}
