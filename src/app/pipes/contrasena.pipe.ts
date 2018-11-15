import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  
   v:string;

  transform(value: string, activado: boolean = true): any {

/*     if(activado == true){
      this.v = value.replace(value, '************');
    }else{
      this.v = value;
    }
    
    return this.v; */

    if(activado){
      let salida = "";
      for(let i=0; i<value.length; i++){
        salida += "*";
      }
      return salida;
    }else{
      return value;
    }
  }

}
