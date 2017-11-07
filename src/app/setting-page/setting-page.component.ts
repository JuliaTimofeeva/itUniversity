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

  constructor(private ls:LSService) { }

  ngOnInit() {
    var name = this.ls.getItemFromLS('name');
    var surname = this.ls.getItemFromLS('surname');
    var nickname = this.ls.getItemFromLS('nickname');
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
  }

  // getBase64Image(img) {
  //   var canvas = document.createElement("canvas");
  //   canvas.width = img.width;
  //   canvas.height = img.height;
  //
  //   var ctx = canvas.getContext("2d");
  //   ctx.drawImage(img, 0, 0);
  //
  //   var dataURL = canvas.toDataURL("image/png");
  //
  //   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  // }
  //
  // onSaveImg(){
  //   var input = document.getElementById("filein");
  //   debugger;
  //   console.log(input.getAttribute('files')[0]);
  //   // var imgData = this.getBase64Image(input.getAttribute('files')[0]);
  //   // localStorage.setItem("imgData", imgData);
  // }

}
