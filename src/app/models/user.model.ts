export class User{

  id: number;
  password: string;
  name: string;
  email: string;
  surname: string;

  constructor(email: string, password: string, name: string, surname: string, id?: number){
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.surname = surname;
  }
}
