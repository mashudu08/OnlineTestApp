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
  
  results: any[] = [];
  score = 0;

  constructor(private quizService: QuizService) {}

  // Fetch questions
  ngOnInit(): void {
    this.quizService.getQuestions().subscribe(
      (data: any[]) => {
        this.questions = data;
        //console.log(this.questions);

        this.results = this.questions.map((question) => ({
          id: question.id,
          isCorrect: false,
        }));

      },
      (error) => {
        console.error('Error fecthing questions: ', error);
      }
    );
  }

  async submit(): Promise<void> {
    this.submitted = true;

    this.results = this.questions.map((question) => ({
      id: question.id,
      isCorrect: this.selectedOptions[question.id] === question.answer,
    }));

    this.score = this.results.filter((res) => res.isCorrect).length;
  }
}
