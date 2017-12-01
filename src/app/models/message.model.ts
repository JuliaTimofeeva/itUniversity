export class Message{

  id: number;
  text: string;
  sender: string; //email
  receiver: string;
  time: any;
  nickname: string;


  constructor(text: string, sender: string, receiver: string, id?: number, time?: any, nickname?: string) {
    this.id = id;
    this.text = text;
    this.sender = sender;
    this.receiver = receiver;
    this.time = time;
    this.nickname = nickname;
  }
}
