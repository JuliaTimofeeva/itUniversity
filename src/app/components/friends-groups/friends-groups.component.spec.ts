import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsGroupsComponent } from './friends-groups.component';

describe('FriendsGroupsComponent', () => {
  let component: FriendsGroupsComponent;
  let fixture: ComponentFixture<FriendsGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
