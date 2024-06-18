import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  constructor(private _MatDialog:MatDialog, public dialog: MatDialog, private _Router:Router, private _ToastrService:ToastrService ,
     private _AuthService: AuthService,
      public dialogRef: MatDialogRef<VerifyComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  verfiyForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required])
  })


  onVerfiy(verfiyForm: FormGroup) {
    this._AuthService.VerfiyPassword(verfiyForm.value).subscribe({
      next: (res) => {
       //console.log(res);
        this._ToastrService.success(res.status)
      }, error: (err:HttpErrorResponse) => {
      // console.log(err);
        this._ToastrService.error(err.error.message)
      },complete:()=>{
        this.onNoclick();
        this.openDialog()
      }
    })


  }


  openDialog( ): void {
    this._MatDialog.open(ResetPasswordComponent, {
      width: '450px',
      height:'370px',
    
    });
  }

  onNoclick(){
    this.dialogRef.close()
  }

}
