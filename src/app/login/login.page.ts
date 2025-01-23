import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password:string = '';

  constructor() {
    
   }

  ngOnInit() {
  }

  login(){
    //si usuario=admin y password=admin
    //Entonces console.log('Login correcto')
    //i no console.log('Login incorrescto')
    if(this.email === 'admin' && this.password === 'admin'){
      console.log('login correcto');
    }
    else{
      console.log('login incorrecto');
    }

  }

}
