import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  constructor(private _ToastrService: ToastrService, private _ProductsService: ProductsService, private _CartService: CartService) { }

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        //  console.log(response.data)
        this.products = response.data;
      }
    })

  }

  addToCart(productId: string) {
    this._CartService.addToCart(productId).subscribe({
      next: (res) => {
        this._CartService.numOfCartItems.next(res.numOfCartItems);
        this._ToastrService.success(res.message)

      }, error: (err: HttpErrorResponse) => {
        this._ToastrService.error(err.error.message)
      }
    })
  }

  addToWishList(productId: string) {
    this._CartService.addToWishList(productId).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message)
  
      }, error: (err) => {
        this._ToastrService.error(err.error.message)
      }
    })
  }
}
