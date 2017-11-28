import { Component, OnInit, Input } from '@angular/core';
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

  onWriteClick(){
    let user;
    user = this.people;
    console.log(this.people);
    console.log(user.name);
  //  alert("hi, "+this.people.name);
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

  }


  ngOnInit() {
  }

}
