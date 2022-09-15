import { Component } from '@angular/core';
import { Alumno } from './componentes/modelos/alumno';
import { Seccion } from './componentes/modelos/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba_1';
  public alumnoGuardado: Array<Alumno>=[];
  public seccionGuardado: Array<Seccion>=[];

  public valores2:Array<Seccion>=[];

  public agregarSeccion(nuevo:Seccion):void{
    const id: number= this.seccionGuardado.length+1;
    this.seccionGuardado.push(nuevo);
  }
  public eliminarSeccion(pos2:number):void{
    this.seccionGuardado.splice(pos2,1);
  }

  public agregarAlumno(nuevo:Alumno):void{
    const id:number=this.alumnoGuardado.length+1;
    this.alumnoGuardado.push(nuevo);
  }
  public eliminarAlumno(pos:number):void{
    this.alumnoGuardado.splice(pos,1);
  }
  public escucharAlHijo(){
    console.log('Hola')
  }
  public escuchandoDetalle(hijo:String){
    console.log('que paso?')
  }
  public escucharDetalle(hijo:String){
    console.log('Hola')
  }

}
