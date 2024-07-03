import { Component } from '@angular/core';
// components
import { BaseButton } from '@components/shared/base-button/base-button.component';
import { LibraryTitle } from './library-title/library-title.component';

@Component({
  standalone: true,
  selector: 'the-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.sass',
  imports: [BaseButton, LibraryTitle],
})
export default class HeaderComponent {
  userExists = false;

  handleLogout() {
    console.log('Logout!');
  }
}
