import { Component } from '@angular/core';
// components
import { LayoutComponent } from '@app/components/shared/layout/layout.component';
import { BaseCardComponent } from '@app/components/shared/base-card/base-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseButtonComponent } from '@app/components/shared/base-button/base-button.component';
// utils
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'auth-page',
  templateUrl: 'auth.component.html',
  styleUrl: 'auth.component.sass',
  imports: [
    LayoutComponent,
    BaseCardComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BaseButtonComponent,
  ],
})
export class AuthComponent {
  isLogin = true;

  get authTypeSwitchText() {
    return this.isLogin
      ? "Don't have an account yet?"
      : 'Already have an account?';
  }

  switchAuthType() {
    this.isLogin = !this.isLogin;
  }

  handleSubmit(formData: NgForm) {
    console.log('DATA ', formData);
  }
}
