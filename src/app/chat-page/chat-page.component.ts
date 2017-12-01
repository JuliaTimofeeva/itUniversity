import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../models/message.model";
import {MessagesService} from "../services/messages.service";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(
    private messagesService: MessagesService,
    private  usersService: UsersService) { }

  message: string; //people
  listMessages = []; //listPeople
  // @Input() message;

  ngOnInit() {

    console.log(this.messagesService.getMessagesBySenderReceiver(
      this.usersService.getcurrentUser().email,
      // "test@test.ru"
      this.messagesService.getcurrentChatUser().email
      ).subscribe(
      (messages : Message[]) => {
        if (messages != null) {
          this.listMessages = messages
          ;
        }
      }
      )
    );
  }





}