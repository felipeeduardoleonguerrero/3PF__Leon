import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material.module';
import { NamesPipe } from './names.pipe';
import { StudentsFormComponent } from './students-form/students-form.component';


@NgModule({
  declarations: [
    StudentListComponent,
    NamesPipe,
    StudentsFormComponent,
    //DialogElements
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
