export class Question {

    private _answers: string[];

    constructor(private _question: string,
        private _correctAnswer: string,
        private _wrongAnswers: string[]
    ) {
        this._answers = Question.shuffle([_correctAnswer, ..._wrongAnswers]);
    }

    /**
    * Shuffles array in place.
    * @param {Array} a items An array containing the items.
    * Taken from https://stackoverflow.com/a/6274381/912189
    */
    private static shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    get answers(): string[] {
        return this._answers;
    }

    get question(): string {
        return this._question;
    }

    validate(answer: string): boolean {
        return answer === this._correctAnswer;
    }

    getTwoWrongAnswers(): any {
        return Question.shuffle([...this._wrongAnswers]).slice(2);
    }
}
