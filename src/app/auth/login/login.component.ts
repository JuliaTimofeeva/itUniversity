import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../users/users.service";
import {User} from "../../users/user.module";
import {Message} from "./message.module";
import {AuthService} from "../auth.sevice";
import {ActivatedRoute, Params, Router} from "@angular/router";

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.message =new Message('danger','');
    this.route.queryParams.subscribe((params: Params)=>{
      if(params['nowCanLogin']){
        this.showMessage({text:"Теперь вы можете зайти в систему",type:'success'})
      }
    });

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage( message: Message){
    this.message = message;
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
             this.router.navigate(['/wall-page']);
          }else{
            this.showMessage({
              text:"Неверный пароль",
              type: 'danger'
            })
          }
        }else{
          this.showMessage({
            text:"Такого пользователя не существует",
            type: 'danger'
          });
        }
      });





}

}
