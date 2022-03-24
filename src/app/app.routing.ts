import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdetailsComponent } from './Component/studentdetails/studentdetails.component';
import { NavbarComponent} from './Component/navbar/navbar.component'
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { AuthguardService} from './Services/authguard.service'

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'nav',canActivate:[AuthguardService],component:NavbarComponent,children:[
    {path:'student',component:StudentdetailsComponent}
  ]},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
