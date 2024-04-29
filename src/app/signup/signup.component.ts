import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  constructor(private userService:UserService,private router:Router)
  {

  }
  submit(signupForm: any) {
    if (signupForm.valid) {
      const signUpRequest: any = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        role: this.role
      };
      this.userService.signup(signUpRequest).subscribe((res:any)=>{
        console.log('Signup successful:', res);
        this.router.navigate(['/login']);

      },error =>{
        console.error('Signup failed:', error);
      })
   
      
    
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

}
