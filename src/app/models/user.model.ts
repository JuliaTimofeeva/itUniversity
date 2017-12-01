export class User{

  id: number;
  password: string;
  name: string;
  email: string;
  surname: string;
  avatar: string;
  sex: string;
  birthdate: Date;
  nickname: string;
  city: string;

  // constructor(email: string, password: string, name: string, surname: string, id?: number){
  //   this.id = id;
  //   this.name = name;
  //   this.email = email;
  //   this.password = password;
  //   this.surname = surname;
  // }


  constructor(email: string, password: string, name: string, surname: string, nickname?: string, avatar?: string, city?: string, sex?: string, birthdate?: Date, id?: number) {
    this.id = id;
    this.password = password;
    this.name = name;
    this.email = email;
    this.surname = surname;
    this.avatar = avatar;
    this.sex = sex;
    this.birthdate = birthdate;
    this.nickname = nickname;
    this.city = city;
  }
}
