import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceAdministrarPublicaciones } from '../services/service-administrar-publicaciones';

@Component({
  selector: 'app-view-publiacion-nuevo',
  imports: [FormsModule],
  templateUrl: './view-publiacion-nuevo.html',
  styleUrl: './view-publiacion-nuevo.css',
})
export class ViewPubliacionNuevo {
  private service = inject(ServiceAdministrarPublicaciones);
  private router = inject(Router);

  mensaje = signal('');
  error = signal('');

  producto = this.vacio();

  private vacio() {
    return {
      categoryId: null as number | null,
      collectionId: null as number | null,
      name: '',
      stock: 0,
      price: 0,
      createdBy: '',
      imageUrl: ''
    };
  }

  guardar(): void {
    this.mensaje.set('');
    this.error.set('');
    const p = this.producto;

    const body = {
      categoryId: p.categoryId!,
      collectionId: p.collectionId,
      name: p.name,
      stock: p.stock,
      price: p.price,
      createdBy: p.createdBy,
      images: p.imageUrl ? [{ url: p.imageUrl, order: 1 }] : []
    };

    this.service.registrarProducto(body).subscribe({
      next: (data) => {
        console.log('Producto registrado:', data);
        this.mensaje.set(`Producto "${data.name}" registrado con id ${data.id}`);
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        console.error('Error al llamar al servicio:', err);
        this.error.set('No se pudo registrar el producto. Revisa los datos (¿existe la categoría?).');
      },
    });
  }

  limpiar(): void {
    this.producto = this.vacio();
  }
}