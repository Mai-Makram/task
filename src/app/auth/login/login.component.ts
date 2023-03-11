import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private fb:FormBuilder,private authService:AuthService,private router:Router){}

  //--logIn and save token in localStorage and if user have token , navigate to Home Page--

  login(data:any){
    console.log(data)
    this.authService.logIn(data).subscribe({
      next:(res:any)=>{
        console.log(res)
       localStorage.setItem('token',res.token) 
       this.router.navigateByUrl('view/home')
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }
  
}
