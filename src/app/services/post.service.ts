import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPosts(): Observable<Post[]> {
    let params = new HttpParams();
    params = params.append('_limit', '8');

    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/Posts', {
        params,
      })
      .pipe(
        catchError((error) => {
          console.log('Error', error.message);
          return throwError(error);
        })
      );
  }
}
