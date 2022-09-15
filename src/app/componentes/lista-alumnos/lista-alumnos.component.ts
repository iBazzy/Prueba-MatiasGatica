import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Alumno } from '../modelos/alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent  {
  @Input() public alumno:Array<Alumno>=[];
  @Output() public posIndex= new EventEmitter<number>();

  public escucharId(id:number):void{
    const post= this.alumno.findIndex((elemento)=>{
      return id === elemento.id;
    });
    this.posIndex.emit(post);
  }
}
