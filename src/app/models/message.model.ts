export class Message{

  id: number;
  text: string;
  sender: string; //email
  receiver: string;
  time: any;


  constructor(text: string, sender: string, receiver: string, id?: number, time?: any) {
    this.id = id;
    this.text = text;
    this.sender = sender;
    this.receiver = receiver;
    this.time = time;
  }
}
