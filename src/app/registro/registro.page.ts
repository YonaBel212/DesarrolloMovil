import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {
  name: string = '';
  password: string = '';
  email: string = '';
  telefono: string = '';

  constructor(private navController: NavController) {}

  ngOnInit() {}

  enviarRegistro() {
    if (!this.name || !this.password || !this.email || !this.telefono) {
      console.log('Todos los campos son obligatorios');
      return;
    }

    console.log('Datos registrados:');
    console.log('Nombre:', this.name);
    console.log('Contraseña:', this.password);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);

    // Redirige al home después del registro
    this.navController.navigateForward('/home');
  }
}
