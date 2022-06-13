import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit, OnDestroy {

  students:any;

  subscriptions: Subscription;

  displayedColumns=['student', 'course', 'period', 'edit'];

  @ViewChild('table') table: MatTable<any>;

  constructor(private router:Router, private studentsService:StudentsService) {}

  ngOnInit(): void {

    this.subscriptions=new Subscription();
    
    //Suscripción a un servicio con observable
    this.subscriptions.add(
      this.studentsService.getStudentsList().subscribe(

        (val)=>this.students=val

      )
    )
  }

  addRegistration(){
    this.router.navigate(["home/registration/add-edit"]);
  }

  editRegistration(el:any){
    
    //Edición de la suscripción
    this.studentsService.studentToEdit=el;
    this.router.navigate(["home/registration/add-edit"]);

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
