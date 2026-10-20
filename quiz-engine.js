(function (root) {
  'use strict';
  function createQuiz(questions) {
    let index = 0;
    let answers = [];
    return {
      get index() { return index; },
      get question() { return questions[index]; },
      get answers() { return answers.slice(); },
      get answered() { return answers[index] !== undefined; },
      get total() { return questions.length; },
      get scoredTotal() { return questions.filter(q => q.correct !== null).length; },
      get score() { return questions.reduce((sum, q, i) => sum + (q.correct !== null && answers[i] === q.correct ? 1 : 0), 0); },
      get passed() { return this.score > this.scoredTotal / 2; },
      answer(letter) {
        if (this.answered || !Object.hasOwn(questions[index].options, letter)) return false;
        answers[index] = letter;
        return true;
      },
      next() {
        if (!this.answered || index >= questions.length - 1) return false;
        index += 1;
        return true;
      },
      reset() { index = 0; answers = []; }
    };
  }
  root.createQuiz = createQuiz;
  if (typeof module !== 'undefined') module.exports = { createQuiz };
})(typeof window !== 'undefined' ? window : globalThis);
