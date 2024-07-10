import { Component } from '@angular/core';
// components
import BaseButtonComponent from '@app/components/shared/base-button/base-button.component'; // utils
import LayoutComponent from '@app/components/shared/layout/layout.component';
// utils
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'page-not-found-page',
  templateUrl: 'page-not-found.component.html',
  styleUrl: 'page-not-found.component.sass',
  imports: [BaseButtonComponent, LayoutComponent],
})
export default class PageNotFoundComponent {
  constructor(private location: Location) {}

  handleNavToPrevPage() {
    this.location.back();
  }
}
