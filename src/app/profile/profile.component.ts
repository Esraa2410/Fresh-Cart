import { Component ,Inject } from '@angular/core';
import {  MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userToken:any;

  constructor(private _Router:Router, private _AuthService:AuthService,private _ToastrService:ToastrService, public dialogRef: MatDialogRef<ProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}

  changePassForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required])
  })

  onChangePass(data:FormGroup){
    this._AuthService.UpdateUserData(data.value).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message);
        console.log(res);
        this.userToken=res.token;
      },error:(err:HttpErrorResponse)=>{
        console.log(err);
        this._ToastrService.error(err.error.errors.msg);
      },complete:()=>{
        this.onclick();
         this._AuthService.logOut();
        this._Router.navigate(['/login']);
      }
    })
  }

  onclick(){
    this.dialogRef.close()
  }
}
