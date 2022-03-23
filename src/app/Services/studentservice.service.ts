import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { student } from '../Models/student';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  public url : string = "http://localhost:3000/Studentdata/"
  constructor(private _http:HttpClient) { }

  getAllStudent(){
    return this._http.get(this.url);
  }
  getUserById(id:number)
  {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.get(this.url+id);
  }
  deleteStudet(id: number)
   {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.delete(this.url + id ,{headers:x});
  }
  addStudent(item:student)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
  updateStudent(item:student,id:any)
  {
    //console.log(item.id);
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.url+id, body, { headers: head });
  }
}
