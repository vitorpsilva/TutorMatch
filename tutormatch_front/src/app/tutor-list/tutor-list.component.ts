import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Tutor } from '../models/tutor';
import { TutorService } from '../tutor.service';
import { StudentCreateComponent } from '../student-create/student-create.component';
import { Student } from '../models/student';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent implements OnInit, AfterViewInit {

  @ViewChild(StudentCreateComponent) studentCreate;
  tutors: Tutor[];
  studentLocal: Student;

  constructor(private tutorService: TutorService) { }

  getTutors(): void {
    this.tutorService.getTutors()
      .subscribe(tutors => this.tutors = tutors);
  }

  delete(tutor: Tutor): void {
    this.tutors = this.tutors.filter(t => t !== tutor);
    this.tutorService.deleteTutor(tutor).subscribe();
  }

  addRelationship(tutor: Tutor): void {
    console.log(tutor , this.studentLocal);
  }

  ngAfterViewInit() {
    this.studentLocal = this.studentCreate.student;
  }

  ngOnInit() {
    this.getTutors();
    this.studentLocal = new Student();
  }


}
