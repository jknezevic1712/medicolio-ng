import { Component } from '@angular/core';
// components
import { BaseCardComponent } from '@/components/shared/base-card/base-card.component';
import { BaseButtonComponent } from '@/components/shared/base-button/base-button.component';
import { LayoutComponent } from '@/components/layout/layout.component';
// utils
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BaseCardComponent,
    BaseButtonComponent,
    LayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {}
