import { ThisReceiver } from '@angular/compiler';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/componentes/modelos/alumno';
import { __values } from 'tslib';
import { Seccion } from '../modelos/seccion';
import { SeccionComponent } from '../seccion/seccion.component';


@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {
  @Output() public salida= new EventEmitter();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public enviar= new EventEmitter<Alumno>();
  @Input() public valores !: Array<Seccion>;

  public nuevoAlumno: Alumno={
    id:0,
    rut:'',
    nombre:'',
    apellido:'',
    edad:'',
    seccion: {
      id: 0,
      nombreSeccion: ''
    }

  }

  public cambiarRut(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.rut= elemento.value;
    this.salida.emit();
  }
  public cambiarNombre(evento: Event): void{
    const elemento= evento.target as HTMLInputElement;
    this.nuevoAlumno.nombre= elemento.value;
    this.salida.emit();
  }
  public cambiarApellido(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.apellido= elemento.value;
    this.salida.emit();
  }
  public cambiarEdad(evento:Event):void{
    const elemento= evento.target as HTMLInputElement;
    this.nuevoAlumno.edad= elemento.value;
    this.salida.emit();
  }
  public cambiarSeccion(seccion:String){

  }
  public guardarAlumno():void{
    const copy: Alumno={
      ...this.nuevoAlumno
    }
    this.enviar.emit(copy)
    this.nuevoAlumno.rut='';
    this.nuevoAlumno.nombre='';
    this.nuevoAlumno.apellido='';
    this.nuevoAlumno.edad='';
    this.nuevoAlumno.seccion;
    this.salida.emit();
  }
}

