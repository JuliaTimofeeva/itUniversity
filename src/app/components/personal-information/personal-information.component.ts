import { Component, OnInit} from '@angular/core';
import {LSService} from '../../LSService';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/user.model";
import {Data} from "@angular/router";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  providers: []
})
export class PersonalInformationComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  name: string;
  surname: string;
  nickname: string;
  avatar: string;
  sex: string;
  city: string;
  birthdate: Date;

  ngOnInit() {
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

}
