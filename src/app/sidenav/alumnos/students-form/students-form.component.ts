import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})

export class StudentsFormComponent implements OnInit, OnDestroy {
  
  studentForm:FormGroup;

  studentToEdit:any;

  subscriptions:Subscription;

  constructor(private fb:FormBuilder, private studentsService:StudentsService, private router:Router) { }

  ngOnInit(): void {

    this.subscriptions=new Subscription();

    this.studentForm=this.fb.group({

      studentName:['', Validators .required],
      studentSurname:['', Validators .required],
      email:[null, Validators.required],
      country:[null, Validators.required]

    })

    //Uso del observable en StudentsService para editar al estudiante
    this.subscriptions.add(
      this.studentsService.getStudentToEdit().subscribe(
        val=>this.studentToEdit=val
      )
    )

    //Al editar al estudiante se llenan los valores del formulario con patchValue

    if(this.studentToEdit){

      this.studentForm.get('studentName')?.patchValue(this.studentToEdit.studentName);
      this.studentForm.get('studentSurname')?.patchValue(this.studentToEdit.studentSurname);
      this.studentForm.get('email')?.patchValue(this.studentToEdit.email);
      this.studentForm.get('country')?.patchValue(this.studentToEdit.country);
      
    }
  }

  onSubmit(){

    //Evalúa si el elemento se añade o edita. Si se añade, emite editedItem. Si se edita emite el itemEdited.

    // Se declara students para no mutar directamente a studentsList (students.service).
    let students=[];

    //Suscripción a un servicio con observable
    this.subscriptions.add(
      this.studentsService.getStudentsList().subscribe(

        val=>students=val

      )
    )

    //Generamos un id para el nuevo estudiante. Si no hay estudiantes, el índice del nuevo estudiante será igual a index (1).
    
    let index=1;

    if (students.length>0 && !this.studentToEdit) {

      index=students.length+1;
      this.studentForm.value['id']=index;
      students.push(this.studentForm.value);

    } else if (students.length===0 && !this.studentToEdit){

      this.studentForm.value['id']=index;
      students.push(this.studentForm.value)

    }

    //Actualizamos al estudiante encontrando su id.

    if (this.studentToEdit) {
        let indexOfStudent = students.findIndex((student)=>student.id===this.studentToEdit.id);
       students[indexOfStudent]=this.studentForm.value;
    }

    //Igualamos students con studentsList (students.servivce). ! (null assertion value) avisa a Angular que el valor no será igual a null.
    this.studentsService.studentsList=students!;
    this.router.navigate(["home/students/list"]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
