import { Component, OnInit, Input } from '@angular/core';
import {LSService} from "../LSService";

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.css'],
  providers: [LSService]
})
export class SettingPageComponent implements OnInit {

  name;
  surname;
  nickname;
  bfn;
  avatar;

  constructor(private ls:LSService) { }

  ngOnInit() {
    var name = this.ls.getItemFromLS('name');
    var surname = this.ls.getItemFromLS('surname');
    var nickname = this.ls.getItemFromLS('nickname');
    //var avatar = this.ls.getItemFromLS('avatar');
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
    this.ls.setItemToLS('surname',this.surname);
    this.ls.setItemToLS('nickname', this.nickname);
    this.ls.setItemToLS("photo",this.avatar);

  }

  fileChange(event){

    let fileList: FileList = event.target.files;
    var reader = new FileReader();
    if(fileList.length > 0) {
      let file: File = fileList[0];

      reader.readAsDataURL(file);
      reader.onload = (function () {
        var readURL = reader.result;
        //this.bfn = readURL;
        this.ls.setItemToLS("photo",readURL);

      }).bind(this);

    }
  };
}
