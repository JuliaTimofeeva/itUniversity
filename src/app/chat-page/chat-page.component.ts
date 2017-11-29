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
    let receiver;
    receiver = this.message;

    console.log('111111111111111111111111111'+ receiver);


    console.log(this.messagesService.getMessagesBySenderReceiver(
      this.usersService.getcurrentUser().email,
      // "test@test.ru"
      this.messagesService.getcurrentChatUser().email
      // receiver
      // this.listMessages[0].receiver
      ).subscribe(
      (messages : Message[]) => {
        //this.message = JSON.stringify(message);
        // debugger
        if (messages != null) {
          this.listMessages = messages
          ;
        }
      }
      )
    );
  }





}
