import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private _MatDialog:MatDialog, public dialog: MatDialog, private _Router:Router, private _ToastrService:ToastrService ,
    private _AuthService: AuthService,
     public dialogRef: MatDialogRef<ResetPasswordComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

 resetPassForm: FormGroup = new FormGroup({
  email: new FormControl(null, [Validators.required]),
  newPassword: new FormControl(null, [Validators.required])
 })


 onReset(resetPassForm: FormGroup) {
   this._AuthService.resetPassword(resetPassForm.value).subscribe({
     next: (res) => {
     // console.log(res);
       this._ToastrService.success('Your Password Updated Successfuly')
     }, error: (err:HttpErrorResponse) => {
     // console.log(err);
       this._ToastrService.error(err.error.message)
     },complete:()=>{
       this.onNoclick();
       this._Router.navigate(['/login'])
     }
   })
 }



 onNoclick(){
   this.dialogRef.close()
 }

}
