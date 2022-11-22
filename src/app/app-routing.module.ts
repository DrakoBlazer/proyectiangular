import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [ 
  {path:'contacto', component:ContactoComponent},
  {path:'empleados', component:EmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
