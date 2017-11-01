import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.css']
})
export class SettingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var name = localStorage.getItem('name');
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
    localStorage.setItem('name', this.name);
    localStorage.setItem('surname', this.surname);
    localStorage.setItem('nickname', this.nickname);
    console.log(this.name);

  }

  name;
  surname;
  nickname;

}
