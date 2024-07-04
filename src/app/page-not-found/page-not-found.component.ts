import { Component } from '@angular/core';
// components
import { Location } from '@angular/common';
// utils
import { BaseButton } from '@/components/shared/base-button/base-button.component';

@Component({
  standalone: true,
  selector: 'page-not-found',
  templateUrl: 'page-not-found.component.html',
  styleUrl: 'page-not-found.component.sass',
  imports: [BaseButton],
})
export class PageNotFoundComponent {
  constructor(private location: Location) {}

  handleNavToPrevPage() {
    this.location.back();
  }
}
