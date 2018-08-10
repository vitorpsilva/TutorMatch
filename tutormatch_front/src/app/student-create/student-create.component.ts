import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student;
  student_id: string;

  constructor(private studentService: StudentService) { }

  add(student: Student): void {
    console.log(this.student);
    if (!student) { return; }
    this.studentService.addStudent(this.student)
      .subscribe(newStudent => {
        this.student = newStudent;
        this.student_id = this.student.id;
        console.log(newStudent);
        console.log(this.student_id);
      });
  }

  ngOnInit() {
    this.student = new Student();
  }

}
