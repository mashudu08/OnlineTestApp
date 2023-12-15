import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrl: './quiz-questions.component.css',
})
export class QuizQuestionsComponent implements OnInit {
  questions: any[] = [];
  selectedOptions: any = {};
  submitted = false;

  constructor(private quizService: QuizService) {}

  // Fetch questions
  ngOnInit(): void {
    this.quizService.getQuestions().subscribe(
      (data: any[]) => {
        this.questions = data;
        console.log(this.questions);
      },
      (error) => {
        console.error('Error fecthing questions: ', error);
      }
    );
  }

  async submit(): Promise<void> {
    this.submitted = true;
  }
}
