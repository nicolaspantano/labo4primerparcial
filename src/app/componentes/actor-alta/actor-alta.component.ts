import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/clases/producto';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {
  public codigo;
  public descripcion;
  public precio;
  public stock;
  public pais;
  public comestible : boolean = true;


  constructor(private actorService:ActorService,  private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  cambiarPais(paisNombre:string){
    this.pais=paisNombre;
  }

  guardarActor(){
    let actor = new Producto(this.codigo, this.descripcion, this.precio, this.stock, this.pais,this.comestible);
    if(!this.codigo||!this.descripcion||!this.precio||!this.stock||!this.pais||!this.comestible){
      this.showError('Tiene uno o mas campos vacios');
    }else{
      this.actorService.guardarActor(actor).then(resp => {
        this.showSuccess();
      });
    }
  }

  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }

}
