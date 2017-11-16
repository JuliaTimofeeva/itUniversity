import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../users/users.service";
import {User} from "../../users/user.module";
import {Message} from "./message.module";
import {AuthService} from "../auth.sevice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.message =new Message('danger','');
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage( text: string, type: string = 'danger'){
    this.message = new Message(type, text);
    window.setTimeout(()=>{
      this.message.text = '';

      }, 5000);
}
  onSubmit(){

    console.log(this.form);
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User)=>{
        console.log(user);
        if(user){
          if(user.password === formData.password){
            this.message.text = '';
            window.localStorage.setItem('user',JSON.stringify(user));
            //logic
            this.authService.login();
            // this.router.navigate(['']);
          }else{
            this.showMessage("Неверный пароль")
          }
        }else{
          this.showMessage("Такого пользователя не существует");
        }
      });





}

}
