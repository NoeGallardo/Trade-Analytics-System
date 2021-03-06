import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { Grafica1Component } from "./components/grafica1/grafica1.component";

 
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home/grafica1', component: Grafica1Component },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
 
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);