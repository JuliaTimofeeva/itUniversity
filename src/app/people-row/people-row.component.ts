import {Component, OnInit, Input, NgModule} from '@angular/core';
import {User} from "../models/user.model";
import {Message} from "../models/message.model";
import {MessagesService} from "../services/messages.service";
import {UsersService} from "../services/users.service";

import {MatButtonModule, MatCheckboxModule, MatList} from '@angular/material';

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

  onWriteClick(){
    let user;
    user = this.people;
    console.log(this.people);
    console.log(user.name);
   document.getElementById(this.people.email).style.display = 'block';
   document.getElementById("btn-send").style.display = 'none';
  }
  onCancelClick(){
    document.getElementById(this.people.email).style.display = 'none';
    document.getElementById("btn-send").style.display = 'block';
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
    document.getElementById("btn-send").style.display = 'block';
    document.getElementById("win").style.display = 'block';

    window.setTimeout(()=>{
      document.getElementById("win").style.display = 'none';
        }, 3000);
  }


  ngOnInit() {
  }

}
