import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activado:boolean = true;
  video = "XNAZ3Q3tOCo";
  nombre = "JoSe MAnciLLa ColoMA";
  nombreUpper = "Jose";
  nombreLower = "JOSE";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario= 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: 19
    }
  };

  datoPromesa = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('Llego la data'),3500);
  });

  fecha = new Date();    

  constructor() { }

  ngOnInit() {
  }

}
