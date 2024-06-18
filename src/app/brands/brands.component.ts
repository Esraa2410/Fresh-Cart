import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  brandsList:any;
  constructor(private _BrandsService:BrandsService){}
  ngOnInit(): void {
    this.getAllBrands()
    
  }

  getAllBrands(){
    this._BrandsService.getAllBrands().subscribe({
      next:(res)=>{
       // console.log(res.data)
        this.brandsList=res.data;
      },error:(err)=>{
      //  console.log(err)
      }
    })
  }

  getBrandDetails(id:string){
    this._BrandsService.getBrandDetails(id).subscribe({
      next:(res)=>{
      //  console.log(res.data)
        
      },error:(err)=>{
       // console.log(err)
      }

    })
  }

}
