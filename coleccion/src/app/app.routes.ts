import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
    { path: '', component: Inicio, title: 'Componente Inicio' },
    { path: 'inicio', component: Inicio, title: 'Componente Inicio' },
    { path: 'productos', component: Productos, title: 'Catálogo de productos' },
    { path: '**', component: NoEncontrado, title: 'Recurso no encontrado' }
];