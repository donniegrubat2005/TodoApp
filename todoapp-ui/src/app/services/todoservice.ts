import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class Todoservice {
   private api = 'https://localhost:5113/api/todos';

   constructor(private http: HttpClient) {}

    getTodos() {
    return this.http.get<Todo[]>(this.api);
  }
}
