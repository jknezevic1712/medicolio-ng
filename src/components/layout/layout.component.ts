import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// components
import HeaderComponent from '@components/header/header.component';

@Component({
  selector: 'the-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {}
