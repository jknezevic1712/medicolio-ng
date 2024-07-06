import { Component } from '@angular/core';
// utils
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent {}
