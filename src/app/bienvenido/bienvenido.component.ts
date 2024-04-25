import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../usuario';
import { AppComponent } from '../app.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [RouterOutlet, BienvenidoComponent, LoginComponent, ErrorComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})

export class BienvenidoComponent {


  @Input() usuario?: Usuario;
  constructor(private router: Router, private app: AppComponent) {
    this.usuario = this.app.usuarioLogueado;

  }
  obtenerUsuario() {
    let stringUsuario = localStorage.getItem('usuario');
    if (stringUsuario == null) {
      stringUsuario = '{}';
    }
    let usuarioParseado = JSON.parse(stringUsuario);
    console.log (usuarioParseado);
  }
}

