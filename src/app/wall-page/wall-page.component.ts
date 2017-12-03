import { Component, OnInit } from '@angular/core';
import {LSService} from '../LSService';
import {UsersService} from "../services/users.service";
import {User} from "../models/user.model";
import {PostsService} from "../services/posts.service";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-wall-page',
  templateUrl: './wall-page.component.html',
  styleUrls: ['./wall-page.component.css'],
  providers: [LSService]
})
export class WallPageComponent implements OnInit {

  post: string;
  posts = [];


  name: string;
  surname: string;
  nickname: string;
  avatar: string;
  sex: string;
  city: string;
  birthdate: Date;
  constructor(private userService: UsersService,
              private postService: PostsService) { }

  ngOnInit() {
    let user: User;
    user = this.userService.getcurrentUser();

    this.name = user.name;
    this.surname = user.surname;
    if (user.nickname != null){
      this.nickname = user.nickname;
    }
    if (user.birthdate != null){
      this.birthdate = user.birthdate;
    }
    if (user.city != null){
      this.city = user.city;
    }
    if (user.sex != null){
      this.sex = user.sex;
    }
    if (user.avatar != null){
      this.avatar = user.avatar;
    }
    if (user.city != null){
      this.city = user.city;
    }

    this.postService.getWall(user.email).subscribe(
      (posts : Post[]) => {
        if (posts != null) {
          this.posts = posts;
          ;
        }
      }
    );
  }

  onClick(){
    const post = new Post(this.post, this.userService.getcurrentUser().email);
    this.posts.unshift(post);
    this.postService.sendPost(post).subscribe(
      (str : string) => {
        console.log(str);
      }
    );
    this.post = "";
  }
}
