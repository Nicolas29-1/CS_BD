import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
  { path: '', component: Inicio, title: 'Inicio | Cofre Coleccionista' },
  { path: 'productos', component: Productos, title: 'Catálogo | Cofre Coleccionista' },
  // Cualquier otra ruta cae aquí (siempre debe ir al final)
  { path: '**', component: NoEncontrado, title: 'Página no encontrada' }
];