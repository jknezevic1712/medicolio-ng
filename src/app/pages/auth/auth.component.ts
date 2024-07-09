import { Component } from '@angular/core';
// components
import { LayoutComponent } from '@app/components/shared/layout/layout.component';
import { BaseCardComponent } from '@app/components/shared/base-card/base-card.component';

@Component({
  standalone: true,
  selector: 'auth-page',
  templateUrl: 'auth.component.html',
  imports: [LayoutComponent, BaseCardComponent],
})
export class AuthComponent {}
