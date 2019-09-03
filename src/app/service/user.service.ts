import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, filter, map } from 'rxjs/operators';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  API:string = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<User[]>(`${ this.API }/users`).pipe(
      tap( data => {
        console.log('request end')
        console.log(data)
      }),
    )
  }
  getUser( id: number ): Observable<any> {
    return this.http.get<User>(`${ this.API }/users/${ id }`).pipe(
      tap( ( data ) => {
        console.log( 'user received' )
        console.log( data )
      })
    )
  }
  
}
