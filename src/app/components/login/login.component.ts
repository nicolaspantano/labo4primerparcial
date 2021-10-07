import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : Usuario;
  rol = "empleado";
  @Output() seLogeo: EventEmitter<any> = new EventEmitter<any>();
  constructor(private auth:AuthService, private router:Router) { this.user = new Usuario() }

  ngOnInit(): void {
    
  }


  onLogin(){
  
   this.auth.Login(this.user.correo  ,this.user.password).then(()=>{
    Swal.fire({
      title: 'Inicio de sesion correcto!',
      icon: 'success',
      confirmButtonText: 'Continuar'
    }).then(()=>{
      this.auth.user=this.user;
      localStorage.setItem('token',this.user.correo);
      this.router.navigateByUrl('');
    });
   }).catch((e)=>{
    Swal.fire({
      title: 'Error!',
      text: e,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
   })
  }

  HardcodearUsuario(rol){
    

    if(rol=='empleado'){
      this.user.correo = 'prueba1234@hotmail.com';
      this.user.password='12341234'
    }
    else{
      this.user.correo = 'pruebaadmin@hotmail.com';
      this.user.password='12341234'
    }
  }

  onChange(e){
    this.rol=e;
  }
}

