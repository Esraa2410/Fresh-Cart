import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  numOfCartItems: number = 0;
  constructor(public dialog: MatDialog, private _AuthService: AuthService, private _CartService: CartService) { }

  ngOnInit(): void {
    this.getNumOfCartItems()
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    })

  }

  getNumOfCartItems() {
    this._CartService.numOfCartItems.subscribe({
      next: (res) => {
        //console.log(res) ;
        this.numOfCartItems = res
      }
    })
  }

  handleLogOut() {
    this._AuthService.logOut();
  }

  openChangePassDailog() {
    this.dialog.open(ChangePasswordComponent, {
      width: '550px',
      height:'350px',
    
    });
  }



  openProfile() {
    this.dialog.open(ProfileComponent , {
      width: '550px',
      height:'350px',
    
    });

  }
}
