/* Edit this file to replace the temporary content. No page code needs changing.
 * Options use A/B/C/D keys. On screen they are arranged A B / C D.
 * correct: null means no marking and no points.
 * image: null hides the evidence area completely. To add one:
 * image: { src: 'assets/your-image.jpg', alt: 'Describe the image',
 *          caption: 'Your caption', credit: 'Image source', sourceUrl: 'https://…' }
 */
window.QUIZ_DATA = {
  title: 'Archaeology & modern life',
  course: '[Course title]',
  introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  creators: ['[Creator 1]', '[Creator 2]'],
  characters: {
    laraStanding: { src: 'assets/lara-standing.png', alt: 'Lara Croft', name: 'Lara Croft' },
    indianaWhip: { src: 'assets/indiana-whip.png', alt: 'LEGO Indiana Jones holding his whip', name: 'Indiana Jones' },
    laraAction: { src: 'assets/lara-action.png', alt: 'Lara Croft in an action pose', name: 'Lara Croft' }
  },
  results: {
    high: {
      title: 'Let’s go digging!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      characters: [
        { src: 'assets/lara-finale.png', alt: 'Lara Croft' },
        { src: 'assets/indiana-smiling-transparent.png', alt: 'Smiling LEGO Indiana Jones' }
      ]
    },
    low: {
      title: 'There’s more to discover.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      characters: [
        { src: 'assets/lara-encouragement-transparent.png', alt: 'LEGO Lara Croft' },
        { src: 'assets/indiana-encouragement-transparent.png', alt: 'LEGO Indiana Jones touching his hat' }
      ]
    }
  },
  questions: [
    { id: 1, text: 'Does archaeology have an impact on our lives today?', options: { A: 'No, I’m sure it doesn’t.', B: 'Archaeology? What’s that?', C: 'Maybe, I don’t really know.', D: 'Yes, absolutely!' }, correct: null, character: null, side: 'left', explanation: '', image: null },
    { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'A', character: 'laraStanding', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'D', character: 'indianaWhip', side: 'right', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'B', character: 'laraAction', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'C', character: 'laraStanding', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 6, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'C', character: 'indianaWhip', side: 'right', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 7, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'A', character: 'laraAction', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 8, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'D', character: 'laraStanding', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 9, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'D', character: 'indianaWhip', side: 'right', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 10, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'B', character: 'laraAction', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 11, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'A', character: 'laraStanding', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 12, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'C', character: 'indianaWhip', side: 'right', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 13, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'C', character: 'laraAction', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 14, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'A', character: 'laraStanding', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 15, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'D', character: 'indianaWhip', side: 'right', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 16, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'C', character: 'laraAction', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 17, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'B', character: 'laraStanding', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 18, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'A', character: 'indianaWhip', side: 'right', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 19, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', options: { A: 'Lorem ipsum dolor sit amet.', B: 'Consectetur adipiscing elit.', C: 'Sed do eiusmod tempor.', D: 'Ut labore et dolore magna.' }, correct: 'D', character: 'laraAction', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null },
    { id: 20, text: 'Does archaeology have an impact on our lives today?', options: { A: 'No, I’m sure it doesn’t.', B: 'Archaeology? What’s that?', C: 'Maybe, I don’t really know.', D: 'Yes, absolutely!' }, correct: 'D', character: 'laraStanding', side: 'left', explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: null }
  ]
};
