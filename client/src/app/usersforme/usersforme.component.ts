import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersforme',
  templateUrl: './usersforme.component.html',
  styleUrls: ['./usersforme.component.scss']
})
export class UsersformeComponent implements OnInit {

  @Input() usersName: string;
  usersStatus = 'éteint';

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.usersStatus;
  }
}
