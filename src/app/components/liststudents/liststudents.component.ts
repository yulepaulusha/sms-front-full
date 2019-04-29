import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../../service/studentservice.service';
import { Student } from '../../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liststudents',
  templateUrl: './liststudents.component.html',
  styleUrls: ['./liststudents.component.css']
})
export class ListstudentsComponent implements OnInit {

  private students:Student[];

  constructor(private _studentserviceService:StudentserviceService, private _router:Router) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this._studentserviceService.getStudents().subscribe((students)=>{
      console.log(students);
      this.students=students;
    }, (error)=>{
      console.log(error);
    })
  }

  deleteStudent(student){
    this._studentserviceService.deleteOneStudent(student.id).subscribe((data)=>{
      this.students.splice(this.students.indexOf(student),1);
      this.fetchData();
    },(error)=>{
      console.log(error);
    })
  }

  createStudent(){
    let student = new Student();
    this._studentserviceService.setter(student);
    this._router.navigate(['/op']);
  }

  updateStudent(student){
    this._studentserviceService.setter(student);
    this._router.navigate(['/op']);
  }

}
