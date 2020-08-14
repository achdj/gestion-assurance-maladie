import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersformeComponent } from './usersforme.component';

describe('UsersformeComponent', () => {
  let component: UsersformeComponent;
  let fixture: ComponentFixture<UsersformeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersformeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
