import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  
  //Arreglo con todos los estudiantes
  studentsList:any=[
    {
      id: 1,
      studentName:"Felipe",
      studentSurname: "León",
      course: ['Angular', 'Javascript', 'PHP'],
      class: "Primera",
      period: "Primero",
      email: "felipe@mail.com",
      country: "México"
    },
    {
      id: 2,
      studentName:"Michelle",
      studentSurname: "Deschamps",
      course: ['Angular', 'Javascript', 'PHP'],
      class: "Primera",
      period: "Segundo",
      email: "michelle@mail.com",
      country: "Haití"
    },
    {
      id: 3,
      studentName:"Lorelei",
      studentSurname: "Blaustein",
      course: ['Angular', 'Javascript'],
      class: "Primera",
      period: "Primero",
      email: "lorelei@mail.com",
      country: "Liechtenstein"
    },
    {
      id: 4,
      studentName:"Sergei",
      studentSurname: "Romanov",
      course: ['Javascript', 'PHP'],
      class: "Introducción",
      period: "Tercero",
      email: "sergei@mail.com",
      country: "Rusia"
    }
  ];
  
  //Recibe un objeto sin arreglo
  studentToEdit:any;


  //Arreglo con cursos
  coursesList:any=[
    {
      id: 1,
      name: "Angular",
      cost: '1000'
    },
    {
      id: 2,
      name: "Javascript",
      cost: '2000'
    },
    {
      id: 3,
      name: "PHP",
      cost: '3000'
    }
  ];

  courseToEdit:any;

  constructor() {}

  //Uso de Observable

  getStudentsList():Observable<any> {

    return of(this.studentsList);

  }

  //Uso de Observable

  getStudentToEdit():Observable<any> {

    return of(this.studentToEdit);

  }

  //Uso de Observable

  getCoursesList():Observable<any> {

    return of(this.coursesList);
    
  }

  getCourseToEdit():Observable<any> {
    return of(this.courseToEdit);
  }

}
