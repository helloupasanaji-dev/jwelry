import './style.css'
import './cart.js'

const products = {
  ring: {
    name: 'Golden Hour Ring',
    category: 'RINGS · EVERYDAY FAVORITES',
    finish: 'Warm gold finish',
    description: 'A simple, bright accent for everyday wear. Its timeless shape makes it easy to wear on its own or alongside your favorite pieces.',
    art: 'product-art-one',
    shape: 'product-ring',
  },
  pendant: {
    name: 'Everyday Pendant',
    category: 'NECKLACES · EVERYDAY FAVORITES',
    finish: 'Gold finish · Delicate chain',
    description: 'A delicate pendant designed to bring a soft touch of shine to your everyday look and special occasions alike.',
    art: 'product-art-two',
    shape: 'product-pendant',
  },
  hoops: {
    name: 'Little Glow Hoops',
    category: 'EARRINGS · EVERYDAY FAVORITES',
    finish: 'Gold finish · Lightweight',
    description: 'Lightweight hoops with a classic silhouette. A versatile pair that feels right at home from daytime plans to evening outings.',
    art: 'product-art-three',
    shape: 'product-hoop',
  },
  bracelet: {
    name: 'Golden Thread Bracelet', category: 'BRACELETS · EVERYDAY FAVORITES',
    finish: 'Gold finish · Easy to layer',
    description: 'A graceful bracelet with a warm golden finish, made to complement your everyday style or layer with your favorite pieces.',
    art: 'product-art-four', shape: 'bracelet-shape',
  },
  anklet: {
    name: 'Soft Shine Anklet', category: 'ANKLETS · EVERYDAY FAVORITES',
    finish: 'Gold finish · Delicate chain',
    description: 'A delicate anklet with a subtle touch of shine. Wear it on its own for an understated accent.',
    art: 'product-art-five', shape: 'anklet-shape',
  },
  'pearl-studs': {
    name: 'Pearl Day Studs', category: 'EARRINGS · EVERYDAY FAVORITES',
    finish: 'Pearl detail · Classic style',
    description: 'Classic stud earrings with a soft pearl-inspired look, easy to wear from day to day or give as a thoughtful gift.',
    art: 'product-art-six', shape: 'stud-shape',
  },
  'charm-bracelet': {
    name: 'Little Charms Bracelet', category: 'BRACELETS · EVERYDAY FAVORITES',
    finish: 'Gold finish · Gift favorite',
    description: 'A playful bracelet with little decorative charms and a warm golden tone. A lovely choice for gifting or keeping.',
    art: 'product-art-seven', shape: 'charm-shape',
  },
  'stacking-ring': {
    name: 'Dainty Stacking Ring', category: 'RINGS · EVERYDAY FAVORITES',
    finish: 'Gold finish · Minimal style',
    description: 'A fine, simple band designed to wear on its own or stack with other rings for a personal look.',
    art: 'product-art-eight', shape: 'stack-ring-shape',
  },
  'drop-earrings': {
    name: 'Golden Drop Earrings', category: 'EARRINGS · EVERYDAY FAVORITES',
    finish: 'Gold finish · Statement style',
    description: 'Elegant drop earrings with a polished golden look, made to add a little extra shine to a special occasion.',
    art: 'product-art-nine', shape: 'drop-shape',
  },
  'green-diamond-ring': {
    name: 'Modern Green Diamond Ring', category: 'MODERN GREEN · RINGS',
    finish: 'Green center stone · Modern setting',
    description: 'A contemporary ring concept featuring a vivid green center stone and a clean, modern silhouette. Ask us for confirmed stone, material, sizing, and availability details.',
    art: 'product-art-green', shape: 'emerald-gem',
  },
  'green-diamond-pendant': {
    name: 'Green Diamond Pendant', category: 'MODERN GREEN · NECKLACES',
    finish: 'Green center stone · Gold finish',
    description: 'A modern pendant concept pairing a rich green center stone with a warm gold-tone finish. Ask us for confirmed stone, chain, material, and availability details.',
    art: 'product-art-green-two', shape: 'green-pendant-shape',
  },
  'red-bangles': {
    name: 'Ruby Red Bangles', category: 'BANGLES · COLOR COLLECTION',
    finish: 'Red enamel look · Gold accents',
    description: 'A bold bangle design with a rich red finish and warm gold-tone accents. Ask us for confirmed materials, size, and availability details.',
    art: 'product-art-red', shape: 'red-bangle-shape',
  },
  'pearl-necklace': {
    name: 'Pearl Glow Necklace', category: 'PEARL JEWELRY · NECKLACES',
    finish: 'Pearl detail · Delicate chain',
    description: 'A soft, classic necklace concept with luminous pearl details and a delicate chain. Ask us for confirmed materials, length, and availability.',
    art: 'product-art-pearl', shape: 'pearl-necklace-shape',
  },
  'classic-bangles': {
    name: 'Classic Gold Bangles', category: 'BANGLES · CLASSIC COLLECTION',
    finish: 'Gold finish · Set of two',
    description: 'A timeless pair of gold-tone bangles with a clean, versatile shape. Ask us to confirm the materials, sizing, and availability.',
    art: 'product-art-classic-bangles', shape: 'classic-bangle-shape',
  },
  'layered-necklace': {
    name: 'Dainty Layering Necklace', category: 'NECKLACES · EVERYDAY FAVORITES',
    finish: 'Gold finish · Layered design',
    description: 'A delicate layered necklace concept that adds a little dimension to everyday outfits. Ask us to confirm chain length, material, and availability.',
    art: 'product-art-necklace', shape: 'layer-necklace-shape',
  },
  'rubans-earrings': {
    name: 'Rubans Festive Earrings', category: 'RUBANS · FESTIVE JEWELRY',
    finish: 'Statement style · Festive look',
    description: 'A sample festive earring design with a bold silhouette. Confirm brand, materials, and availability before purchase.',
    art: 'product-art-rubans', shape: 'rubans-earring-shape',
  },
  'zaveri-pearls-set': {
    name: 'Zaveri Pearls Necklace Set', category: 'ZAVERI PEARLS · NECKLACES',
    finish: 'Pearl look · Occasion wear',
    description: 'A sample pearl-style necklace set for special occasions. Confirm brand, materials, and availability before purchase.',
    art: 'product-art-zaveri', shape: 'zaveri-pearl-shape',
  },
  'german-silver-chain': {
    name: 'Unisex German Silver Chain', category: 'GERMAN SILVER · UNISEX',
    finish: 'Oxidized silver look · Unisex style',
    description: 'A sample unisex chain concept with a traditional oxidized-silver look. Confirm the exact alloy and product details before purchase.',
    art: 'product-art-silver', shape: 'silver-chain-shape',
  },
  'sangria-stone-pendant': {
    name: 'Sangria Stone Pendant', category: 'SANGRIA · STONE JEWELRY',
    finish: 'Colorful stone look · Pendant',
    description: 'A sample pendant design with a colorful center stone. Confirm the stone type, materials, and brand availability before purchase.',
    art: 'product-art-sangria', shape: 'sangria-stone-shape',
  },
  'peora-saree-chain': {
    name: 'Peora Saree Chain', category: 'PEORA · SAREE CHAINS',
    finish: 'Traditional style · Long chain',
    description: 'A sample long-chain concept styled for saree looks. Confirm brand, length, materials, and availability before purchase.',
    art: 'product-art-peora', shape: 'peora-chain-shape',
  },
  'snz-kada-bracelet': {
    name: 'Jewels Galaxy SNZ Kada Bracelet', category: 'KADA BRACELETS · JEWELS GALAXY',
    finish: 'Gold-tone sample · Kada style',
    description: 'A sample kada bracelet listing based on your requested style. Confirm the exact brand, materials, size, and availability before purchase.',
    art: 'product-art-snz', shape: 'snz-kada-shape',
  },
  'giva-toe-rings-black': {
    name: 'GIVA Toe Rings · Black', category: 'TOE RINGS · BLACK',
    finish: 'Black finish · Sample style',
    description: 'A sample black toe-ring style listing. Confirm the brand, material, sizing, and availability before purchase.',
    art: 'product-art-black', shape: 'toe-ring-shape',
  },
  'giva-toe-rings-blue': {
    name: 'GIVA Toe Rings · Blue', category: 'TOE RINGS · BLUE',
    finish: 'Blue finish · Sample style',
    description: 'A sample blue toe-ring style listing. Confirm the brand, material, sizing, and availability before purchase.',
    art: 'product-art-blue', shape: 'toe-ring-shape',
  },
}

const selected = products[new URLSearchParams(location.search).get('item')] ?? products.ring

document.querySelector('#product-app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Upasana Jeweler home">UPASANA<span>JEWELER</span></a>
    <nav aria-label="Main navigation">
      <a href="/">Home</a><a href="products.html?category=kids">Kids</a><a href="products.html?category=women">Women</a><a href="products.html?category=men">Men</a><a href="products.html?category=beauty">Beauty</a><a href="products.html?category=genz">GenZ</a><a href="products.html?category=studio">Studio</a>
    </nav>
    <a class="shop-link" href="products.html">Shop now <span aria-hidden="true">↗</span></a>
  </header>
  <main class="product-page">
    <p class="breadcrumbs"><a href="/">Home</a><span aria-hidden="true">/</span><a href="collections.html">Collections</a><span aria-hidden="true">/</span>${selected.name}</p>
    <section class="product-detail" aria-labelledby="detail-title">
      <div class="detail-art ${selected.art}" role="img" aria-label="Illustration of ${selected.name}">
        <span class="${selected.shape}"></span>
      </div>
      <div class="detail-copy">
        <p class="eyebrow">${selected.category}</p>
        <h1 id="detail-title">${selected.name}</h1>
        <p class="detail-finish">${selected.finish}</p>
        <p class="sample-price">Ask us for price</p>
        <p class="detail-description">${selected.description}</p>
        <div class="detail-rule"></div>
        <ul class="detail-points">
          <li>Thoughtful details</li>
          <li>Easy to style and gift</li>
          <li>Contact us for availability</li>
        </ul>
        <button class="hero-button add-to-cart" type="button" data-product-id="${new URLSearchParams(location.search).get('item') ?? 'ring'}" data-product-name="${selected.name}">Add to cart <span aria-hidden="true">＋</span></button>
        <a class="hero-button detail-contact" href="contact.html">Ask about this piece <span aria-hidden="true">→</span></a>
        <p class="detail-note">Product details and availability may vary. Please contact us to learn more.</p>
      </div>
    </section>
    <section class="more-products">
      <div class="section-heading"><p class="eyebrow">KEEP EXPLORING</p><h2>Find another favorite</h2></div>
      <div class="detail-links"><a href="products.html">See all products <span>↗</span></a></div>
    </section>
  </main>
  <footer class="site-footer">
    <a class="footer-brand" href="/">UPASANA <span>JEWELER</span></a>
    <p>Women's jewelry to make every moment shine.</p>
    <a class="footer-phone" href="tel:9616890070">Call us: 9616890070</a>
    <nav aria-label="Footer navigation"><a href="collections.html">Collections</a><a href="about.html">Our Story</a><a href="contact.html">Contact</a></nav>
    <small>© ${new Date().getFullYear()} Upasana Jeweler. All rights reserved.</small>
  </footer>
`
