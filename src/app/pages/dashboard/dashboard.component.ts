import { Component } from '@angular/core';
// components
import { BaseCardComponent } from '@app/components/shared/base-card/base-card.component';
import { BaseButtonComponent } from '@app/components/shared/base-button/base-button.component';
import { LayoutComponent } from '@app/components/shared/layout/layout.component';
// utils
import { RouterOutlet } from '@angular/router';
import { Patient } from '@app/libs/types/General';

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
export class DashboardComponent {
  mockPatients: Patient[] = [
    {
      id: '1',
      name: 'Luke',
      email: 'luke@test.com',
      pin: '1234567890',
      diagnosis:
        'This is one random diagnosis and it definitely does not mean anything useful.',
      doctorId: '1',
      prescribtions: [],
    },
    {
      id: '2',
      name: 'Angie',
      email: 'angie@test.com',
      pin: '1234567891',
      diagnosis:
        'This is one random diagnosis and it definitely does not mean anything useful.',
      doctorId: '1',
      prescribtions: [],
    },
    {
      id: '3',
      name: 'Carl',
      email: 'carl@test.com',
      pin: '1234567892',
      diagnosis:
        'This is one random diagnosis and it definitely does not mean anything useful.',
      doctorId: '1',
      prescribtions: [],
    },
    {
      id: '4',
      name: 'Louis',
      email: 'louis@test.com',
      pin: '1234567893',
      diagnosis:
        'This is one random diagnosis and it definitely does not mean anything useful.',
      doctorId: '1',
      prescribtions: [],
    },
  ];
}
