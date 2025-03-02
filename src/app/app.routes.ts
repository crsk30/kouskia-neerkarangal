import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { DonationComponent } from './donation/donation.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'projectlist',
    component: ProjectListComponent
  },
  {
    path: 'projectinfo',
    component: ProjectInfoComponent
  },
  {
    path: 'donation',
    component: DonationComponent
  }
];
