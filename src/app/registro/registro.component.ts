import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, BienvenidoComponent, LoginComponent, ErrorComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  username: string = '';
  password: string = '';
  mensaje: string = '';
  resultado :boolean = true;


  constructor(private router :Router, private app: AppComponent)//inyeccion de dependencia
  {
    
  }

  register(): void {
    // Aquí puedes implementar la lógica para enviar la información de registro al servidor
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    let usuario = new Usuario(this.username, this.password);
    this.resultado = this.registrarUsuario(usuario);
    if(this.resultado)
    {
      this.mensaje = "usuario registrado con exito";
      this.actualizarUsuarioLogueado(usuario);
      this.router.navigate(['/home']);

    }
    else
    {
      this.mensaje = "el usuario ya existe";
    }
    // Aquí puedes enviar la información al servidor, por ejemplo, a través de un servicio
  }

  registrarUsuario(usuario :Usuario) {
    // Verificar si ya existe un objeto de usuarios en localStorage
    let usuarios = localStorage.getItem('usuarios');
    if(usuarios == null)
    {
      usuarios = "{}";

    }
    console.log(usuario);
    let usuariosRegistrados = JSON.parse(usuarios) || {};

    // Verificar si el usuario ya existe
    if (usuariosRegistrados[usuario.nombre]) {
        console.log("El usuario ya existe.");
        return false;
    }

    // Registrar el nuevo usuario
    usuariosRegistrados[usuario.nombre] = usuario.clave;

    // Guardar el objeto actualizado en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
    console.log("Usuario registrado correctamente.");
    return true;
  }
  actualizarUsuarioLogueado(usuario: Usuario)
  {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

}
