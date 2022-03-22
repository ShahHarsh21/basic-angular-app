import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { StudentdetailsComponent } from './Component/studentdetails/studentdetails.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule,MatFormField } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
