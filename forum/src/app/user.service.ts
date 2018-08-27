import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type User ={
  id: number;
  name: string;
  email: string;
  admin : boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]=[];
  loggedPerson: User;

  constructor(public http: HttpClient) {}

  fetchUsers() {
    this.http.get<any[]>('http://localhost:8000/api/users')
      .subscribe((r: any[]) =>this.users = r);
  }

  loggedIn(user:User) {
    console.log(user.name + " rep1");
    this.loggedPerson = user;
  }

  isLoggedIn(){
    if(this.loggedPerson !== undefined){
      return true
    }
    else return false;
  }

}
