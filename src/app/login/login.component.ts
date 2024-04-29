import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
 

  constructor(private userService: UserService,private router:Router) { }
  signin() {
    const loginRequest: any = {
      email: this.email,
      password: this.password
    };
    console.log(loginRequest)

    this.userService.signin(loginRequest).subscribe(
      response => {
      
        console.log('Signin successful:', response);
        this.userService.storeTokenAndRole(response.token);
        
       
        const role = this.userService.getRole();
        if (role === 'Student') {
          //this.router.navigate(['/student-dashboard']);
          console.log("student dashboard")
          this.router.navigate(['/front']);
          
        } else if (role === 'Investor') {
         // this.router.navigate(['/investor-dashboard']);
         console.log("invesoer dashboard")
         this.router.navigate(['/front']);
        } 
        else if (role === 'ADMIN') {
          console.log("admin dashboard")
          this.router.navigate(['/admin']);
        } 
        else if (role === 'Former') {
          console.log("former dashboard")
         // this.router.navigate(['/former-dashboard']);
         this.router.navigate(['/front']);
        } else {
          this.router.navigate(['/login']);
          
        }
       
      },
      error => {
       
        console.error('Signin failed:', error);
      }
    );
  }

}
