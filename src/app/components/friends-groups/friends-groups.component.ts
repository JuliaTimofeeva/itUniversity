import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-friends-groups',
  templateUrl: './friends-groups.component.html',
  styleUrls: ['./friends-groups.component.css']
})
export class FriendsGroupsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() nameColumn;

}
