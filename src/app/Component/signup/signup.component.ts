import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentserviceService } from '../../Services/studentservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform!:FormGroup;

  constructor(private formBuilder : FormBuilder,private _data:StudentserviceService,private _router:Router) { }

  ngOnInit(): void {
    this.signupform = new FormGroup({
      firstname : new FormControl('',[Validators.required,Validators.minLength(5)]),
      lastname : new FormControl(),
      address : new FormControl(),
      gender :new FormControl (),
      state :new FormControl (),
      city : new FormControl(),
      pincode :new FormControl (),
      course : new FormControl('',[Validators.required]),
      emailid:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9]{8,15}$")])
    });
  }

  onsignup(){
    console.log(this.signupform.value);
    this._data.addStudent(this.signupform.value).subscribe((data:any)=>{
      alert("Sign Up Successfully Please Login");
      this._router.navigate(['/']);
    })
  }

}
