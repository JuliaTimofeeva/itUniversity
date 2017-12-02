import { Component, OnInit } from '@angular/core';
import {LSService} from '../LSService';
import {UsersService} from "../services/users.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-wall-page',
  templateUrl: './wall-page.component.html',
  styleUrls: ['./wall-page.component.css'],
  providers: [LSService]
})
export class WallPageComponent implements OnInit {

  post: string;
  posts = [];


  name: string;
  surname: string;
  nickname: string;
  avatar: string;
  sex: string;
  city: string;
  birthdate: Date;
  constructor(private ls:LSService,
              private userService: UsersService) { }

  ngOnInit() {
    var posts = JSON.parse(this.ls.getItemFromLS('record'));
    if(posts!=null) {
      for (var i = 0; i < posts.item.length; i++) {
        this.posts.push({name: posts.item[i].name});
      }
    }



    let user: User;
    user = this.userService.getcurrentUser();

    this.name = user.name;
    this.surname = user.surname;
    if (user.nickname != null){
      this.nickname = user.nickname;
    }
    if (user.birthdate != null){
      this.birthdate = user.birthdate;
    }
    if (user.city != null){
      this.nickname = user.city;
    }
    if (user.sex != null){
      this.sex = user.sex;
    }
    if (user.avatar != null){
      this.avatar = user.avatar;
    }
    if (user.city != null){
      this.city = user.city;
    }
  }


  onClick(){
    this.posts.push({name: this.post});
    this.ls.setItemToLS('record','{"item":'+JSON.stringify(this.posts)+'}');
  }
}
