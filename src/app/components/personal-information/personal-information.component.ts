import { Component, OnInit} from '@angular/core';
import {LSService} from '../../LSService';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  providers: [LSService]
})
export class PersonalInformationComponent implements OnInit {

  constructor(private ls:LSService) { }


  ngOnInit() {
    var name = this.ls.getItemFromLS('name');
    var surname = this.ls.getItemFromLS('surname');
    var nickname = this.ls.getItemFromLS('nickname');
    var avatar = this.ls.getItemFromLS('photo');

    this.avatar = avatar;
    if (name != null){
      this.name = name;
    }
    if (surname != null){
      this.surname = surname;
    }
    if (nickname != null){
      this.nickname = nickname;
    }
  }

  name;
  surname;
  nickname;
  avatar;

}
