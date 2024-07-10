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
  styleUrl: 'base-button.component.sass',
  imports: [MatButtonModule, CommonModule, RouterLink],
})
export class BaseButtonComponent {
  @Input({ required: false }) to?: string;
  @Input({ required: false }) fullWidth?: boolean;
  @Input({ required: false }) disabled?: boolean;
  @Input({ required: false }) color?: 'primary' | 'accent' | 'warn' = 'primary';
  // @Input({ required: false }) icon?: boolean;
}
