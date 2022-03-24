import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentserviceService } from 'src/app/Services/studentservice.service';
import { student } from 'src/app/Models/student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private _router:Router,private _data:StudentserviceService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      emailid:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9]{8,15}$")])
    });
  }

  onlogin(){
    this._data.getAllStudent().subscribe((data:any)=>{
      const user = data.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password

      });
      if(user){
        alert('Login Successfull!!');
        localStorage.setItem('emailid',this.loginForm.get('emailid')?.value);
        this._router.navigate(['/nav/student'])
      }else{
        alert("User not found!!");
      }
    });
  }
}
