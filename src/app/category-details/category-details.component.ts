import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent  implements OnInit{
  cateId: any;
  cateDtails:any;
  constructor(private _ProductsService: ProductsService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({ next: (res) => { this.cateId = res.get('id'); } })
    this.getPoductDtails(this.cateId);
  }

  getPoductDtails(id: any) {
    this._ProductsService.getCategoryDetails(id).subscribe({
      next: (res) => {
        this.cateDtails=res.data;
        console.log(res.data);
      }, error: (err) => {
        console.log(err)
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
