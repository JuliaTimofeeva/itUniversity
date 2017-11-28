import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../services/messages.service";
import {UsersService} from "../services/users.service";
import {Message} from "../models/message.model";
import {forEach} from "@angular/router/src/utils/collection";
import {User} from "../models/user.model";
import {combineAll} from "rxjs/operator/combineAll";

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent implements OnInit {

  constructor(
    private messagesService: MessagesService,
    private usersService: UsersService
  ) { }

  message: string; //people
  listMessages = []; //listPeople
  listUser: any;

  ngOnInit() {


    console.log("hi");

    console.log(this.messagesService.getAllChatUsersWithSender(
      this.usersService.getcurrentUser().email).subscribe(
      (message : Message[]) => {
       this.message = JSON.stringify(message);
        if (message != null) {
          this.listMessages = message;

        }
      }

      )
    );


  }

    ///////////
//     console.log("tyt");
//     console.log(this.messagesService.(this.usersService.getcurrentUser().email).subscribe(
//       (users : Message[]) => {
//         this.people = JSON.stringify(users);
//         if (users != null){
//           this.listPeople = users;
//
//
//   }
//
// }));
  }

