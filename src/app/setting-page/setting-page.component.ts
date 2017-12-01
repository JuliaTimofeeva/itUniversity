import { Component, OnInit, Input } from '@angular/core';
import {LSService} from "../LSService";
import {UsersService} from "../services/users.service";
import {DatePickerComponent} from "ngx-bootstrap";
import {User} from "../models/user.model";


@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.css'],
  providers: [LSService]
})
export class SettingPageComponent implements OnInit {

  name: string;
  surname: string;
  nickname: string;
  sex: string;
  birthdate: Date;
  avatar;
  city: string;

  constructor(private ls:LSService,
  private userService: UsersService) { }

  ngOnInit() {
    let currentUser: User;
    currentUser = this.userService.getcurrentUser();

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
      this.city  = user.city;
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
  onSave() {
    let currentUser: User;
    currentUser = this.userService.getcurrentUser();
    const user = new User(currentUser.email, currentUser.password, this.name, this.surname,
      this.nickname, this.avatar, this.city, this.sex, this.birthdate, currentUser.id);
    this.userService.setcurrentUser(user);
    this.userService.updateUser(user).subscribe();

    console.log(this.sex);
    console.log(this.birthdate);
    console.log(this.city);
    console.log(this.nickname);
  }

  fileChange(event){

    let fileList: FileList = event.target.files;
    var reader = new FileReader();
    if(fileList.length > 0) {
      let file: File = fileList[0];

      reader.readAsDataURL(file);
      reader.onload = (function () {
        var readURL = reader.result; //строковое представление картинки
        this.avatar = readURL;
      }).bind(this);

    }
  };
}
