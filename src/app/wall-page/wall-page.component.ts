import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall-page',
  templateUrl: './wall-page.component.html',
  styleUrls: ['./wall-page.component.css']
})
export class WallPageComponent implements OnInit {

  post: string;
  posts = [];

  onClick(){
    this.posts.push({name: this.post});
    this.post = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
