import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ProductoImagen { id?: number; url: string; order?: number; }

export interface Producto {
  id: number;
  categoryId: number;
  categoryName: string;
  collectionId: number | null;
  collectionName: string | null;
  name: string;
  stock: number;
  price: number;
  images: ProductoImagen[];
  status: boolean;
}

export interface ProductoNuevo {
  categoryId: number;
  collectionId: number | null;
  name: string;
  stock: number;
  price: number;
  createdBy: string;
  images: { url: string; order: number }[];
}

@Injectable({ providedIn: 'root' })
export class ServiceAdministrarPublicaciones {
  private http = inject(HttpClient);
  private urlProductos = `${environment.apiUrl}/api/products`;

  // GET /api/products
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlProductos);
  }

  // POST /api/products
  registrarProducto(p: ProductoNuevo): Observable<Producto> {
    return this.http.post<Producto>(this.urlProductos, p);
  }
}