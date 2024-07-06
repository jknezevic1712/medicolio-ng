import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
} from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'base-card',
  templateUrl: 'base-card.component.html',
  styleUrl: 'base-card.component.sass',
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardActions],
})
export class BaseCardComponent {}
