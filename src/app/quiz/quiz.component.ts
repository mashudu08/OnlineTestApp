import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  constructor(private router: Router) {}

  startQuiz(): void {
    this.router.navigate(['/quizQuestions']);
  }

}
