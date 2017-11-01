import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

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

  name;
  surname;
  nickname;

}
