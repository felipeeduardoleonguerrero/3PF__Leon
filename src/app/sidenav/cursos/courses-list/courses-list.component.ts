import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses:any;

  subscriptions: Subscription;

  displayedColumns=['course', 'cost', 'edit', 'delete']

  @ViewChild('table') table: MatTable<any>;

  constructor(private router:Router, private studentsService:StudentsService) { }

  ngOnInit(): void {
    
    this.subscriptions=new Subscription();
    
    //Suscripción a un servicio con observable
    this.subscriptions.add(
      this.studentsService.getCoursesList().subscribe(

        (val)=>this.courses=val

      )
    )
  }
  
  addCourse() {
    this.router.navigate(["home/courses/add-edit"]);
  }

  editCourse(el:any) {

    //Edición de curso

    this.studentsService.courseToEdit=el;
    this.router.navigate(["home/courses/add-edit"]);

  }

  deleteCourse(el:any) {
        
    //Eliminación de curso

    let index = this.courses.findIndex((course: { id: any; })=> course.id===el.id);
    this.courses.splice(index,1);
    this.table.renderRows();
    this.studentsService.coursesList=this.courses!;

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
