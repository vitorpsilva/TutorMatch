import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  constructor(private studentService: StudentService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    console.log('AlunoDetalheResolver');

    const id = route.params['id'];

    return this.studentService.getStudent(id);
  }
}
