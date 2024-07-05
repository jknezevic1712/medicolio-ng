import { Component } from '@angular/core';
// components
import { BaseButtonComponent } from '@/components/shared/base-button/base-button.component'; // utils
// utils
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'page-not-found',
  templateUrl: 'page-not-found.component.html',
  styleUrl: 'page-not-found.component.sass',
  imports: [BaseButtonComponent],
})
export class PageNotFoundComponent {
  constructor(private location: Location) {}

  handleNavToPrevPage() {
    this.location.back();
  }
}
