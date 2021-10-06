import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {
  public nombre;
  public apellido;
  public email;
  public direccion;
  public pais;

  constructor(private actorService:ActorService,  private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  cambiarPais(paisNombre:string){
    this.pais=paisNombre;
  }

  guardarActor(){
    let actor = new Actor(this.nombre, this.apellido, this.email, this.direccion, this.pais);
    this.actorService.guardarActor(actor).then(resp => {
      this.showSuccess();
    }).catch((error) => {
      this.showError(error);
    });;
  }

  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }

}
