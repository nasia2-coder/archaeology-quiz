(() => {
  'use strict';
  const data = window.QUIZ_DATA;
  const quiz = window.createQuiz(data.questions);
  const panel = document.getElementById('panel');
  const scene = document.getElementById('scene');
  const rails = { left: document.getElementById('left-rail'), right: document.getElementById('right-rail') };
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
  const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
  function clearRails() {
    scene.classList.remove('has-feedback', 'single-feedback');
    Object.values(rails).forEach(rail => { rail.hidden = true; rail.replaceChildren(); });
  }
  function focusTitle() { panel.querySelector('#screen-title').focus({ preventScroll: true }); }
  function revealPanelTop() { if (window.innerWidth <= 1200) panel.scrollIntoView({ behavior: 'instant', block: 'start' }); }
  function intro(focus = false) {
    clearRails();
    panel.className = 'panel intro';
    panel.innerHTML = `<p class="eyebrow">THE PAST IS PART OF THE PRESENT</p>
      <h1 id="screen-title" tabindex="-1">${escape(data.title)}</h1>
      <p class="intro-copy">${escape(data.introduction)}</p>
      <div class="credits"><div><span class="label">CREATED FOR</span><p>${escape(data.course)}</p></div><div><span class="label">CREATED BY</span><p>${data.creators.map(escape).join('<br>')}</p></div></div>
      <div class="intro-bottom"><span class="small-note">${quiz.total} questions. One new perspective.<br>No time limit — explore at your own pace.</span><button class="primary" id="start">Start Quiz ${arrow}</button></div>`;
    document.getElementById('footer-note').textContent = `${quiz.total} QUESTIONS · TAKE YOUR TIME`;
    document.getElementById('start').addEventListener('click', () => { quiz.reset(); showQuestion(); });
    if (focus) focusTitle();
  }
  function showQuestion() {
    clearRails();
    panel.className = 'panel question';
    const q = quiz.question;
    panel.innerHTML = `<div class="question-top"><p class="eyebrow">ARCHAEOLOGY & MODERN LIFE</p><span class="count"><strong>${String(quiz.index + 1).padStart(2, '0')}</strong> / ${quiz.total}</span></div>
      <div class="progress" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="${quiz.total}" aria-valuenow="${quiz.index}"><span style="width:${quiz.index / quiz.total * 100}%"></span></div>
      <div class="question-body"><h2 class="question-title" id="screen-title" tabindex="-1">${escape(q.text)}</h2>
      <div class="answers" role="group" aria-labelledby="screen-title">${['A','B','C','D'].map(letter => `<button class="answer" data-answer="${letter}" aria-pressed="false"><span class="answer-letter">${letter}.</span><span class="answer-text">${escape(q.options[letter])}</span><span class="answer-mark" aria-hidden="true"></span></button>`).join('')}</div></div>
      <div class="question-bottom"><p class="feedback-label" id="feedback" aria-live="polite">Choose one answer.</p><button class="primary" id="next" hidden>${quiz.index === quiz.total - 1 ? 'See results' : 'Next question'} ${arrow}</button></div>`;
    panel.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => select(button.dataset.answer)));
    document.getElementById('next').addEventListener('click', () => { if (!quiz.answered) return; if (quiz.next()) showQuestion(); else results(); });
    focusTitle();
    revealPanelTop();
  }
  function select(letter) {
    if (!quiz.answer(letter)) return;
    const q = quiz.question;
    const neutral = q.correct === null;
    const correct = letter === q.correct;
    panel.querySelectorAll('[data-answer]').forEach(button => {
      const option = button.dataset.answer;
      button.disabled = true;
      button.setAttribute('aria-pressed', String(option === letter));
      if (neutral && option === letter) button.classList.add('neutral-selected');
      if (!neutral && option === q.correct) {
        button.classList.add('correct');
        button.querySelector('.answer-mark').textContent = '✓';
        button.setAttribute('aria-label', `${option}. ${q.options[option]}. Correct answer.`);
      } else if (!neutral && option === letter) {
        button.classList.add('incorrect');
        button.querySelector('.answer-mark').textContent = '✕';
        button.setAttribute('aria-label', `${option}. ${q.options[option]}. Incorrect answer.`);
      }
    });
    const feedback = document.getElementById('feedback');
    feedback.textContent = neutral ? '' : correct ? '✓ Correct!' : `✕ Not quite. The correct answer is ${q.correct}.`;
    if (!neutral) feedback.classList.add(correct ? 'correct-text' : 'wrong-text');
    if (!neutral && !correct) showFeedback(q);
    const next = document.getElementById('next');
    next.hidden = false;
    next.focus({ preventScroll: true });
  }
  function showFeedback(q) {
    const character = data.characters[q.character];
    const side = q.side === 'right' ? 'right' : 'left';
    let visibleRails = 0;
    if (character || q.explanation) {
      const rail = rails[side];
      rail.innerHTML = `<div class="speech"><span class="speaker">${escape(character?.name || 'Explanation')}</span><p>${escape(q.explanation)}</p></div>${character ? `<img class="character" src="${escape(character.src)}" alt="${escape(character.alt)}">` : ''}`;
      rail.hidden = false;
      visibleRails += 1;
    }
    if (q.image?.src) {
      const rail = rails[side === 'left' ? 'right' : 'left'];
      let credit = escape(q.image.credit || '');
      if (q.image.sourceUrl && /^https?:\/\//i.test(q.image.sourceUrl)) credit = `<a href="${escape(q.image.sourceUrl)}" target="_blank" rel="noopener noreferrer">${credit || 'Image source'}</a>`;
      rail.innerHTML = `<figure class="evidence"><img src="${escape(q.image.src)}" alt="${escape(q.image.alt || '')}"><figcaption>${escape(q.image.caption || '')}${credit ? `<span class="source">${credit}</span>` : ''}</figcaption></figure>`;
      rail.hidden = false;
      const evidenceImage = rail.querySelector('img');
      evidenceImage.addEventListener('error', () => {
        rail.hidden = true;
        visibleRails -= 1;
        scene.classList.toggle('single-feedback', visibleRails === 1);
        scene.classList.toggle('has-feedback', visibleRails > 0);
      }, { once: true });
      visibleRails += 1;
    }
    scene.classList.toggle('has-feedback', visibleRails > 0);
    scene.classList.toggle('single-feedback', visibleRails === 1);
  }
  function results() {
    clearRails();
    const result = quiz.passed ? data.results.high : data.results.low;
    panel.className = 'panel results';
    panel.innerHTML = `<p class="eyebrow">YOUR EXPLORATION, COMPLETE</p><h2 class="result-title" id="screen-title" tabindex="-1">${escape(result.title)}</h2>
      <div class="score" aria-label="${quiz.score} out of ${quiz.scoredTotal} correct answers"><span class="score-value">${quiz.score}</span><span class="score-total">/ ${quiz.scoredTotal}</span></div>
      <div class="result-speech">${escape(result.text)}</div><div class="result-characters">${result.characters.map(character => `<img src="${escape(character.src)}" alt="${escape(character.alt)}">`).join('')}</div>
      <div class="result-footer"><span class="small-note">Your score is just for you.<br>A fresh start is always welcome.</span><button class="primary" id="restart">Play again <span class="arrow" aria-hidden="true">↻</span></button></div>`;
    document.getElementById('footer-note').textContent = 'KEEP EXPLORING';
    document.getElementById('restart').addEventListener('click', () => { quiz.reset(); intro(true); revealPanelTop(); });
    focusTitle();
    revealPanelTop();
  }
  intro();
})();
