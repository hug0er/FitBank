import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
//import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }
/*
  // API: GET /todos
  public getAllTodos() {
    // will use this.http.get()
  }

  // API: POST /todos
  public createTodo(todo: Todo) {
    // will use this.http.post()
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) {
    // will use this.http.get()
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo) {
    // will use this.http.put()
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    // will use this.http.delete()
  }*/
}
