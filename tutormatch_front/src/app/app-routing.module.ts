import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentGuard } from './student.guard';
import { TutorCreateComponent } from './tutor-create/tutor-create.component';
import { TutorDetailComponent } from './tutor-detail/tutor-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full'
  },
  {
    path: 'student', component: StudentCreateComponent,
  },
  {
    path: 'student/:id', component: StudentDetailComponent,
    resolve: { student: StudentGuard },
    children: [
      {
        path: 'tutor/new',
        component: TutorCreateComponent,
      },
      {
        path: 'tutor/:id',
        component: TutorDetailComponent,
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

