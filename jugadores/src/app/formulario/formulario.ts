import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  equipos = ['Lakers', 'Warriors', 'Celtics', 'Bulls', 'Heat', 'Nuggets'];
  posiciones = ['Base', 'Escolta', 'Alero', 'Ala-Pívot', 'Pívot'];

  jugadores: any[] = [];

  onSubmit(form: NgForm) {
    console.log('Data del formulario:', form.value);
    this.jugadores.push({ ...form.value });
    form.resetForm({ equipo: '' });
  }
}
