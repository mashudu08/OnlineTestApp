import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../quiz';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private serverUrl = 'http://localhost:3000';

constructor(private http: HttpClient) { }
  getQuestions(): Observable<any[]> {
    const route = `${this.serverUrl}/backendQuizzes`
    var result = this.http.get<any[]>(route);
    return result;
}
}
