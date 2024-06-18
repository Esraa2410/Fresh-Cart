import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit{
  allOrders:any;
  constructor(private _CartService:CartService){}
  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders(){
    this._CartService.getAllOrders().subscribe({
      next:(res)=>{
       console.log(res.data);
      },error:(err)=>{
        console.log(err)
      }
    })
  }

}
