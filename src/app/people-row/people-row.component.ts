import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people-row',
  templateUrl: './people-row.component.html',
  styleUrls: ['./people-row.component.css']
})
export class PeopleRowComponent implements OnInit {

  @Input() people;

  onClick(){
    console.log(this.people);
  }

  constructor() { }

  ngOnInit() {
  }

}
