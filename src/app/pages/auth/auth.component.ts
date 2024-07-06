import { Component } from '@angular/core';
// components
import { LayoutComponent } from '@app/components/shared/layout/layout.component';

@Component({
  standalone: true,
  selector: 'auth-page',
  templateUrl: 'auth.component.html',
  imports: [LayoutComponent],
})
export class AuthComponent {}
