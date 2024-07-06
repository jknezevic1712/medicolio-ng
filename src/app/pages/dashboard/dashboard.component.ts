import { Component, OnInit } from '@angular/core';
// components
import { BaseCardComponent } from '@app/components/shared/base-card/base-card.component';
import { BaseButtonComponent } from '@app/components/shared/base-button/base-button.component';
import { LayoutComponent } from '@app/components/shared/layout/layout.component';
// utils
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [
    RouterOutlet,
    BaseCardComponent,
    BaseButtonComponent,
    LayoutComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    // console.log('ENV ', process.env);
  }
}
