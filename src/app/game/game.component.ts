import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { Question } from '../../models/question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Game;
  currentQuestion: Question;
  constructor() {
    this.game = new Game(
      [
        new Question('What is in my pocket?', 'The One Ring', ['My hand', 'A knife', 'Some coins'])
      ]
    );
    this.currentQuestion = this.game.nextQuestion();
  }

  onAnswerClick(answer) {
    console.log(`${answer} was clicked and is ${this.currentQuestion.validate(answer)}`);
  }

  ngOnInit() {
  }

}
