import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from '../servicios/crud.service';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  formularioempleado: FormGroup;
Empleados:any;


  constructor(
    public formulario: FormBuilder,
    private servicio: CrudService
    ) {
    this.formularioempleado = this.formulario.group(
      {
        id: [''],
        nombre: [''],
        correo: ['']
      }
    )
  }

  ngOnInit(): void {
    this.servicio.consultarEmpleado().subscribe(respuesta=>{console.log(respuesta);});
  }

  enviarInfo() {
    console.log("hola");
    console.log(this.formularioempleado.value);
    this.servicio.agregarEmpleado(this.formularioempleado.value).subscribe();
  }
}
