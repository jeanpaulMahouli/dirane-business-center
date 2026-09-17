// Toggle FAQ items
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach((el) => {
      el.classList.remove('open');
      const span = el.querySelector('.faq-question span');
      if (span) span.textContent = '+';
      const answer = el.querySelector('.faq-answer');
      if (answer && el !== item) answer.remove();
    });

    if (!isOpen) {
      item.classList.add('open');
      const span = item.querySelector('.faq-question span');
      if (span) span.textContent = '\u2212';
      if (!item.querySelector('.faq-answer')) {
        const answer = document.createElement('div');
        answer.className = 'faq-answer';
        answer.textContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        item.appendChild(answer);
      }
    }
  });
});

// Play button video placeholder
const playBtn = document.querySelector('.play-btn');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    alert('Lecture de la vidéo de présentation (à connecter à votre lecteur vidéo).');
  });
}

// Search tabs toggle
document.querySelectorAll('.search-tabs .tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.search-tabs .tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
