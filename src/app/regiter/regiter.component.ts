import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css']
})
export class RegisterComponent {
  isLoading: boolean = false;
  apiError: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])

  })


  handleRegisterForm(registerForm: FormGroup) {
    this.isLoading = true;
    this._AuthService.register(registerForm.value).subscribe({
      next: (response) => {
        if (response.message === 'success') {
          this.isLoading = true;
          this.isLoading = true;
          this._Router.navigate(['/login']);
        }
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.apiError = err.error.message;
      }, complete: () => {
        this.isLoading = false;
      }

    })

  }

}
