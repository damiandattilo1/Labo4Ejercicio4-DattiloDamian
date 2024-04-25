import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from './usuario';

@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BienvenidoComponent, LoginComponent, ErrorComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio_2';
  logueado :boolean = false;
  error :boolean = false;
  usuarioLogueado? :Usuario;


  handleEventLoginOK(resultado :any)
  {
    this.logueado = true;
    this.usuarioLogueado = resultado;
    this.error = false;
  }
  cerrarSesion()
  {
    this.logueado = false;
    this.usuarioLogueado = undefined;
  }
  handleEventLoginERROR(resultado :any)
  {
    this.error = true;

  }
}





