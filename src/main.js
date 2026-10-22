import './style.css'
import './cart.js'

const categories = [
  ['WFH Casual Wear', '40–80% OFF', 'wfh', 'Women in relaxed everyday fashion'],
  ['Ethnic Wear', '50–70% OFF', 'ethnic', 'Colorful festive ethnic fashion'],
  ['Western Wear', '50–70% OFF', 'western', 'Contemporary western fashion'],
  ['Innerwear & Sleepwear', 'UP TO 70% OFF', 'sleepwear', 'Soft loungewear collection'],
  ['Activewear', '30–70% OFF', 'activewear', 'Activewear and fitness style'],
  ['Beauty & Makeup', 'UP TO 80% OFF', 'beauty', 'Beauty and makeup essentials'],
  ['Kids Wear', '40–70% OFF', 'kids', 'Kids occasion wear'],
  ['Footwear', '40–80% OFF', 'footwear', 'Women’s footwear'],
  ['Handbags & Bags', '40–80% OFF', 'bags', 'Everyday handbags'],
  ['Watches', 'UP TO 70% OFF', 'watches', 'Watches for every day'],
  ['Jewellery', 'UP TO 80% OFF', 'jewellery', 'Jewellery made to shine'],
  ['Home Furnishings', '40–70% OFF', 'home', 'Warm home accents'],
]

document.querySelector('#app').innerHTML = `
  <header class="market-header">
    <a class="market-brand" href="/" aria-label="Upasana Jeweler home"><span class="brand-mark">U</span></a>
    <nav class="market-nav" aria-label="Main navigation">
      <a href="products.html?category=men">MEN</a>
      <a href="products.html?category=women">WOMEN</a>
      <a href="products.html?category=kids">KIDS</a>
      <a href="products.html?category=home">HOME</a>
      <a href="products.html?category=beauty">BEAUTY</a>
      <a href="products.html?category=genz">GENZ</a>
      <a href="products.html?category=studio">STUDIO <sup>NEW</sup></a>
    </nav>
    <form class="market-search" role="search" action="products.html">
      <button type="submit" aria-label="Search">⌕</button>
      <input type="search" name="q" placeholder="Search for products, brands and more" aria-label="Search products" />
    </form>
    <a class="market-profile" href="profile.html" aria-label="Your profile"><span>♙</span><small>Profile</small></a>
    <a class="market-bag" href="products.html" aria-label="Shopping bag"><span>♧</span><small>Bag</small></a>
  </header>
  <main class="market-home" id="home">
    <div class="market-intro"><span>THE BIG STYLE EDIT</span><h1>Find your kind of <em>everyday</em></h1><p>Fresh finds, feel-good prices, and a little something for everyone.</p></div>
    <section class="offer-grid" aria-label="Shop category offers">
      ${categories.map(([name, offer, photo, alt]) => `<a class="offer-card" href="${name === 'Jewellery' ? 'collections.html' : 'products.html'}" aria-label="${name}, ${offer}, shop now">
        <div class="offer-photo"><img src="/category-${photo}.jpg" alt="${alt}" loading="lazy" /></div>
        <div class="offer-copy"><h2>${name}</h2><strong>${offer}</strong><span>Shop Now <b aria-hidden="true">→</b></span></div>
      </a>`).join('')}
    </section>
    <div class="market-footnote">A little more style, a lot more you. <a href="collections.html">Explore jewellery <span aria-hidden="true">→</span></a></div>
  </main>
  <footer class="market-footer"><a href="/">UPASANA <span>JEWELER</span></a><span>Made for every side of you.</span><a href="contact.html">Need help? Contact us</a></footer>
`
