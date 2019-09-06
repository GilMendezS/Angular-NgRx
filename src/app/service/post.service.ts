import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API:string = 'https://jsonplaceholder.typicode.com'
  constructor(private http:HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<Post[]>(`${ this.API }/posts`)
      .pipe(
        tap( data => {
          console.log(data)
        }),
        
      )
  }
  createPost(data: Post): Observable<any> {
    return this.http.post<Post>(`${ this.API }/posts`, data).pipe(
      tap( data => {
        console.log(data)
      })
    )
  }
}
