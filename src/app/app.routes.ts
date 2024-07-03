import { Routes } from '@angular/router';
// components
import { LayoutComponent } from '@/components/layout/layout.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AppComponent,
      },
      // { path: '**', component: PageNotFoundComponent },
    ],
  },
];
