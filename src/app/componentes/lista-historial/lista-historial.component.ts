import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seccion } from '../modelos/seccion';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent  {
  @Input() public seccion:Array<Seccion>=[];
  @Output() public PosIndex2= new EventEmitter<number>();
  public escuharId2(id:number):void{
    const post= this.seccion.findIndex((elemento)=>{
      return id=== elemento.id;
    });
    this.PosIndex2.emit(post);
  }

}
