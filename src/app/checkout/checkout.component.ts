import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartId:any;
  constructor(private _ToastrService:ToastrService, private _CartService:CartService ,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void { 
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{
        this.cartId=res.get('id')
      }
    })
  }

  checkForm:FormGroup=new FormGroup({
    details:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required]),
    city:new FormControl(null,[Validators.required])
  })

  onlinePayment(cartId:string , checkForm:FormGroup){
    this._CartService.onlinePayment(cartId, checkForm.value).subscribe({
      next:(res)=>{
       // console.log(res.session.url);
        this.navigateToPage(res.session.url);
       // this._ToastrService.success(res)
      },error:(err:HttpErrorResponse)=>{
        //console.log(err);
        this._ToastrService.error(err.error.message)
      },complete:()=>{
       // this.navigateToPage(res.session.url);

      }
    })
  }

  navigateToPage(url:string){
    window.location.href=url;
  }

}
