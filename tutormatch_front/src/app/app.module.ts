import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorComponent } from './tutor/tutor.component';
import { StudentComponent } from './student/student.component';
import { TutorCreateComponent } from './tutor-create/tutor-create.component';
import { TutorListComponent } from './tutor-list/tutor-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentTutorsComponent } from './student-tutors/student-tutors.component';
import { TutorService } from './tutor.service';


@NgModule({
  declarations: [
    AppComponent,
    TutorComponent,
    StudentComponent,
    TutorCreateComponent,
    TutorListComponent,
    StudentCreateComponent,
    StudentTutorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
