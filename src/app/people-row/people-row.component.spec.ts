import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleRowComponent } from './people-row.component';

describe('PeopleRowComponent', () => {
  let component: PeopleRowComponent;
  let fixture: ComponentFixture<PeopleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
