import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type User ={
  name: String;
  email: String;
  admin : boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  loggedPerson: string

  constructor(public http: HttpClient) {}

  fetchUsers() {
    this.http.get<any[]>('http://localhost:8000/api/users')
      .subscribe((r: any[]) =>this.users = r);
  }

  loggedIn(name) {
    console.log(name);
    this.loggedPerson = name;
  }

  isLoggedIn(){
    if(this.loggedPerson !== undefined){
      return true
    }
    else return false;
  }

}
