import { Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: BienvenidoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'registro', component: RegistroComponent },
  ];
