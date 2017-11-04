import { Component, OnInit, Input } from '@angular/core';
import {LSService} from "./LSService";

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.css'],
  providers: [LSService]
})
export class SettingPageComponent implements OnInit {

  constructor(private ls:LSService) { }

  ngOnInit() {
    var name = this.ls.getItemFromLS('name');
    var surname = localStorage.getItem('surname');
    var nickname = localStorage.getItem('nickname');
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
  onSave() {
    this.ls.setItemToLS('name', this.name);
    localStorage.setItem('surname', this.surname);
    localStorage.setItem('nickname', this.nickname);
    console.log(this.name);

  }

  name;
  surname;
  nickname;

}
