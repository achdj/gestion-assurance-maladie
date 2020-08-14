import { Component, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  usersOne = 'Achille';
  usersTwo = 'Kokou';
  usersThree = 'Fabrice';
  
  constructor() {
    setTimeout (
       ()=> {
        this.isAuth = true;
      }, 4000
    );
  }
  onConnecter() {
    console.log('On connecte tout');
  }
}
