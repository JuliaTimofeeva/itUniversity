import { Component, OnInit } from '@angular/core';
import {LSService} from '../LSService';

@Component({
  selector: 'app-wall-page',
  templateUrl: './wall-page.component.html',
  styleUrls: ['./wall-page.component.css'],
  providers: [LSService]
})
export class WallPageComponent implements OnInit {

  post: string;
  posts = [];

  constructor(private ls:LSService) { }

  ngOnInit() {
    var posts = JSON.parse(this.ls.getItemFromLS('record'));
    if(posts!=null) {
      for (var i = 0; i < posts.item.length; i++) {
        this.posts.push({name: posts.item[i].name});
      }
    }
  }

  onClick(){
    this.posts.push({name: this.post});
    this.ls.setItemToLS('record','{"item":'+JSON.stringify(this.posts)+'}');
  }
}
