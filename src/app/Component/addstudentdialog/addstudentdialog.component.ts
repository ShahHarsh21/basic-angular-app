import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, FormControl } from '@angular/forms';
import { StudentserviceService } from '../../Services/studentservice.service';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addstudentdialog',
  templateUrl: './addstudentdialog.component.html',
  styleUrls: ['./addstudentdialog.component.css']
})
export class AddstudentdialogComponent implements OnInit {

  student!:FormGroup;
  actionBtn : string="Submit"

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
      this.actionBtn="Update";
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

  // onStudentAdd()
  // {

  //   let studentobj = {
  //     firstname : this.student.value.firstname,
  //     lastname : this.student.value.lastname,
  //     address : this.student.value.address,
  //     gender : this.student.value.gender,
  //     state : this.student.value.state,
  //     city : this.student.value.city,
  //     pincode : this.student.value.pincode,
  //     course : this.student.value.course,
  //     emailid : this.student.value.emailid,
  //     password : this.student.value.password};


  //   this._data.addStudent(this.student.value).subscribe(
  //     data=>{
  //       alert("added");
        
  //     }
  //   );
  // }

  onStudentAdd(){
    if(!this.editData){
      if(this.student.valid){
        this._data.addStudent(this.student.value)
        .subscribe({
          next:(res)=>{
            alert("Employee added successfully")
            this.student.reset();
            //this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding the employee")
          }
        })
      }
    }else{
      this.onStudentEdit()
    }
  }

  onStudentEdit(){
    //console.log();
    this._data.updateStudent(this.student.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Employee updated successfully");
        this.student.reset();
        //this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record!");
      }
    })
  }

}
