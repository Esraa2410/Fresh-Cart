import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  searchTerm: string = '';

  constructor(private _ToastrService: ToastrService, private _ProductsService: ProductsService, private _CartService: CartService) { }

  ngOnInit(): void {
    this.getAllProducts()
   
  }

  getAllProducts(){
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
      }
    })

  }

  addToCart(productId: string) {
    this._CartService.addToCart(productId).subscribe({
      next: (res) => {
        this._CartService.numOfCartItems.next(res.numOfCartItems);
        // console.log(res.message)
        this._ToastrService.success(res.message)

      }, error: (err) => {
        // console.log(err);
      }
    })
  }

  



addToWishList(productId: string) {
  this._CartService.addToWishList(productId).subscribe({
    next: (res) => {
     // this._CartService.numOfCartItems.next(res.numOfCartItems);
      // console.log(res.message)
      this._ToastrService.success(res.message)

    }, error: (err) => {
      // console.log(err);
    }
  })
}


}



