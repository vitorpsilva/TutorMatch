import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorCreateComponent } from './tutor-create/tutor-create.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { TutorService } from './tutor.service';
import { TutorDetailComponent } from './tutor-detail/tutor-detail.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentService } from './student.service';
import { StudentGuard } from './student.guard';


@NgModule({
  declarations: [
    AppComponent,
    TutorCreateComponent,
    StudentCreateComponent,
    TutorDetailComponent,
    StudentDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TutorService,
    StudentService,
    StudentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
