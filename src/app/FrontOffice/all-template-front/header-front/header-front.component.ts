import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.css']
})
export class HeaderFrontComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private userService:UserService)
  {

  }
  ngOnInit(): void {
    if(!this.userService.getToken())
      {
        this.isLoggedIn = true;

      }
      else {
        this.isLoggedIn = false;

      }
     
    console.log("this is from storage ",this.isLoggedIn)
    
    this.userService.loggedIn.subscribe((loggedIn: boolean) => {
      console.log('isLoggedIn:', loggedIn); // Debugging
      this.isLoggedIn = loggedIn; // Update isLoggedIn based on the emitted value
    });
    
  }
  logout() {
    this.userService.logout();
    console.log("this the value after i logout out ",this.isLoggedIn)
    
    
  }

}
