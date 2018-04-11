import { Component } from '@angular/core';

export class Banda {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mis bandas de salsa';
  banda: Banda = {
    id: 1,
    nombre: 'los hermanos lebrón'
  }
  
}
