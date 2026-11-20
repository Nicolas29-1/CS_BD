import { Routes } from '@angular/router';
import { ViewPublicaciones } from './view-publicaciones/view-publicaciones';
import { ViewPubliacionNuevo } from './view-publiacion-nuevo/view-publiacion-nuevo';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ViewPublicaciones, title: 'Listado de productos' },
  { path: 'producto/nuevo', component: ViewPubliacionNuevo, title: 'Producto nuevo' }
];