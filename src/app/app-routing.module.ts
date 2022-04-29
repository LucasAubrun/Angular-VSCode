import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutreComponent } from './autre/autre.component';
import { HomeComponent } from './home/home.component';
import { PriveComponent } from './prive/prive.component';
import { PubliqueComponent } from './publique/publique.component';

// Définition des path pour naviguer de page en page
const routes: Routes = [
  {component: HomeComponent, path: "home"},
  {component: PriveComponent, path: "prive"},
  {component: PubliqueComponent, path: "publique"},
  {component: AutreComponent, path: "autre"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
