import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Student } from './models/student';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private url = environment.apiUrl;  // URL to web api


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET Tutor from the server */
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}/student`)
      .pipe(
        tap(tutors => this.log('fetched tutors')),
        catchError(this.handleError('getTutors', []))
      );
  }

  /** GET tutor by id. Return `undefined` when id not found */
  getStudentNo404<Data>(id: number): Observable<Student> {
    const url = `${this.url}/student/${id}`;
    return this.http.get<Student[]>(url)
      .pipe(
        map(tutors => tutors[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} tutor id=${id}`);
        }),
        catchError(this.handleError<Student>(`getTutor id=${id}`))
      );
  }

  /** GET tutor by id. Will 404 if id not found */
  getStudent(id: number): Observable<Student> {
    const url = `${this.url}/${id}`;
    return this.http.get<Student>(url).pipe(
      tap(_ => this.log(`fetched tutor id=${id}`)),
      catchError(this.handleError<Student>(`getTutor id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new tutor to the server */
  addStudent(tutor: Student): Observable<Student> {
    console.log(tutor);
    return this.http.post(`${this.url}/student`, tutor, httpOptions).pipe(
      tap((student: Student) => this.log(`added student w/ id=${student.id}`)),
      catchError(this.handleError<Student>('addStudent'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a TutorService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }
}
