import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlumnosComponent } from './sidenav/alumnos/alumnos.component';
import { StudentListComponent } from './sidenav/alumnos/student-list/student-list.component';
import { StudentsFormComponent } from './sidenav/alumnos/students-form/students-form.component';
import { AddCourseComponent } from './sidenav/cursos/add-course/add-course.component';
import { CoursesListComponent } from './sidenav/cursos/courses-list/courses-list.component';
import { CursosComponent } from './sidenav/cursos/cursos.component';
import { AddRegistrationComponent } from './sidenav/inscripciones/add-registration/add-registration.component';
import { InscripcionesComponent } from './sidenav/inscripciones/inscripciones.component';
import { RegistrationListComponent } from './sidenav/inscripciones/registration-list/registration-list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WelcomeComponent } from './sidenav/welcome/welcome.component';

const routes: Routes = [
  {path:'home', component:SidenavComponent, children:[
    {path: 'welcome', component: WelcomeComponent},
    {path:'students', component:AlumnosComponent, children: [
      {path: 'list', component: StudentListComponent},
      {path: 'add-edit', component: StudentsFormComponent}
    ]},
    {path:'registration', component:InscripcionesComponent,children: [
      {path: 'list', component:RegistrationListComponent},
      {path: 'add-edit', component:AddRegistrationComponent}
    ]},
    {path:'courses', component:CursosComponent, children: [
      {path:'add-edit', component:AddCourseComponent},
      {path:'list', component:CoursesListComponent}
    ]}
  ]},
  {path: '', redirectTo: '/home/welcome', pathMatch:'full'},
  {path: '**', component:PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
