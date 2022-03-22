import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentserviceService } from 'src/app/Services/studentservice.service';
import { student } from 'src/app/Models/student';
import { MatFormFieldModule,MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  displayedColumns:string[]=['firstname','emailid','course','Action'];
  studentarr:any[]=[];
  deletestudentarr:number[]=[];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private _data:StudentserviceService,private _router:Router) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit(): void {
    this.dataSource.paginator=this.paginator;
    this._data.getAllStudent().subscribe(
      (data:any)=>{

            this.studentarr=data;
            this.dataSource=new MatTableDataSource(data);
            console.log(this.dataSource.data);
            this.dataSource.sort=this.sort;
            console.log(this.dataSource.data);
      }
    );
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(row:any)
  {
    let x:number = this.studentarr.indexOf(row);
    console.log(x);
    if(confirm("ARE YOU SURE YOU WANT TO DELETE ?"))
    {
      this._data.deleteUser(row.id).subscribe(
        (data:any)=>{
          this.studentarr.splice(this.studentarr.indexOf(row),1);
          this.dataSource.data=this.studentarr;
          //this._router.navigate(['nav/user/']);
        }
      );
    }
  }

  onAddClick()
  {
    //this._router.navigate(['/nav/userAdd']);
  }
  onEdit(row:any)
  {
    //this._router.navigate(['/nav/userEdit/'+row.user_id]);
  }
  onViewMore(row:any)
  {
    //this._router.navigate(['/nav/userViewmore/'+row.user_id]);
  }

  
}

