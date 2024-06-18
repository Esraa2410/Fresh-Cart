import { HttpErrorResponse } from '@angular/common/http';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishList:any;
  constructor(private _ToastrService:ToastrService, private _ProductsService:ProductsService ,private _WishlistService:WishlistService){

  }

  ngOnInit(): void {
    this.getAllWishList()
  }

  getAllWishList(){
    this._ProductsService.getWishList().subscribe({
      next:(res)=>{
       // console.log(res.data);
        this.wishList=res.data;
      },error:(err:HttpErrorResponse)=>{
       // console.log(err)
      }
    })
  }

  removeProductFromCart(id:string){
    this._WishlistService.removeFromWishList(id).subscribe({
      next:(res)=>{
       // console.log(res);
        this._ToastrService.success(res.message);
      },error:(err:HttpErrorResponse)=>{
       // console.log(err);
        this._ToastrService.error(err.error)
      },complete:()=>{
        this.getAllWishList()
      }
    })
  }

}
