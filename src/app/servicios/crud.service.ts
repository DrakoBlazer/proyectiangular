import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {empleados} from './modelos';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
API:string='https://api.institutequasar.com/';
  constructor(private conexionservicio:HttpClient) { }
  agregarEmpleado(datosEmpleado:empleados):Observable<any>{
    return this.conexionservicio.post(this.API+"?insertar=1",datosEmpleado);
  }

  consultarEmpleado(){
    return this.conexionservicio.get(this.API);
  }
}