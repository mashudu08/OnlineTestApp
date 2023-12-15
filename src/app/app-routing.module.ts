import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';

const routes: Routes = [
  //{path:'', component:HomeComponent},
 //{path: '', redirectTo: '/quiz', component:QuizComponent},
  {path: '', component:QuizComponent},
  {path: 'quizQuestions', component: QuizQuestionsComponent}


  // {path:'quiz-qu', component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
