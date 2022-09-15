import { Seccion } from "./seccion";

export interface Alumno {
  id:number,
  rut:string,
  nombre:string,
  apellido:string,
  edad:string,
  seccion:Seccion
}
