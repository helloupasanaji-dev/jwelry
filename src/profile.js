import './style.css'
import './cart.js'

document.querySelector('#profile-app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Upasana Jeweler home">UPASANA<span>JEWELER</span></a>
    <nav aria-label="Main navigation"><a href="/">Home</a><a href="products.html?category=kids">Kids</a><a href="products.html?category=women">Women</a><a href="products.html?category=men">Men</a><a href="products.html?category=beauty">Beauty</a><a href="products.html?category=genz">GenZ</a><a href="products.html?category=studio">Studio</a></nav>
    <a class="shop-link" href="products.html">Shop now <span aria-hidden="true">↗</span></a>
  </header>
  <main class="profile-page">
    <section class="content-page-heading"><p class="eyebrow">YOUR ACCOUNT</p><h1>Your profile</h1><p>Save your details in this browser for a quicker visit next time.</p></section>
    <form class="profile-form" id="profile-form">
      <label>Full name<input name="name" autocomplete="name" placeholder="Your name" required /></label>
      <label>Email address<input name="email" type="email" autocomplete="email" placeholder="you@example.com" /></label>
      <label>Phone number<input name="phone" type="tel" autocomplete="tel" placeholder="Your phone number" /></label>
      <label>Address<textarea name="address" autocomplete="street-address" rows="3" placeholder="Your delivery address"></textarea></label>
      <button class="hero-button" type="submit">Save profile <span aria-hidden="true">→</span></button>
      <p class="profile-status" role="status" aria-live="polite"></p>
    </form>
  </main>
  <footer class="site-footer">
    <a class="footer-brand" href="/">UPASANA <span>JEWELER</span></a><p>Women's jewelry to make every moment shine.</p><a class="footer-phone" href="tel:9616890070">Call us: 9616890070</a>
    <nav aria-label="Footer navigation"><a href="collections.html">Collections</a><a href="products.html">Products</a><a href="about.html">Our Story</a><a href="contact.html">Contact</a><a href="profile.html">Profile</a></nav>
    <small>© ${new Date().getFullYear()} Upasana Jeweler. All rights reserved.</small>
  </footer>
`

const form = document.querySelector('#profile-form')
const status = document.querySelector('.profile-status')
try {
  const saved = JSON.parse(localStorage.getItem('upasana-jeweler-profile') ?? '{}')
  for (const [field, value] of Object.entries(saved)) {
    if (form.elements[field]) form.elements[field].value = value
  }
} catch {
  localStorage.removeItem('upasana-jeweler-profile')
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const profile = Object.fromEntries(new FormData(form).entries())
  localStorage.setItem('upasana-jeweler-profile', JSON.stringify(profile))
  status.textContent = 'Your profile has been saved on this device.'
})
