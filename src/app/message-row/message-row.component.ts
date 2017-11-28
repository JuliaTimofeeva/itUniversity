import {Component, Input, OnInit} from '@angular/core';
import {MessagesService} from "../services/messages.service";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-message-row',
  templateUrl: './message-row.component.html',
  styleUrls: ['./message-row.component.css']
})
export class MessageRowComponent implements OnInit {

  constructor(
    private messageService: MessagesService,
    private userService: UsersService
  ) { }
  @Input() message;

  ngOnInit() {
    // this.message = this.userService.getUserByEmail(JSON.parse(this.message.sender)).subscribe();
  }

  onOpenClick(){

  }

}
