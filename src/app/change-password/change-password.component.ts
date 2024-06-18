import { Component ,Inject, OnInit } from '@angular/core';
import {  MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{
  userToken:any;
  constructor(private _Router:Router, private _ToastrService:ToastrService, private _AuthService:AuthService, public dialogRef: MatDialogRef<ChangePasswordComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
    
  }

  changePassForm:FormGroup=new FormGroup({
    currentPassword:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
    rePassword:new FormControl(null,[Validators.required])
  })

  onChangePass(data:FormGroup){
    this._AuthService.UpdatePassword(data.value).subscribe({
      next:(res)=>{
        if (res.message === 'success') { 
          localStorage.setItem('userToken',res.token);
           this._AuthService.decodeUserData();
         }
        this._ToastrService.success(res.message);
        console.log(res);
        this.userToken=res.token;
      },error:(err:HttpErrorResponse)=>{
        console.log(err);
        this._ToastrService.error(err.error.message);
      },complete:()=>{
        this._AuthService.logOut();
        this._Router.navigate(['/login'])
      }
    })
  }

  onclick(){
    this.dialogRef.close()
  }
}
