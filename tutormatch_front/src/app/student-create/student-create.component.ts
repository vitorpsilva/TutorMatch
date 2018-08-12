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
  students: Student[] = [];


  constructor(private studentService: StudentService) { }

  add(student: Student): void {
    console.log(this.student);
    if (!student) { return; }
    this.studentService.addStudent(this.student)
      .subscribe(newStudent => {
        this.student = newStudent;
        this.students.push(this.student);
      });
  }

  listAllStudents(): void {
    this.studentService.getStudents().subscribe(result => {
      this.students = result;
    });
  }

  ngOnInit() {
    this.student = new Student();
    this.listAllStudents();
  }

}
