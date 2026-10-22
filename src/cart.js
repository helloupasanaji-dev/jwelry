const storageKey = 'upasana-jeweler-cart'

function readCart() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) ?? '[]')
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

function renderCart() {
  const cart = readCart()
  const count = cart.reduce((total, item) => total + item.quantity, 0)
  const countBadge = document.querySelector('.cart-count')
  const list = document.querySelector('.cart-items')
  if (countBadge) countBadge.textContent = String(count)
  if (!list) return
  list.replaceChildren()
  if (cart.length === 0) {
    const empty = document.createElement('p')
    empty.className = 'cart-empty'
    empty.textContent = 'Your cart is empty.'
    list.append(empty)
    return
  }
  for (const item of cart) {
    const row = document.createElement('div')
    row.className = 'cart-row'
    const name = document.createElement('span')
    name.textContent = item.name
    const quantity = document.createElement('span')
    quantity.textContent = `× ${item.quantity}`
    row.append(name, quantity)
    list.append(row)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.site-footer')
  if (!footer) return

  const cartButton = document.createElement('button')
  cartButton.className = 'footer-cart'
  cartButton.type = 'button'
  cartButton.setAttribute('aria-label', 'Open shopping cart')
  cartButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 9H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg><span>Cart</span><b class="cart-count">0</b>'
  const panel = document.createElement('section')
  panel.className = 'cart-panel'
  panel.setAttribute('aria-label', 'Shopping cart')
  panel.hidden = true
  panel.innerHTML = '<div class="cart-panel-heading"><h2>Your cart</h2><button class="cart-close" type="button" aria-label="Close cart">×</button></div><div class="cart-items"></div><a class="hero-button cart-contact" href="contact.html">Ask us to order <span aria-hidden="true">→</span></a>'
  footer.append(cartButton, panel)

  cartButton.addEventListener('click', () => {
    panel.hidden = !panel.hidden
    renderCart()
  })
  panel.querySelector('.cart-close').addEventListener('click', () => { panel.hidden = true })
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.add-to-cart')
    if (!button) return
    const cart = readCart()
    const id = button.dataset.productId
    const existing = cart.find((item) => item.id === id)
    if (existing) existing.quantity += 1
    else cart.push({ id, name: button.dataset.productName, quantity: 1 })
    localStorage.setItem(storageKey, JSON.stringify(cart))
    renderCart()
    button.classList.add('added')
    button.innerHTML = 'Added to cart <span aria-hidden="true">✓</span>'
  })
  window.addEventListener('storage', renderCart)
  renderCart()
})
