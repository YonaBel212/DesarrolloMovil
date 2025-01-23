import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password:string = '';

  constructor(private navController: NavController ) {
    
   }

  ngOnInit() {
  }

  login(form: NgForm){
    
    //obtenemos los valores del formulario
    console.log(form.value);


    //validar formulario
    console.log('valid:', form.valid);

    //si form es inválido
    //console log ('Todos los campos son requeridos)
    //return 
    if(form.invalid){
      console.log('Todos los campos son requeridos')
      return;
    }

    //si usuario=admin y password=admin
    //Entonces console.log('Login correcto')
    //i no console.log('Login incorrescto')
    if(this.email === 'admin' && this.password === 'admin'){
      this.navController.navigateForward('/inicio');
    }
    else{
      console.log('login incorrecto');
    }

  }

}
