import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'daniel';
  nombreUpper: string = 'DANIEL';
  nombreCompleto: string = 'dAniEl cOmAs';

  fecha: Date = new Date(); //el dia de hoy

}
