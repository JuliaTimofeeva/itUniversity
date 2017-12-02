export class Post{

  id: number;
  text: string;
  owner: string; //email

  constructor(text: string, owner: string, id?: number) {
    this.id = id;
    this.text = text;
    this.owner = owner;
  }
}
