// Decorators
import { NgModule } from '@angular/core';

// Modules
import { RouterModule, Routes } from '@angular/router';

// Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

// Guards
import { isAnonymous } from '../../core/guards/is-anonymous'

const userRoutes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    //canActivate: [isAnonymous],
    component: RegisterComponent
  },
  {
    path: 'login',
    //canActivate: [isAnonymous],
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

 }
