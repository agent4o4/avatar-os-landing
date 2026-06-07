const form = document.getElementById('signupForm');
const card = form.closest('.signup-card');

// Inject success message markup once
const successHtml = `
  <div class="success-message">
    <div class="success-icon">◈</div>
    <p class="success-title">// signal.received</p>
    <p class="success-body">You're in. Early access incoming.</p>
  </div>`;
card.insertAdjacentHTML('beforeend', successHtml);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name  = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!name || !email) return;

  // Replace with real API call / form service when ready
  console.log('Signup:', { name, email });

  card.classList.add('success');
});
