import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  subscriptions:Subscription;

  loginForm:FormGroup;
  //studentsService: StudentsService;

  constructor(private fb:FormBuilder, private router:Router, private studentsService:StudentsService) { }

  ngOnInit(): void {

    this.subscriptions=new Subscription();

    // this.subscriptions.add(
    //   this.studentsService.logIn().subscribe(
    //     (val: boolean)=>this.login=val
    //   )
    // )

    this.loginForm=this.fb.group({

      user:['', Validators .required],
      password:['', Validators .required]

    })
  }

  //Autenticación del usuario. En caso contrario los Guards bloquearan el acceso al resto del sitio.

  onSubmit(){
    this.studentsService.logIn();
    console.log(this.studentsService)
    this.router.navigate(["home/welcome"]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
