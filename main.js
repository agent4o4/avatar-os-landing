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

function handleSubmit(formEl) {
  const card = formEl.closest('.signup-card');
  const name  = formEl.querySelector('[name="name"]').value.trim();
  const email = formEl.querySelector('[name="email"]').value.trim();
  if (!name || !email) return;
  console.log('Signup:', { name, email });
  card.classList.add('success');
}

form.addEventListener('submit', (e) => { e.preventDefault(); handleSubmit(form); });

const form2 = document.getElementById('signupForm2');
const card2 = form2.closest('.signup-card');
card2.insertAdjacentHTML('beforeend', successHtml);
form2.addEventListener('submit', (e) => { e.preventDefault(); handleSubmit(form2); });
