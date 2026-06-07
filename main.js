const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/agent404@proton.me';

// Inject success message markup into a card
function injectSuccess(card) {
  card.insertAdjacentHTML('beforeend', `
    <div class="success-message">
      <div class="success-icon">◈</div>
      <p class="success-title">// signal.received</p>
      <p class="success-body">You're in. Keep an eye on your inbox.</p>
    </div>`);
}

async function handleSubmit(formEl) {
  const card  = formEl.closest('.signup-card');
  const name  = formEl.querySelector('[name="name"]').value.trim();
  const email = formEl.querySelector('[name="email"]').value.trim();
  if (!name || !email) return;

  const btn = formEl.querySelector('.cta-btn');
  btn.disabled = true;
  btn.querySelector('.btn-text').textContent = 'Sending…';

  try {
    const res = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, _subject: 'AvatarOS — New Early Access Signup' })
    });

    if (res.ok) {
      card.classList.add('success');
    } else {
      throw new Error('Network response not ok');
    }
  } catch (err) {
    btn.disabled = false;
    btn.querySelector('.btn-text').textContent = 'Get Early Access';
    console.error('Submission error:', err);
    // Fallback: show a gentle error without breaking the UI
    const disclaimer = card.querySelector('.form-disclaimer');
    if (disclaimer) disclaimer.textContent = 'Something went wrong. Please try again.';
  }
}

// Wire up both forms
const form  = document.getElementById('signupForm');
const form2 = document.getElementById('signupForm2');

injectSuccess(form.closest('.signup-card'));
injectSuccess(form2.closest('.signup-card'));

form.addEventListener('submit',  (e) => { e.preventDefault(); handleSubmit(form);  });
form2.addEventListener('submit', (e) => { e.preventDefault(); handleSubmit(form2); });
