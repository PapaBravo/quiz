import { Question } from './question';

export class Game {

    private _results: boolean[] = [];

    constructor(
        private _questions: Question[],
        private _player: string = ''
    ) { }

    nextQuestion(): Question {
        const nextIndex = this._results.length;
        if (this._questions.length <= nextIndex) {
            return null;
        }
        return this._questions[nextIndex];
    }
}
