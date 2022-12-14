import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from '../servicios/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css']
})
export class EditarEmpleadosComponent implements OnInit {
  formularioempleado:FormGroup;
elId:any;
  constructor(
    public formulario:FormBuilder,
    private rutaactiva:ActivatedRoute,
    private servicio:CrudService
  ) 
  {
    this.formularioempleado = this.formulario.group(
          {
            nombre: [''],
            correo: ['']
          }
        )
    this.elId=this.rutaactiva.snapshot.paramMap.get('id');
    console.log(this.elId);
    this.servicio.editarEmpleado(this.elId,this.formularioempleado.value).subscribe(
      ()=>{
        
      }
    )
    this.servicio.obtenerEmpleado(this.elId).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioempleado.setValue(
          {
          nombre: respuesta[0]['nombre'],
          correo: respuesta[0]['correo']
        }
        );
      }
    );
  }

  ngOnInit(): void {
  }
    enviarInfo():any{
      console.log(this.formularioempleado);
    }
}
