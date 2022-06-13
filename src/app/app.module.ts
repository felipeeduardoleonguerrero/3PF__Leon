import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
///import { AlumnosModule } from './sidenav/alumnos/alumnos.module';
import { AppRoutingModule } from './app-routing.module';
import { StudentsModule } from './sidenav/sidenav.module';

const appRoutes=[
  {path: 'students', loadChildren: ()=>import('./sidenav/sidenav.module').then(m=>m.StudentsModule) } 
]

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    BrowserModule,
    //AlumnosModule
    StudentsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
