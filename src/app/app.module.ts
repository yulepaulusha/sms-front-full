import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListstudentsComponent } from './components/liststudents/liststudents.component';
import { StudentformComponent } from './components/studentform/studentform.component';
import { StudentserviceService } from './service/studentservice.service';

const appRoutes:Routes=[
  {path:'', component:ListstudentsComponent},
  {path:'op', component:StudentformComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListstudentsComponent,
    StudentformComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
