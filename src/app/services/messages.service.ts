import { Http, Response } from '@angular/http';
import {Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {User} from "../models/user.model";
import {Message} from "../models/message.model";



@Injectable()
export class MessagesService {

  constructor(private http: Http) {}

  getcurrentChatUser(): User {
    return JSON.parse(window.sessionStorage.getItem('currentChatUser'));
  }

  setcurrentChatUser(value: User) {
    window.sessionStorage.setItem('currentChatUser',JSON.stringify(value));
  }


  sendMessage(message: Message): Observable<string>{
    return this.http.post('http://localhost:9000/messages/send', message)
       .map((response: Response) => response.toString())
  }

  ///????????
  getMessagesBySender(sender: string): Observable<Message[]> {
    console.log(sender);
    return this.http.get(`http://localhost:9000/messages/getMessagesBySender/${sender}`)
      .map((response: Response) => response.json());
  }

  getMessagesBySenderReceiver(sender: string, receiver: string): Observable<Message[]> {
    console.log(sender);
    return this.http.get(`http://localhost:9000/messages/getMessagesBySenderReceiver/${sender}/${receiver}`)
      .map((response: Response) => response.json());
  }

  getAllChatUsersWithSender(sender: string): Observable<User[]> {
    console.log(sender);
    return this.http.get(`http://localhost:9000/messages/getAllChatUsersWithSender/${sender}`)
      .map((response: Response) => response.json());
  }


  //todo запрос на получение всех сообщений переписки
}
