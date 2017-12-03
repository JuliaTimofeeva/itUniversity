import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {User} from "../models/user.model";
import {PostsService} from "../services/posts.service";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(private userService: UsersService,
  private postService: PostsService ) { }

  peopleToView : User;

  name: string;
  surname: string;
  nickname: string;
  avatar: string;
  sex: string;
  city: string;
  birthdate: Date;
  post: string;
  posts = [];

  ngOnInit() {

    this.peopleToView = this.userService.getPeopleToView();

    this.name = this.peopleToView.name;
    this.surname = this.peopleToView.surname;
    if (this.peopleToView.nickname!= null) {
      this.nickname = this.peopleToView.nickname;
    }
    if (this.peopleToView.avatar!= null) {
      this.avatar = this.peopleToView.avatar;
    }
    if (this.peopleToView.sex!= null) {
      this.sex = this.peopleToView.sex;
    }
    if (this.peopleToView.city!= null) {
      this.city = this.peopleToView.city;
    }
    if (this.peopleToView.birthdate!= null) {
      this.birthdate = this.peopleToView.birthdate;
    }

    this.postService.getWall(this.peopleToView.email).subscribe(
      (posts : Post[]) => {
        if (posts != null) {
          this.posts = posts;
          ;
        }
      }
    );

  }

}
