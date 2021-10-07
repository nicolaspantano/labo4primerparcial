import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  {
    path: 'producto',
    children:
      [
        { path: '', redirectTo: 'alta', pathMatch: 'full' },
        { path: 'alta', component: ActorAltaComponent, canActivate: [UserGuard] },
        { path: 'listado', component: ActorListadoComponent }
        
      ]
  },
  { path: 'bienvenido', component: HomeComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'bienvenido' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
