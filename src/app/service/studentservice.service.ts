import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Student } from '../student';

@Injectable(
  {
  providedIn: 'root'
  }
)
export class StudentserviceService {

  private baseUrl:string='http://localhost:8080/studentcloud';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private student:Student;

  constructor(private _http:Http){

  }

  getStudents(){
    return this._http.get(this.baseUrl+'/student', this.options).pipe(map((res:Response)=>res.json())).pipe(
      catchError(this.err)
    );
  }

  getOneStudents(id:Number){
    return this._http.get(this.baseUrl+'/student/'+id, this.options).pipe(map((res:Response)=>res.json())).pipe(
      catchError(this.err)
    );
  }

  deleteOneStudent(id:Number){
    return this._http.delete(this.baseUrl+'/student/'+id, this.options).pipe(map((res:Response)=>res.json())).pipe(
      catchError(this.err)
    );
  }

  createStudent(student:Student){
    return this._http.post(this.baseUrl+'/student',JSON.stringify(student), this.options).pipe(map((res:Response)=>res.json())).pipe(
      catchError(this.err)
    );
  }

  updateStudent(id:Number, student:Student){
    return this._http.put(this.baseUrl+'/student/'+id,JSON.stringify(student), this.options).pipe(map((res:Response)=>res.json())).pipe(
      catchError(this.err)
    );
  }
  
  err(error:Response){
    return throwError(error);
  }

  setter(student:Student){
    this.student=student;
  }

  getter(){
    return this.student;
  }
  

}
