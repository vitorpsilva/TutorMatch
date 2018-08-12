import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Tutor } from './models/tutor';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TutorService {


  private url = environment.apiUrl;  // URL to web api


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET Tutor from the server */
  getTutors(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(`${this.url}/tutor`)
      .pipe(
        tap(tutors => this.log('fetched tutors')),
        catchError(this.handleError('getTutors', []))
      );
  }

  /** GET tutor by id. Return `undefined` when id not found */
  getTutorNo404<Data>(id: number): Observable<Tutor> {
    const url = `${this.url}/tutor/${id}`;
    return this.http.get<Tutor[]>(url)
      .pipe(
        map(tutors => tutors[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} tutor id=${id}`);
        }),
        catchError(this.handleError<Tutor>(`getTutor id=${id}`))
      );
  }

  /** GET tutor by id. Will 404 if id not found */
  getTutor(id: number): Observable<Tutor> {
    const url = `${this.url}/${id}`;
    return this.http.get<Tutor>(url).pipe(
      tap(_ => this.log(`fetched tutor id=${id}`)),
      catchError(this.handleError<Tutor>(`getTutor id=${id}`))
    );
  }

  /* GET Tutor whose name contains search term */
  searchTutor(term: string): Observable<Tutor[]> {
    if (!term.trim()) {
      // if not search term, return empty tutor array.
      return of([]);
    }
    return this.http.get<Tutor[]>(`${this.url}/?name=${term}`).pipe(
      tap(_ => this.log(`found Tutor matching "${term}"`)),
      catchError(this.handleError<Tutor[]>('searchTutor', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new tutor to the server */
  addTutor(tutor: Tutor): Observable<Tutor> {
    console.log(tutor);
    return this.http.post(`${this.url}/tutor`, tutor, httpOptions).pipe(
      tap((tutor2: Tutor) => this.log(`added tutor w/ id=${tutor2.id}`)),
      catchError(this.handleError<Tutor>('addTutor'))
    );
  }

  /** DELETE: delete the tutor from the server */
  deleteTutor(tutor: Tutor | number): Observable<Tutor> {
    const id = typeof tutor === 'number' ? tutor : tutor.id;
    const url = `${this.url}/tutor/${id}`;

    return this.http.delete<Tutor>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted tutor id=${id}`)),
      catchError(this.handleError<Tutor>('deleteTutor'))
    );
  }

  /** PUT: update the tutor on the server */
  updateTutor(tutor: Tutor): Observable<any> {
    return this.http.put(this.url, tutor, httpOptions).pipe(
      tap(_ => this.log(`updated tutor id=${tutor.id}`)),
      catchError(this.handleError<any>('updateTutor'))
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
    this.messageService.add(`TutorService: ${message}`);
  }
}
