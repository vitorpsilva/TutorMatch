import { Component, OnInit } from '@angular/core';
import { TutorService } from '../tutor.service';
import { Tutor } from '../models/tutor';



@Component({
  selector: 'app-tutor-create',
  templateUrl: './tutor-create.component.html',
  styleUrls: ['./tutor-create.component.css']
})
export class TutorCreateComponent implements OnInit {

  tutors: Tutor[] = [];

  tutor: Tutor;

  constructor(
    private tutorService: TutorService) { }

  add(tutor: Tutor): void {
    console.log(this.tutor);
    if (!tutor) { return; }
    this.tutorService.addTutor(this.tutor)
      .subscribe(newTutor => {
        this.tutor = newTutor;
        console.log(this.tutor);
      });
      this.tutors.push();
  }

  ngOnInit() {
    this.tutor = new Tutor();
  }

}
