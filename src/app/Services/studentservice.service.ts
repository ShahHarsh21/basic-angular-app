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
  deleteUser(id: number)
   {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.delete(this.url + id ,{headers:x});
  }
  addUser(item:student)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
  updateUser(item:student)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.url+item.id, body, { headers: head });
  }
}
