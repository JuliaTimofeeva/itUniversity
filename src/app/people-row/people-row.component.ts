import {Component, OnInit, Input, NgModule} from '@angular/core';
import {User} from "../models/user.model";
import {Message} from "../models/message.model";
import {MessagesService} from "../services/messages.service";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-people-row',
  templateUrl: './people-row.component.html',
  styleUrls: ['./people-row.component.css']
})
export class PeopleRowComponent implements OnInit {

  constructor(
    private messagesService: MessagesService,
    private usersService: UsersService
  ) { }

  @Input() people;

  text : string;
  writeBtnShow;

  onWriteClick(){
    let user;
    user = this.people;
    console.log(this.people);
    console.log(user.name);
   document.getElementById(this.people.email).style.display = 'block';
   this.writeBtnShow = false;
  }
  onCancelClick(){
    this.writeBtnShow = true;
    document.getElementById(this.people.email).style.display = 'none';
  }

  routerLinkClick(){
    this.usersService.setPeopleToView(this.people);
  }

  onSendClick(){

    const message = new Message(this.text, this.usersService.getcurrentUser().email, this.people.email);
    console.log(message);
    let str = this.messagesService.sendMessage(message).subscribe(
      (str : string) => {
        console.log(str);
      }
    );

    document.getElementById(this.people.email).style.display = "none";
    this.text = "";
    this.writeBtnShow = true;
    document.getElementById("win").style.display = 'block';

    window.setTimeout(()=>{
      document.getElementById("win").style.display = 'none';
        }, 3000);
  }


  ngOnInit() {
    this.writeBtnShow = true;
  }
  chatUserIsNoCurrentUser(){
    return this.usersService.getcurrentUser().email != this.people.email;
  }
}
