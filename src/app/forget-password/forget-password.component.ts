
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { VerifyComponent } from '../verify/verify.component';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(private _MatDialog:MatDialog, private _Router:Router, private _ToastrService:ToastrService , private _AuthService: AuthService, public dialogRef: MatDialogRef<ForgetPasswordComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required])
  })

  onForget(forgetForm: FormGroup) {
    this._AuthService.forgetPassword(forgetForm.value).subscribe({
      next: (res) => {
       // console.log(res);
        this._ToastrService.success(res.message)
      }, error: (err:HttpErrorResponse) => {
       // console.log(err);
        this._ToastrService.error(err.error)
      },complete:()=>{
        this.onNoclick();
        this.openDialog()
        

      }
    })
  }
  

  openDialog( ): void {
    this._MatDialog.open(VerifyComponent, {
      width: '450px',
      height:'230px',
    
    });
  }
    onNoclick(){
      this.dialogRef.close()
    }
  
}
