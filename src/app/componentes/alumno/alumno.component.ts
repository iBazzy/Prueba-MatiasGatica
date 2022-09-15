import { Component, Input,Output, EventEmitter } from '@angular/core';
import {Alumno} from '../modelos/alumno'
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent  {
  @Input() public alumno!: Alumno ;
  @Output() public idAlumno= new EventEmitter<number>();

  public emitirId():void{
    this.idAlumno.emit(this.alumno.id)
  }


}
