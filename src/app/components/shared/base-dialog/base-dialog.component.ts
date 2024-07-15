import { Component } from '@angular/core';
// components
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import BaseButtonComponent from '../base-button/base-button.component';

@Component({
  standalone: true,
  selector: 'base-dialog',
  templateUrl: 'base-dialog.component.html',
  // styleUrl: 'base-dialog.component.sass',
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormFieldModule,
    BaseButtonComponent,
  ],
})
export default class BaseDialogComponent {}
