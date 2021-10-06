import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { HomeComponent } from './componentes/home/home.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  {
    path: 'peliculas',
    children:
      [
        { path: '', redirectTo: 'alta', pathMatch: 'full' },
        { path: 'alta', component: PeliculaAltaComponent },
        { path: 'listado', component: PeliculaListadoComponent }
      ]
  },
  {
    path: 'actor',
    children:
      [
        { path: '', redirectTo: 'alta', pathMatch: 'full' },
        { path: 'alta', component: ActorAltaComponent },
        { path: 'listado', component: ActorListadoComponent },
        { path: 'actorpelicula', component: ActorPeliculaComponent }
      ]
  },
  { path: 'bienvenido', component: HomeComponent },
  { path: 'busqueda', component: BusquedaComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'bienvenido' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
