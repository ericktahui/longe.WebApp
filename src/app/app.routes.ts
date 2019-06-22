import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ErrorComponent } from './views/error/error.component';

import { ExamenComponent } from './views/examen/examen.component';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserComponent } from './views/user/user.component';
import { DespedidaComponent } from './views/despedida/despedida.component';
import { RescuePassComponent } from './views/rescuePass/rescuePass.component';

/*
import { UsersComponent } from './views/users/users.component';
import { SearchComponent } from './views/search/search.component';
import { GeneradorComponent } from './views/generador/generador.component';
import { Genera2Component } from './views/genera2/genera2.component';
import { DinamicoComponent } from './views/dinamico/dinamico.component';
import { EstructuralComponent } from './views/estructural/estructural.component';
*/


import {AuthGuard} from './_guards/auth.guard';
import { ChangePasswordComponent } from './views/rescuePass/changePassword.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
     path:'login',
     component: LoginComponent
  }, 
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'rescuePass',
    component: RescuePassComponent,
  },
  {
    path:'activate',
    component: ChangePasswordComponent,
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'examen',
    component: ExamenComponent,
  },
  {
    path:'despedida',
    component: DespedidaComponent,
  },
  {
    /* Cualquier otra ruta qu no exista la redireccionamos al componente de Error */
    path: '**',
    component: ErrorComponent
  },


  
];

export default RouterModule.forRoot(routes);



  /*
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'generador',
    component: GeneradorComponent
  },
  {
    path:'gen2',
    component: Genera2Component
  },
  {
    path:'dinamico',
    component: DinamicoComponent
  },
  {
    path:'estructural',
    component: EstructuralComponent
  },
  {
    path:'examen',
    component: ExamenComponent
  },
  */