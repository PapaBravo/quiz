import { Question } from './question';

describe('Question', () => {
    const question = 'question';
    const correctAnswer = 'correctAnswer';
    const wrongAnswers = ['wrongAnswer1', 'wrongAnswer2', 'wrongAnswer3'];

    const q = new Question(question, correctAnswer, wrongAnswers);

    it('Can be created', () => {
        expect(q).toBeDefined();
    });

    it('Returns wrong and correct answers', () => {
        const answers = q.answers;
        expect(answers.length).toBe(wrongAnswers.length + 1);
        wrongAnswers.forEach(a => expect(answers.indexOf(a) >= 0));
        expect(answers.indexOf(correctAnswer) >= 0);
    });

    it('Validates correct answer', () => {
        expect(q.validate(correctAnswer)).toBeTruthy();
    });

    it('Does not validates wrong answer', () => {
        wrongAnswers.forEach(a => expect(q.validate(a)).toBeFalsy());
    });

    it('Returns two wrong answers for 50:50', () => {
        q.getTwoWrongAnswers().forEach(a => expect(q.validate(a)).toBeFalsy());
    });
});
