import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {User} from "./user.module";



@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  responseLogging(response){
    console.log(response);
    return response;
  }

  getUserByEmail(email: string): Observable<User>{
    return this.http.get(`http://localhost:9000/users/getByEmail/${email}`)
      .map((response: Response) => this.responseLogging(response.json()))
      .map((user: User) => user ? user : undefined);
  }

  createNewUser(user: User): Observable<User>{
    return this.http.post('http://localhost:9000/users/create', user)
      .map((response: Response) => response.json());

  }

}
