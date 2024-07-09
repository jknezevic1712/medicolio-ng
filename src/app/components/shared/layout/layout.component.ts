import { Component, ViewEncapsulation } from '@angular/core';
// components
import HeaderComponent from '@app/components/header/header.component';
// utils
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'the-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {}
