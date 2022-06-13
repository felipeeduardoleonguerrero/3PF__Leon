import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material.module';
import { StudentsFormComponent } from './students-form/students-form.component';
import { NamesPipe } from './names.pipe';

//Módulo que sirve a la lista de estudiantes y sus registros

@NgModule({
  declarations: [
    StudentListComponent,
    NamesPipe,
    StudentsFormComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    StudentListComponent,
    StudentsFormComponent
  ]
})
export class AlumnosModule { }
