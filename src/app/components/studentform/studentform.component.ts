import { Component, OnInit } from '@angular/core';
import { Student } from '../../student';
import { StudentserviceService } from '../../service/studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  private student = new Student;

  constructor(private _studentserviceService:StudentserviceService, private _router:Router) { }

  ngOnInit() {
    this.student = this._studentserviceService.getter();
  }


  // formSubmit(){
  //   if(this.student.name != undefined){
  //     this._studentserviceService.createStudent(this.student).subscribe((student)=>{
  //       console.log(student);
  //       this._router.navigate(['/']);
  //     }, (error)=>{
  //       console.log(error);
  //     });
  //   }
  //   else{
  //     this._studentserviceService.createStudent(this.student).subscribe((student)=>{
  //       console.log(student);
  //       this._router.navigate(['/']);
  //     }, (error)=>{
  //       console.log(error);
  //     });
  //   }
  // }

  
  formSubmit(){

    if(this.student.id == null){
      this._studentserviceService.createStudent(this.student).subscribe((student)=>{
        console.log(student);
        this._router.navigate(['/']);
      }, (error)=>{
        console.log(error);
      });
    }
    else{
      this._studentserviceService.updateStudent(this.student.id,this.student).subscribe((student)=>{
        console.log(student);
        this._router.navigate(['/']);
      }, (error)=>{
        console.log(error);
      });
    }
  }
}
