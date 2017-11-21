import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {User} from "./user.module";



@Injectable()
export class UsersService {

  constructor(private http: Http) {}



  /***/

  getcurrentUser(): User {
    return JSON.parse(window.sessionStorage.getItem('currentUser'));
    //return this._currentUser;
  }

  setcurrentUser(value: User) {
    window.sessionStorage.setItem('currentUser',JSON.stringify(value));
    //this._currentUser = value;
  }

  //private _currentUser: User;

  /***/

  // responseLogging(response){
  //   // console.log(response.text() == "" ? JSON.stringify({}) : response.json());
  //   console.log('123');
  //   console.log(JSON.stringify({}));
  //   console.log('123');
  //
  //   return response.json();
  // }

  getUserByEmail(email: string): Observable<User>{
    return this.http.get(`http://localhost:9000/users/getByEmail/${email}`)
      .map((response: Response) => response.json())
      .map((user: User[]) => user[0] ? user[0] : undefined);
  }

  createNewUser(user: User): Observable<User>{
    return this.http.post('http://localhost:9000/users/create', user)
      .map((response: Response) => response.json());

  }

}
