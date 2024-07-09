import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// components
import { MatButtonModule } from '@angular/material/button';
// utils
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'base-button',
  templateUrl: 'base-button.component.html',
  imports: [MatButtonModule, CommonModule, RouterLink],
})
export class BaseButtonComponent {
  @Input({ required: false }) to?: string;
  @Input({ required: false }) color?: 'primary' | 'destructive';
  @Input({ required: false }) disabled?: boolean;
  @Input({ required: false }) icon?: boolean;
}
