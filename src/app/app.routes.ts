import { Routes } from '@angular/router';
// components
import { LayoutComponent } from '@/components/layout/layout.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AppComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];
