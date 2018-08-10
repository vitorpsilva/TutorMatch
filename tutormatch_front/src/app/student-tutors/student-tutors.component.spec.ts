import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTutorsComponent } from './student-tutors.component';

describe('StudentTutorsComponent', () => {
  let component: StudentTutorsComponent;
  let fixture: ComponentFixture<StudentTutorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTutorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
