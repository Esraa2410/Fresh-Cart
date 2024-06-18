import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any;
  searchTerm:string='';
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this.getAllCategories()
    
  }

  getAllCategories(){
    this._ProductsService.getCategories().subscribe({
      next:(res)=>{
       // console.log(res.data);
        this.categories=res.data;
      },error:(err)=>{
       // console.log(err)
      }
    })
  }



}
