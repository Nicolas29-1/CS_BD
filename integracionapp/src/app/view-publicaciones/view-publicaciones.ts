import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Producto, ServiceAdministrarPublicaciones } from '../services/service-administrar-publicaciones';

@Component({
  selector: 'app-view-publicaciones',
  imports: [],
  templateUrl: './view-publicaciones.html',
  styleUrl: './view-publicaciones.css',
})
export class ViewPublicaciones implements OnInit {
  private router = inject(Router);
  private service = inject(ServiceAdministrarPublicaciones);

  productos = signal<Producto[]>([]);
  error = signal('');

  ngOnInit(): void {
    this.service.getProductos().subscribe({
      next: (data) => this.productos.set(data),
      error: (err) => {
        console.error('Error al llamar al servicio:', err);
        this.error.set('No se pudo cargar la lista de productos.');
      },
    });
  }

  irAProductoNuevo(): void {
    this.router.navigate(['/producto/nuevo']);
  }
}