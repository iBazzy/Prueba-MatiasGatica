import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Seccion } from '../modelos/seccion';


@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {
  @Output() public salida2 = new EventEmitter();
  @Output() public salidaString2= new EventEmitter<string>();
  @Output() public sendInfo= new EventEmitter<Seccion>();

  public nuevaSeccion: Seccion ={
    id:0,
    nombreSeccion:''
  }

  public cambiarNombreSeccion(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevaSeccion.nombreSeccion= elemento.value;
    this.salida2.emit();
  }
  public guardarSeccion():void{
    const copia: Seccion={
      ...this.nuevaSeccion
    }
    this.sendInfo.emit(copia)
    this.nuevaSeccion.nombreSeccion='';
    this.salida2.emit();
  }



}
