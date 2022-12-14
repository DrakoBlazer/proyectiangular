import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EditarEmpleadosComponent } from './editar-empleados/editar-empleados.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
const routes: Routes = [ 
  {path:'contacto', component:ContactoComponent},
  {path:'empleados', component:EmpleadosComponent},
  {path:'Lista',component:ListarEmpleadosComponent},
  {path:'editar/:id',component:EditarEmpleadosComponent},
  {path: '',pathMatch:'full',redirectTo:'Lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
