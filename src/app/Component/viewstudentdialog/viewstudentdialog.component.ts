import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, FormControl } from '@angular/forms';
import { StudentserviceService } from '../../Services/studentservice.service';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewstudentdialog',
  templateUrl: './viewstudentdialog.component.html',
  styleUrls: ['./viewstudentdialog.component.css']
})
export class ViewstudentdialogComponent implements OnInit {

  student!:FormGroup;

  constructor(private formBuilder : FormBuilder,private _data:StudentserviceService,private _router:Router,private dialog : MatDialog,@Inject(MAT_DIALOG_DATA) public editData :any) { }

  ngOnInit(): void {
    this.student = this.formBuilder.group({
      firstname : [],
      lastname : [],
      address : [],
      gender : [],
      state : [],
      city : [],
      pincode : [],
      course : [],
      emailid : [],
      password : []
    });

    if(this.editData){
      //this.actionBtn="Update";
      //console.log(this.editData.id);
      this.student.controls['firstname'].setValue(this.editData.firstname);
      this.student.controls['lastname'].setValue(this.editData.lastname);
      this.student.controls['address'].setValue(this.editData.address);
      this.student.controls['gender'].setValue(this.editData.gender);
      this.student.controls['state'].setValue(this.editData.state);
      this.student.controls['city'].setValue(this.editData.city);
      this.student.controls['pincode'].setValue(this.editData.pincode);
      this.student.controls['course'].setValue(this.editData.course);
      this.student.controls['emailid'].setValue(this.editData.emailid);
      this.student.controls['password'].setValue(this.editData.password);
    }
  }

}
