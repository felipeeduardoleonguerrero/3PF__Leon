import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material.module';
import { SidenavComponent } from './sidenav.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';

//Este módulo sirve de módulo principal a los módulos principales de alumnos, cusos e inscripciones

@NgModule({
  declarations: [
    SidenavComponent,
    AlumnosComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule
  ],
  exports: [
    AlumnosComponent
  ],
  providers: []
})
export class StudentsModule { }