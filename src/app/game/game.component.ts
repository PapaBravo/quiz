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
  states: number[] = [];
  constructor() {
    this.game = new Game(
      [
        new Question('What is in my pocket?', 'The One Ring', ['My hand', 'A knife', 'Some coins'])
      ]
    );
    this.currentQuestion = this.game.nextQuestion();
    this.states = [
      50,
      100,
      200,
      500,
      1000,
      2000,
      4000,
      8000,
      16000,
      32000,
      64000,
      125000,
      500000,
      1000000
    ];
  }

  onAnswerClick(answer) {
    console.log(`${answer} was clicked and is ${this.currentQuestion.validate(answer)}`);
  }

  ngOnInit() {
  }

}
