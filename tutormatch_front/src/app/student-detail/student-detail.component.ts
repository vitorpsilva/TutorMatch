import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../models/student';
import { Subscription } from '../../../node_modules/rxjs';
import { Tutor } from '../models/tutor';
import { TutorService } from '../tutor.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  student: Student = new Student();
  inscricao: Subscription;
  tutors: Tutor[];
  tutor: Tutor;

  constructor(
    private tutorService: TutorService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  getStudent(): void {
    this.studentService.getStudent(this.student.id)
      .subscribe(result => {
        this.student = result;
      });
  }

  getTutors(): void {
    this.tutorService.getTutors()
      .subscribe(tutors => this.tutors = tutors);
  }

  deleteTutor(tutor: Tutor): void {
    this.tutorService.deleteTutor(tutor)
      .subscribe(() => {
        this.getStudent();
        this.getTutors();
      });
  }

  addRelationship(tutor: Tutor): void {
    this.studentService.addTutorToStudent(this.student.id, tutor.id).subscribe(result => {
      this.student = result;
      this.getStudent();
    });
  }

  addTutor(tutor: Tutor): void {
    console.log(this.tutor);
    if (!tutor) { return; }
    this.tutorService.addTutor(this.tutor)
      .subscribe(newTutor => {
        this.tutor = newTutor;
        console.log(this.tutor);
        this.getTutors();
        this.tutor = new Tutor();
      });
  }

  removeRelationship(tutor: Tutor): void {
    this.studentService.removeTutorToStudent(this.student.id, tutor.id).subscribe(result => {
      this.student = result;
      this.getStudent();
    });
    console.log(tutor, this.student.id);


  }

  ngOnInit() {
    this.getTutors();
    this.tutor = new Tutor();
    this.inscricao = this.route.data.subscribe(
      (info: { student: Student }) => {
        console.log('Recebendo o obj Student do resolver');
        this.student = info.student;
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
