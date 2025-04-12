import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { DonationComponent } from './donation/donation.component';
import { ProjectInfoComponent } from './project-info/project-info.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
  path:'project-list',
  component : ProjectListComponent
  },
  {
    path: 'project-list/:id',
    component: ProjectInfoComponent
  },
  {
    path: 'donation',
    component: DonationComponent
  }
];
