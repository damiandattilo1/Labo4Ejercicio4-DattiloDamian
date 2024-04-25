

import { Component, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';


@Component({
  imports: [CommonModule, FormsModule, RouterOutlet, BienvenidoComponent, LoginComponent, ErrorComponent, CommonModule, FormsModule, RouterLink],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true // Marcar como componente standalone
  
})
export class LoginComponent {
  usuario: Usuario = new Usuario('', ''); // Objeto Usuario inicializado
  
  @Output() loginOKEvent = new EventEmitter<Usuario>(); // Evento para emitir al iniciar sesión
  @Output() loginERROREvent = new EventEmitter<Usuario>(); // Evento para emitir al iniciar sesión

  constructor(private router :Router, private app: AppComponent)//inyeccion de dependencia
  {
    
  }
  onSubmit() {
    if(this.usuario.nombre == "" || this.usuario.clave =="")
    {
      this.router.navigate(['/error']);
    }
    else
    {
      this.router.navigate(['/home']);
    }

  }
}
