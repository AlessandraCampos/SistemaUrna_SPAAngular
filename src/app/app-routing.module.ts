import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosCadComponent } from './views/candidatos-cad/candidatos-cad.component';
import { HomeComponent } from './views/home/home.component';
import {CandidatosComponent} from './views/candidatos/candidatos.component';
import { VotoComponent } from './views/voto/voto.component';
import { VotonuloComponent } from './view/votonulo/votonulo.component';



const routes: Routes = [
  { path:"", component:HomeComponent},
  {  path:'candidatos-cad', component:CandidatosCadComponent},
  {  path:'candidatos', component:CandidatosComponent},
  {  path:'voto/:id', component:VotoComponent},
  {  path:'votonulo/:id',component:VotonuloComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
