import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users/users.service";
import {User} from "../users/user.module";

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
          for(var i=0;i<users.length;i++){
            console.log(this.listPeople[i] ='Email:'+users[i].email+' '+'Name:'+ users[i].name);
          }
        }

      }
    )
    );
  }

}
