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

  listChatUsers = []; //listPeople

  ngOnInit() {


    console.log(this.messagesService.getAllChatUsersWithSender(
      this.usersService.getcurrentUser().email).subscribe(
      (chatUsers : User[]) => {
        if (chatUsers != null) {
          this.listChatUsers = chatUsers;

        }
      }

      )
    );


  }
  }

