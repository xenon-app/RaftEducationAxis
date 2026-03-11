document.querySelectorAll('[data-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.toggle);
    target?.classList.toggle('open');
    button.textContent = target?.classList.contains('open') ? 'Hide Details' : 'View Details';
  });
});

const detail = document.getElementById('course-detail');
document.querySelectorAll('.course-card').forEach((card) => {
  card.addEventListener('click', () => {
    const classNo = card.dataset.class;
    const board = card.closest('.board-section')?.querySelector('h2')?.textContent ?? 'Board';
    if (!detail) return;
    detail.innerHTML = `
      <h3>${board} • Class ${classNo} Science & Math</h3>
      <p>Includes conceptual classes, weekly tests, doubt sessions, and progress tracking.</p>
      <a class="btn primary" href="contact.html">Enroll Now</a>
    `;
  });
});
