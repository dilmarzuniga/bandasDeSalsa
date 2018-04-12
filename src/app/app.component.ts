import { Component } from '@angular/core';

export class Banda {
  id: number;
  nombre: string;
}

const BANDAS: Banda[] = [
  { id:11, nombre:'Hermanos Lebrón' },
  { id:12, nombre:'Fania all-stars' },
  { id:13, nombre:'Grupo Niche'},
  { id:14, nombre:'Orquesta Guayacán' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo= 'Mis bandas de salsa';
  bandas= BANDAS;  

  banda: Banda;
  seleccionar(item: Banda): void {
    this.banda= item;
  }
}
