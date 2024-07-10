import { Component } from '@angular/core';
// components
import BaseButtonComponent from '@app/components/shared/base-button/base-button.component';
import LibraryTitle from './library-title/library-title.component';
// utils
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'the-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.sass',
  imports: [BaseButtonComponent, LibraryTitle, RouterLink],
})
export default class HeaderComponent {
  userExists = false;

  handleLogout() {
    console.log('Logout!');
  }
}
