import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seccion } from '../modelos/seccion';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent {
  @Input() public seccion!: Seccion;
  @Output() public idSeccion= new EventEmitter<number>();

  public emitirId2():void{
    this.idSeccion.emit(this.seccion.id)
  }
}
