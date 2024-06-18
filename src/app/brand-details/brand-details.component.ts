import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit{
  productId:any;
  brandDetails:any;
  constructor(private _BrandsService: BrandsService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({ next: (res) => { this.productId = res.get('id'); } })
    this.getPoductDtails(this.productId);
  }

  getPoductDtails(id:string){
    this._BrandsService.getBrandDetails(id).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.brandDetails=res.data;
      },error:(err)=>{
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

