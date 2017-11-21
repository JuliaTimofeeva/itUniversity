export class User{

  id: number;
  password: string;
  name: string;
  email: string;

  constructor(email: string, password: string, name: string, id?: number){
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
