import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../auth/auth.sevice";
import {Router} from "@angular/router";
import {$} from "protractor";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(/**/private usersService: UsersService/**/,
              private authService: AuthService,
              private router: Router) {
  }

  hd = "header";

  ngOnInit() {
    window.onscroll = function() {
      var y = window.scrollY;
      if(y>10) {
        document.getElementById('hd').className = "header small";
      }else if(y<10){
        document.getElementById('hd').className = "header";
      }
    }
  }


  isTheCurrentUser() {
    //console.log(this.usersService.getcurrentUser());
    return this.usersService.getcurrentUser();
  }

  onLogout() {
    // window.sessionStorage.clear();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
