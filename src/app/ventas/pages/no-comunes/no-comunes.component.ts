import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Daniel';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Daniel', 'Liset'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {

    if (this.nombre === 'Daniel') {
      this.nombre = 'Liset';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Daniel';
      this.genero = 'masculino';
    }

  }

  borrarCliente() {

    this.clientes.pop();

  }

  //KeyValue Pipe
  persona = {
    nombre: 'Daniel',
    edad: 34,
    direccion: 'La Habana, Cuba'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //Async Pipe
  miObservable = interval(2000); //0,1,2,3,4,5,6,..

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
      resolve( 'Tenemos data de promesa');
    }, 3500);
  })
}
