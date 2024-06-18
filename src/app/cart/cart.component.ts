import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartsList: any;
  isLoading:boolean=false;
  constructor(private _CartService: CartService ,private _ToastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAllCarts()

  }

  getAllCarts() {
    this._CartService.getLoggedUserCart().subscribe({
      next: (res) => {
      //  console.log(res.data);
        this.cartsList = res.data;
      }, error: (err) => {
        // console.log(err)
      }
    })
  }

  removeProductFromCart(productId: string) {
    this._CartService.removeCart(productId).subscribe({
      next: (res) => {
        this._CartService.numOfCartItems.next(res.numOfCartItems);
        //console.log(res.numOfCartItems)
        this.cartsList = res.data
      }, error: (err) => {
        //console.log(err)
      },
      complete:()=>{
        this._ToastrService.success('This Product Deleted Successfuly')
      }
    }
    )
  }


  updateProductCount(productId:string,count:number){
    return this._CartService.updateItemCount(productId,count).subscribe({
      next:(res)=>{
        this.cartsList=res.data;
       // console.log(res.data)
      },error:(err)=>{
        //console.log(err)
      },complete:()=>{
        this._ToastrService.success('Product Count updated Successfuly')
      }
    })
  }

}
