import {Component, Input, OnInit} from '@angular/core';
import {MessagesService} from "../services/messages.service";
import {UsersService} from "../services/users.service";
import {Message} from "../models/message.model";

@Component({
  selector: 'app-message-row',
  templateUrl: './message-row.component.html',
  styleUrls: ['./message-row.component.css']
})
export class MessageRowComponent implements OnInit {

  constructor(private messageService: MessagesService,
              private userService: UsersService) {
  }

  @Input() chatUser;


  ngOnInit() {
    // this.message = this.userService.getUserByEmail(JSON.parse(message.sender));
  }

  chatUserIsNoCurrentUser(){
    return this.userService.getcurrentUser().email != this.chatUser.email;
  }


  onOpenClick(){

    this.messageService.setcurrentChatUser(this.chatUser);


    // let receiver;
    // receiver = this.message;
    // console.log('????????????????????????');
    // console.log(this.message);
    // console.log(receiver.email);
  }
}
