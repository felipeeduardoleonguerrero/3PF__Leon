import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Students } from 'src/app/services/students';
import { StudentsService } from 'src/app/services/students.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnDestroy {

  @ViewChild('detail') detail: TemplateRef<any>;

  students:Students[];

  subscriptions: Subscription;

  displayedColumns:any;

  displayedColumns2=['name', 'email'];

  public studentDetails:any;

  public detailsData: MatTableDataSource<any>;

  adminStatus:boolean;

  @ViewChild('table') table: MatTable<any>;

  constructor(private router:Router, private studentsService:StudentsService, public dialogDetails: MatDialog, private dialog: MatDialog, private usersService:UsersService) {
    this.detailsData = new MatTableDataSource();
   }

  ngOnInit(): void {

    this.subscriptions=new Subscription();

    this.getStudents();

    this.subscriptions.add(
      this.usersService.adminStatus().subscribe(
        (data)=>{
          this.adminStatus=data;
        }
      )
    )

    

  if (this.adminStatus) {
    this.displayedColumns = ['student', 'email', 'country', 'info', 'edit', 'delete'];
    
  } else {  
    this.displayedColumns = ['student', 'email', 'country', 'delete'];
  }


  }


  getStudents(){
    this.subscriptions.add(
      this.studentsService.getStudentsList().subscribe(
        (data)=>{
          this.students=data;
        }
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

//Eliminación de estudiante

  deleteStudent(id:number){
    this.studentsService.removeStudent(id).subscribe(
      (data)=>{
        this.getStudents();
      }
    )
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