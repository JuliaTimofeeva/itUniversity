import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css'],
  providers:[UsersService]
})
export class PeoplePageComponent implements OnInit {

  people: string;
  listPeople = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    console.log('test');
    console.log(this.userService.getAllUsers().subscribe(
      (users : User[]) => {
       this.people = JSON.stringify(users);
        if (users != null){
          this.listPeople = users;
          // for(var i=0;i<users.length;i++){
          //   // console.log(this.listPeople[i] ='Email:'+users[i].email+' '+'Name:'+ users[i].name);
          //   console.log(this.listPeople[i] ='Email:'+users[i].email+' '+'Name:'+ users[i].name);
          // }

        }

      }
    )
    );
  }

}
