import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username!:any;
  role!:any;
  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("emailid");
    console.log(this.username);
  }
  logout(){
    localStorage.clear();
    this._router.navigate(['']);
  }

}
