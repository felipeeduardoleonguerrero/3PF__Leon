import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnDestroy {

  @ViewChild('detail') detail: TemplateRef<any>;

  students:any;

  subscriptions: Subscription;

  displayedColumns=['student', 'email', 'country', 'info', 'edit', 'delete'];

  displayedColumns2=['name', 'email'];

  public studentDetails:any;

  public detailsData: MatTableDataSource<any>;

  @ViewChild('table') table: MatTable<any>;

  constructor(private router:Router, private studentsService:StudentsService, public dialogDetails: MatDialog, private dialog: MatDialog) {
    this.detailsData = new MatTableDataSource();
   }

  ngOnInit(): void {

    this.subscriptions=new Subscription();
    
    //Suscripción a un servicio con observable
    this.subscriptions.add(
      this.studentsService.getStudentsList().subscribe(

        (val)=>this.students=val

      )
    )
  }

  addStudent(){
    this.router.navigate(["home/students/add-edit"]);
  }

  editStudent(el:any){
    
    //Edición de estudiante
    this.studentsService.studentToEdit=el;
    this.router.navigate(["home/students/add-edit"]);

  }

  deleteStudent(el:any){

    //Eliminación de estudiante
    let index = this.students.findIndex((student: { id: any; })=> student.id===el.id);
    this.students.splice(index,1);
    this.table.renderRows();
    this.studentsService.studentsList=this.students!;
  }

  //Este método abre el modal de detalles (botón de información).

  openDialog(details:any){
    this.studentDetails = details;
    let dialogRef = this.dialog.open(this.detail, { disableClose: false });
    dialogRef.afterClosed().subscribe((result) => { });

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}

@Component({
  selector: 'dialog-elements',
  templateUrl: 'dialog-elements.html',
})

export class DialogElements {}