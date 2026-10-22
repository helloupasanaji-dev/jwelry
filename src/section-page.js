import './style.css'
import './cart.js'

const sectionName = location.pathname.split('/').pop().replace('.html', '')
const requestedAudience = new URLSearchParams(location.search).get('category')
const productAudience = ['women', 'men', 'kids', 'beauty'].includes(requestedAudience) ? requestedAudience : 'all'
const requestedBeautyBrand = new URLSearchParams(location.search).get('brand')
const beautyBrand = ['maybelline', 'lakme', 'ponds', 'sotrue', 'etude'].includes(requestedBeautyBrand) ? requestedBeautyBrand : 'all'
const beautyProducts = [
  ['Maybelline', 'Serum Bullet Lipstick – 012', 'Lips · 8-hour hydration · Matte', 'lipstick-rose', 'https://www.maybelline.co.in/all-products/lips/lipstick', 497, 599, '17% OFF', '4.7', '72'],
  ['Maybelline', 'Fit Me Nude Glow BB Cream · Shade 20', 'Face · SPF 50 · 24H hydration', 'bbcream', 'https://www.maybelline.co.in/all-products/face/bb-cream/fit-me-bb-nude-glow-bb-cream', 364, 429, '15% OFF', '4.4', '2.3k'],
  ['Lakmé', 'Xtraordin-airy Foundation', 'Face · Foundation', 'foundation', 'https://www.lakmeindia.com/collections/lakme-india', 527, 1099, '52% OFF', '4.6', '50.6k'],
  ['Lakmé', 'Eyeconic Kajal · Classic Brown', 'Eyes · Kajal', 'kajal', 'https://www.lakmeindia.com/products/lakme-9-to-5-eyeconic-kajal', 179, 299, '40% OFF', '4.5', '49.4k'],
  ['Maybelline', 'Instant Age Rewind Concealer · 110', 'Face · Concealer', 'concealer', 'https://www.maybelline.co.in/all-products', 559, 799, '30% OFF', '4.4', '55.4k'],
  ['Maybelline', 'Fit Me Compact · Ivory 115', 'Face · Compact powder', 'compact', 'https://www.maybelline.co.in/all-products', 167, 239, '30% OFF', '4.4', '187.7k'],
  ['Lakmé', 'Eyeconic Liquid Eyeliner', 'Eyes · Liquid eyeliner', 'eyeliner', 'https://www.lakmeindia.com/products/lakme-eyeconic-liquid-eyeliner', 169, 325, '48% OFF', '4.5', '82.3k'],
  ['Maybelline', 'Fit Me Nude Glow BB Cream · Shade 40', 'Face · SPF 50 · 24H hydration', 'bbcream-deep', 'https://www.maybelline.co.in/all-products/face/bb-cream/fit-me-bb-nude-glow-bb-cream', 351, 429, '18% OFF', '4.4', '2.3k'],
  ['SOTRUE', 'Highlighter for Face · 30 g', 'Face · Highlighter', 'highlighter', 'https://www.sotrue.in/products/strobe-cream', 259, 349, '26% OFF', '4.3', '14.3k'],
  ['ETUDE', 'Dear Darling Water Tint · 04 Red Grape Ade', 'Lips · Water tint', 'watertint', 'https://int.etude.com/product/product-line/dear-darling/', 382, 450, '15% OFF', '4.5', '47k'],
  ['Maybelline', 'Superstay Matte Ink Liquid Lipstick', 'Lips · Liquid lipstick', 'lipstick', 'https://www.maybelline.co.in/all-products/lips/lipstick/superstay-matte-ink?variant=Savant%2F'],
  ['Maybelline', 'Sensational Liquid Matte Lipstick', 'Lips · Liquid lipstick', 'lipstick-soft', 'https://www.maybelline.co.in/all-products/lips/lipstick'],
  ['Maybelline', 'Superstay Vinyl Ink Liquid Lipstick', 'Lips · Vinyl ink', 'lipstick-shine', 'https://www.maybelline.co.in/all-products/lips/lipstick'],
  ['Maybelline', 'Color Sensational Creamy Matte Lipstick', 'Lips · Creamy matte', 'lipstick-rose', 'https://www.maybelline.co.in/all-products/lips/lipstick'],
  ['Lakmé', '9 to 5 Eyeconic Kajal', 'Eyes · Kajal', 'kajal', 'https://www.lakmeindia.com/products/lakme-9-to-5-eyeconic-kajal'],
  ['Lakmé', '9to5 Hya Matte Pressed Powder', 'Face · Pressed powder', 'compact', 'https://www.lakmeindia.com/products/lakme-9to5-hya-matte-pressed-powder'],
  ['Lakmé', 'Eyeconic Kajal Twin Pack', 'Eyes · Kajal set', 'kajal-pair', 'https://www.lakmeindia.com/collections/kajal-kohl'],
  ['Lakmé', 'Micellar Water for Makeup Removal', 'Face · Makeup remover', 'micellar', 'https://www.lakmeindia.com/collections/single-products'],
  ["POND'S", 'Bright Beauty Vit C+E+A Gel Face Wash', 'Face · Cleanser', 'facewash', 'https://ponds.in/products/ponds-bright-beauty-vit-c-e-a-gel-face-wash'],
  ["POND'S", 'Bright Beauty Anti-Spot Serum Cream SPF 15', 'Face · Serum cream', 'serumcream', 'https://ponds.in/products/bright-beauty-anti-spot-serum-cream-niacinamide-spf-15'],
  ["POND'S", 'Bright Beauty 12% Vit C+E+A Serum', 'Face · Serum', 'serum', 'https://ponds.in/collections/vit-c-e-a'],
  ["POND'S", 'Bright Beauty 1% Vit C+E+A Gel Crème', 'Face · Gel crème', 'gelcream', 'https://ponds.in/collections/vit-c-e-a'],
]
const beautyBrandKey = (brand) => ({ 'Lakmé': 'lakme', "POND'S": 'ponds', SOTRUE: 'sotrue', ETUDE: 'etude' })[brand] ?? 'maybelline'
const beautyPage = `
  <div class="beauty-shop-layout">
    <aside class="beauty-brand-sidebar" aria-label="Filter beauty products by brand">
      <h2>Beauty</h2>
      <p class="sidebar-label">Brands</p>
      <nav class="beauty-brand-nav" aria-label="Beauty brands">
        <a href="products.html?category=beauty" class="${beautyBrand === 'all' ? 'is-active' : ''}" ${beautyBrand === 'all' ? 'aria-current="page"' : ''}>All beauty</a>
        <a href="products.html?category=beauty&brand=maybelline" class="${beautyBrand === 'maybelline' ? 'is-active' : ''}" ${beautyBrand === 'maybelline' ? 'aria-current="page"' : ''}>Maybelline</a>
        <a href="products.html?category=beauty&brand=lakme" class="${beautyBrand === 'lakme' ? 'is-active' : ''}" ${beautyBrand === 'lakme' ? 'aria-current="page"' : ''}>Lakmé</a>
        <a href="products.html?category=beauty&brand=ponds" class="${beautyBrand === 'ponds' ? 'is-active' : ''}" ${beautyBrand === 'ponds' ? 'aria-current="page"' : ''}>POND'S</a>
        <a href="products.html?category=beauty&brand=sotrue" class="${beautyBrand === 'sotrue' ? 'is-active' : ''}" ${beautyBrand === 'sotrue' ? 'aria-current="page"' : ''}>SOTRUE</a>
        <a href="products.html?category=beauty&brand=etude" class="${beautyBrand === 'etude' ? 'is-active' : ''}" ${beautyBrand === 'etude' ? 'aria-current="page"' : ''}>ETUDE</a>
      </nav>
      <p class="beauty-source-note">Offer prices and ratings shown on the added cards are copied from your reference image. Confirm current pricing, shades, and availability with the seller.</p>
      <div class="beauty-full-ranges"><span>Full brand ranges</span><a href="https://www.maybelline.co.in/all-products/lips/lipstick" target="_blank" rel="noopener noreferrer">Maybelline lipsticks ↗</a><a href="https://www.lakmeindia.com/collections/lakme-india" target="_blank" rel="noopener noreferrer">All Lakmé products ↗</a><a href="https://ponds.in/" target="_blank" rel="noopener noreferrer">All POND'S products ↗</a></div>
    </aside>
    <div class="beauty-results">
      <p class="filter-result">${beautyProducts.filter(([brand]) => beautyBrand === 'all' || beautyBrandKey(brand) === beautyBrand).length} products</p>
      <div class="product-grid beauty-product-grid">
        ${beautyProducts.filter(([brand]) => beautyBrand === 'all' || beautyBrandKey(brand) === beautyBrand).map(([brand, name, type, art, link, price, mrp, discount, rating, reviews]) => `<a class="beauty-product-card" href="${link}" target="_blank" rel="noopener noreferrer">
          <span class="beauty-product-art ${art}" aria-hidden="true"><span class="beauty-pack"></span></span>
          ${rating ? `<span class="beauty-product-rating">★ ${rating} <i>·</i> ${reviews}</span>` : ''}
          <span class="beauty-product-brand">${brand}</span><strong>${name}</strong><span class="beauty-product-type">${type}</span>
          ${price ? `<span class="beauty-product-pricing"><b>₹${price}</b><del>₹${mrp}</del><i>${discount}</i></span>` : ''}
          <span class="beauty-product-link">View at brand site ↗</span>
        </a>`).join('')}
      </div>
    </div>
  </div>`
const sections = {
  collections: {
    title: 'Explore our collections',
    intro: 'Find a piece that feels like you, from everyday favorites to thoughtful gifts.',
    content: `<div class="collection-grid section-collection-grid">
      <a class="collection-card" href="products.html"><span class="collection-art"><span class="ring-shape"></span></span><span class="collection-label">Rings <span>↗</span></span></a>
      <a class="collection-card" href="products.html"><span class="collection-art"><span class="chain-shape"></span></span><span class="collection-label">Necklaces <span>↗</span></span></a>
      <a class="collection-card" href="products.html"><span class="collection-art"><span class="earring-shape"></span></span><span class="collection-label">Earrings <span>↗</span></span></a>
      <a class="collection-card" href="products.html"><span class="collection-art"><span class="bracelet-shape"></span></span><span class="collection-label">Bracelets <span>↗</span></span></a>
      <a class="collection-card" href="products.html"><span class="collection-art"><span class="anklet-shape"></span></span><span class="collection-label">Anklets <span>↗</span></span></a>
      <a class="collection-card" href="products.html#modern-green"><span class="collection-art green-collection-art"><span class="emerald-gem"></span></span><span class="collection-label">Modern Green <span>↗</span></span></a>
      <a class="collection-card" href="products.html#red-bangles"><span class="collection-art red-bangle-art"><span class="red-bangle-shape"></span></span><span class="collection-label">Red Bangles <span>↗</span></span></a>
      <a class="collection-card" href="products.html#pearl-necklace"><span class="collection-art pearl-art"><span class="pearl-necklace-shape"></span></span><span class="collection-label">Pearl Jewelry <span>↗</span></span></a>
      <a class="collection-card" href="products.html#classic-bangles"><span class="collection-art classic-bangle-art"><span class="classic-bangle-shape"></span></span><span class="collection-label">Classic Bangles <span>↗</span></span></a>
    </div>`,
  },
  products: {
    title: productAudience === 'beauty' ? 'Beauty & makeup' : productAudience === 'all' ? 'All jewelry' : productAudience === 'kids' ? 'Kids jewelry' : `${productAudience[0].toUpperCase()}${productAudience.slice(1)}'s jewelry`,
    intro: productAudience === 'beauty' ? 'Explore makeup and skincare favorites from Maybelline, Lakmé, and POND’S.' : 'Choose a department, then browse every available piece in the product grid.',
    content: productAudience === 'beauty' ? beautyPage : `<div class="product-layout">
      <aside class="product-sidebar" aria-label="Product filters">
        <h2>Shop by</h2>
        <nav class="audience-nav" aria-label="Shop by department">
          <a href="products.html" class="${productAudience === 'all' ? 'is-active' : ''}" ${productAudience === 'all' ? 'aria-current="page"' : ''}>All products</a>
          <a href="products.html?category=men" class="${productAudience === 'men' ? 'is-active' : ''}" ${productAudience === 'men' ? 'aria-current="page"' : ''}>Men</a>
          <a href="products.html?category=kids" class="${productAudience === 'kids' ? 'is-active' : ''}" ${productAudience === 'kids' ? 'aria-current="page"' : ''}>Kids</a>
          <a href="products.html?category=women" class="${productAudience === 'women' ? 'is-active' : ''}" ${productAudience === 'women' ? 'aria-current="page"' : ''}>Women</a>
        </nav>
        <h2>Filter by</h2>
        <p class="sidebar-label">Category</p>
        <div class="product-filters" role="group" aria-label="Filter products by category">
          <button class="filter-button is-active" type="button" data-filter="all" aria-pressed="true">All pieces</button>
          <button class="filter-button" type="button" data-filter="rings" aria-pressed="false">Rings</button>
          <button class="filter-button" type="button" data-filter="necklaces" aria-pressed="false">Necklaces</button>
          <button class="filter-button" type="button" data-filter="earrings" aria-pressed="false">Earrings</button>
          <button class="filter-button" type="button" data-filter="bangles" aria-pressed="false">Bracelets &amp; Bangles</button>
          <button class="filter-button" type="button" data-filter="anklets" aria-pressed="false">Anklets</button>
          <button class="filter-button" type="button" data-filter="toe-rings" aria-pressed="false">Toe Rings</button>
          <button class="filter-button" type="button" data-filter="pearls" aria-pressed="false">Pearl</button>
          <button class="filter-button" type="button" data-filter="green" aria-pressed="false">Green stones</button>
          <button class="filter-button" type="button" data-filter="german-silver" aria-pressed="false">German Silver</button>
          <button class="filter-button" type="button" data-filter="stone-jewelry" aria-pressed="false">Stone Jewelry</button>
          <p class="sidebar-label color-label">Brand</p>
          <button class="filter-button is-active" type="button" data-brand-filter="all" aria-pressed="true">All brands</button>
          <button class="filter-button" type="button" data-brand-filter="rubans" aria-pressed="false">Rubans</button>
          <button class="filter-button" type="button" data-brand-filter="zaveri" aria-pressed="false">Zaveri Pearls</button>
          <button class="filter-button" type="button" data-brand-filter="jewels-galaxy" aria-pressed="false">Jewels Galaxy / SNZ</button>
          <button class="filter-button" type="button" data-brand-filter="giva" aria-pressed="false">GIVA</button>
          <button class="filter-button" type="button" data-brand-filter="sangria" aria-pressed="false">Sangria</button>
          <button class="filter-button" type="button" data-brand-filter="peora" aria-pressed="false">Peora</button>
          <button class="filter-button" type="button" data-brand-filter="other" aria-pressed="false">Other styles</button>
          <p class="sidebar-label color-label">Color</p>
          <button class="filter-button is-active" type="button" data-color-filter="all" aria-pressed="true">Any color</button>
          <button class="filter-button" type="button" data-color-filter="gold" aria-pressed="false">Gold</button>
          <button class="filter-button" type="button" data-color-filter="silver" aria-pressed="false">Silver</button>
          <button class="filter-button" type="button" data-color-filter="multi" aria-pressed="false">Multicolor</button>
          <button class="filter-button" type="button" data-color-filter="white" aria-pressed="false">White</button>
          <button class="filter-button" type="button" data-color-filter="red" aria-pressed="false">Red</button>
          <button class="filter-button" type="button" data-color-filter="green" aria-pressed="false">Green</button>
          <button class="filter-button" type="button" data-color-filter="rose-gold" aria-pressed="false">Rose gold</button>
          <button class="filter-button" type="button" data-color-filter="black" aria-pressed="false">Black</button>
          <button class="filter-button" type="button" data-color-filter="blue" aria-pressed="false">Blue</button>
          <p class="sidebar-label color-label">Discount</p>
          <button class="filter-button is-active" type="button" data-discount-filter="0" aria-pressed="true">Any discount</button>
          <button class="filter-button" type="button" data-discount-filter="10" aria-pressed="false">10% and above</button>
          <button class="filter-button" type="button" data-discount-filter="20" aria-pressed="false">20% and above</button>
          <button class="filter-button" type="button" data-discount-filter="30" aria-pressed="false">30% and above</button>
          <button class="filter-button" type="button" data-discount-filter="40" aria-pressed="false">40% and above</button>
          <button class="filter-button" type="button" data-discount-filter="50" aria-pressed="false">50% and above</button>
          <button class="filter-button" type="button" data-discount-filter="60" aria-pressed="false">60% and above</button>
          <button class="filter-button" type="button" data-discount-filter="70" aria-pressed="false">70% and above</button>
          <button class="filter-button" type="button" data-discount-filter="80" aria-pressed="false">80% and above</button>
          <button class="filter-button" type="button" data-discount-filter="90" aria-pressed="false">90% and above</button>
          <p class="discount-note">Demo discount values for layout only. Confirm real offers before publishing.</p>
          <p class="sidebar-label color-label">Price</p>
          <button class="filter-button is-active" type="button" data-price-filter="0" aria-pressed="true">Any price</button>
          <button class="filter-button" type="button" data-price-filter="10000" aria-pressed="false">₹10,000 and above</button>
          <p class="discount-note">Demo prices for filtering only. Add confirmed product prices before publishing.</p>
        </div>
      </aside>
      <div class="product-results">
        <p class="filter-result" aria-live="polite"></p>
        <p class="empty-products" hidden>No kids’ pieces are listed yet. Choose another department to browse available jewelry.</p>
        <div class="product-grid section-product-grid">
      ${[
        ['ring', 'Golden Hour Ring', 'Gold finish · Adjustable', 'product-art-one', 'product-ring', 'rings', 'gold'],
        ['pendant', 'Everyday Pendant', 'Gold finish · Delicate chain', 'product-art-two', 'product-pendant', 'necklaces', 'gold'],
        ['hoops', 'Little Glow Hoops', 'Gold finish · Lightweight', 'product-art-three', 'product-hoop', 'earrings', 'gold'],
        ['bracelet', 'Golden Thread Bracelet', 'Gold finish · Easy to layer', 'product-art-four', 'bracelet-shape', 'bangles', 'gold'],
        ['anklet', 'Soft Shine Anklet', 'Gold finish · Delicate chain', 'product-art-five', 'anklet-shape', 'anklets', 'gold'],
        ['pearl-studs', 'Pearl Day Studs', 'Pearl detail · Classic style', 'product-art-six', 'stud-shape', 'pearls', 'white'],
        ['charm-bracelet', 'Little Charms Bracelet', 'Gold finish · Gift favorite', 'product-art-seven', 'charm-shape', 'bangles', 'multi'],
        ['stacking-ring', 'Dainty Stacking Ring', 'Rose gold finish · Minimal style', 'product-art-eight', 'stack-ring-shape', 'rings', 'rose-gold'],
        ['drop-earrings', 'Golden Drop Earrings', 'Gold finish · Statement style', 'product-art-nine', 'drop-shape', 'earrings', 'gold'],
        ['green-diamond-ring', 'Modern Green Diamond Ring', 'Green center stone · Modern setting', 'product-art-green', 'emerald-gem', 'green', 'green'],
        ['green-diamond-pendant', 'Green Diamond Pendant', 'Green center stone · Gold finish', 'product-art-green-two', 'green-pendant-shape', 'green', 'green'],
        ['red-bangles', 'Ruby Red Bangles', 'Red enamel look · Gold accents', 'product-art-red', 'red-bangle-shape', 'bangles', 'red'],
        ['pearl-necklace', 'Pearl Glow Necklace', 'Pearl detail · Delicate chain', 'product-art-pearl', 'pearl-necklace-shape', 'pearls', 'white'],
        ['classic-bangles', 'Classic Gold Bangles', 'Gold finish · Set of two', 'product-art-classic-bangles', 'classic-bangle-shape', 'bangles', 'gold'],
        ['layered-necklace', 'Dainty Layering Necklace', 'Gold finish · Layered design', 'product-art-necklace', 'layer-necklace-shape', 'necklaces', 'gold'],
        ['rubans-earrings', 'Rubans Festive Earrings', 'Statement style · Festive look', 'product-art-rubans', 'rubans-earring-shape', 'earrings', 'red'],
        ['zaveri-pearls-set', 'Zaveri Pearls Necklace Set', 'Pearl look · Occasion wear', 'product-art-zaveri', 'zaveri-pearl-shape', 'necklaces,pearls', 'white'],
        ['german-silver-chain', 'Unisex German Silver Chain', 'Oxidized silver look · Unisex style', 'product-art-silver', 'silver-chain-shape', 'necklaces,german-silver', 'silver'],
        ['sangria-stone-pendant', 'Sangria Stone Pendant', 'Colorful stone look · Pendant', 'product-art-sangria', 'sangria-stone-shape', 'necklaces,stone-jewelry', 'multi'],
        ['peora-saree-chain', 'Peora Saree Chain', 'Traditional style · Long chain', 'product-art-peora', 'peora-chain-shape', 'necklaces', 'gold'],
        ['snz-kada-bracelet', 'Jewels Galaxy SNZ Kada Bracelet', 'Kada style · Gold-tone sample', 'product-art-snz', 'snz-kada-shape', 'bangles', 'gold'],
        ['giva-toe-rings-black', 'GIVA Toe Rings · Black', 'Black finish · Sample style', 'product-art-black', 'toe-ring-shape', 'toe-rings', 'black'],
        ['giva-toe-rings-blue', 'GIVA Toe Rings · Blue', 'Blue finish · Sample style', 'product-art-blue', 'toe-ring-shape', 'toe-rings', 'blue'],
      ].map(([id, name, type, art, shape, category, color], index) => { const discount = (index % 9 + 1) * 10; const price = 8000 + index * 1000; const brand = ({ 'rubans-earrings': 'rubans', 'zaveri-pearls-set': 'zaveri', 'snz-kada-bracelet': 'jewels-galaxy', 'giva-toe-rings-black': 'giva', 'giva-toe-rings-blue': 'giva', 'sangria-stone-pendant': 'sangria', 'peora-saree-chain': 'peora' })[id] ?? 'other'; const audience = id === 'german-silver-chain' ? 'women men' : 'women'; return `<a class="product-card" data-audience="${audience}" data-category="${category}" data-brand="${brand}" data-color="${color}" data-discount="${discount}" data-price="${price}" ${id === 'green-diamond-ring' ? 'id="modern-green"' : ''} ${id === 'red-bangles' ? 'id="red-bangles"' : ''} ${id === 'pearl-necklace' ? 'id="pearl-necklace"' : ''} ${id === 'classic-bangles' ? 'id="classic-bangles"' : ''} href="product.html?item=${id}"><div class="product-art ${art}"><span class="${shape}"></span></div><p class="product-name">${name}</p><p class="product-type">${type}</p><span class="product-view">View details →</span></a>` }).join('')}
        </div>
      </div>
    </div>`,
  },
  about: {
    title: 'Made to feel like you.',
    intro: 'A little about Upasana Jeweler',
    content: `<div class="about-page-content"><div class="story-art"><span class="story-sun"></span><span class="story-gem">✦</span></div><div><p>At Upasana Jeweler, we believe the pieces you wear should feel personal. We bring together timeless styles and thoughtful details to help you find jewelry for everyday moments and celebrations alike.</p><p>Whether you are choosing a little something for yourself or finding a meaningful gift, we are here to help you discover a piece you will love to wear.</p><a class="text-link" href="contact.html">Come say hello <span>→</span></a></div></div>`,
  },
  contact: {
    title: 'Let’s find your special piece.',
    intro: 'Ask us about a product, a gift, or finding a style that feels just right.',
    content: `<div class="contact-card"><p>We would love to hear from you.</p><a class="hero-button" href="tel:9616890070">Call us: 9616890070 <span aria-hidden="true">→</span></a><p class="detail-note">Tap the number to call Upasana Jeweler.</p></div>`,
  },
}

const page = sections[sectionName] ?? sections.collections
const festivalBanner = sectionName === 'products' ? `
  <div class="festival-promo-wrap">
    <section class="festival-banner" aria-label="Big Fashion Festival sale">
      <div class="festival-badge"><span>UPASANA</span><strong>Big<br/>Fashion<br/>Festival</strong></div>
      <div class="festival-sale-copy"><p>THE FESTIVE STYLE EVENT</p><h2>50–90%<br/><span>OFF*</span></h2><a href="products.html">Shop Now <span aria-hidden="true">›</span></a></div>
      <img class="festival-model" src="/category-ethnic.jpg" alt="Festive fashion look" />
    </section>
    <section class="festival-partners" aria-label="Featured festival brands"><strong>POWERED BY</strong><span class="partner-logo puma">PUMA<small>◢</small></span><span class="partner-logo rare-rabbit">RARE RABBIT</span><span class="partner-logo polo">U.S. POLO ASSN.</span><span class="partner-logo indo-era">indo era</span><span class="partner-logo comet">COMET</span><span class="powered-label">CO-POWERED BY</span></section>
    <p class="festival-disclaimer">*Festival offers vary by product. Check current prices and availability before purchase.</p>
  </div>` : ''
const festivalFooter = sectionName === 'products' ? `
  <section class="festival-app-promo" aria-label="More from Upasana Jeweler">
    <div class="promo-phone" role="img" aria-label="Illustration of the Upasana Jeweler online store on a phone">
      <div class="promo-phone-screen"><span class="promo-phone-brand">UPASANA</span><span class="promo-phone-subbrand">JEWELER</span><span class="promo-phone-sparkle">✦</span><strong>FESTIVE<br/>FINDS</strong><small>Jewelry · Beauty · More</small><span class="promo-phone-button">SHOP NOW</span></div>
    </div>
    <div class="festival-app-copy"><p>UPASANA JEWELER · FESTIVE EDIT</p><h2>MORE BEAUTIFUL FINDS WAITING!</h2><span>Discover jewelry, beauty picks, and thoughtful gifts for every occasion.</span><a href="products.html">Explore the collection <b aria-hidden="true">→</b></a></div>
  </section>` : ''
document.title = `${sectionName === 'about' ? 'Our Story' : sectionName[0].toUpperCase() + sectionName.slice(1)} | Upasana Jeweler`

document.querySelector('#page-app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Upasana Jeweler home">UPASANA<span>JEWELER</span></a>
    <nav aria-label="Main navigation"><a href="/">Home</a><a href="products.html?category=kids">Kids</a><a href="products.html?category=women">Women</a><a href="products.html?category=men">Men</a><a href="products.html?category=beauty">Beauty</a><a href="products.html?category=genz">GenZ</a><a href="products.html?category=studio">Studio</a></nav>
    <a class="shop-link" href="products.html">Shop now <span aria-hidden="true">↗</span></a>
  </header>
  ${festivalBanner}
  <main class="content-page">
    <section class="content-page-heading"><p class="eyebrow">UPASANA JEWELER</p><h1>${page.title}</h1><p>${page.intro}</p></section>
    <section class="content-page-body">${page.content}</section>
  </main>
  ${festivalFooter}
  <footer class="site-footer">
    <a class="footer-brand" href="/">UPASANA <span>JEWELER</span></a><p>Women's jewelry to make every moment shine.</p><a class="footer-phone" href="tel:9616890070">Call us: 9616890070</a>
    <nav aria-label="Footer navigation"><a href="collections.html">Collections</a><a href="products.html">Products</a><a href="about.html">Our Story</a><a href="contact.html">Contact</a></nav>
    <small>© ${new Date().getFullYear()} Upasana Jeweler. All rights reserved.</small>
  </footer>
`

if (sectionName === 'products' && productAudience !== 'beauty') {
  const cards = [...document.querySelectorAll('.section-product-grid .product-card')]
  const result = document.querySelector('.filter-result')
  const emptyProducts = document.querySelector('.empty-products')
  let selectedAudience = productAudience
  let selectedCategory = 'all'
  let selectedBrand = 'all'
  let selectedColor = 'all'
  let selectedDiscount = 0
  let selectedPrice = 0
  const updateFilters = () => {
    let visible = 0
    cards.forEach((card) => {
      const audienceMatches = selectedAudience === 'all' || card.dataset.audience.split(' ').includes(selectedAudience)
      const categoryMatches = selectedCategory === 'all' || card.dataset.category.split(',').includes(selectedCategory)
      const brandMatches = selectedBrand === 'all' || card.dataset.brand === selectedBrand
      const colorMatches = selectedColor === 'all' || card.dataset.color === selectedColor
      const discountMatches = Number(card.dataset.discount) >= selectedDiscount
      const priceMatches = Number(card.dataset.price) >= selectedPrice
      const show = audienceMatches && categoryMatches && brandMatches && colorMatches && discountMatches && priceMatches
      card.hidden = !show
      if (show) visible += 1
    })
    result.textContent = `${visible} ${visible === 1 ? 'piece' : 'pieces'} shown`
    emptyProducts.hidden = visible > 0 || selectedAudience !== 'kids'
  }
  document.querySelectorAll('.filter-button[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.filter
      document.querySelectorAll('.filter-button[data-filter]').forEach((item) => {
        const active = item === button
        item.classList.toggle('is-active', active)
        item.setAttribute('aria-pressed', String(active))
      })
      updateFilters()
    })
  })
  document.querySelectorAll('.filter-button[data-color-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedColor = button.dataset.colorFilter
      document.querySelectorAll('.filter-button[data-color-filter]').forEach((item) => {
        const active = item === button
        item.classList.toggle('is-active', active)
        item.setAttribute('aria-pressed', String(active))
      })
      updateFilters()
    })
  })
  document.querySelectorAll('.filter-button[data-brand-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedBrand = button.dataset.brandFilter
      document.querySelectorAll('.filter-button[data-brand-filter]').forEach((item) => {
        const active = item === button
        item.classList.toggle('is-active', active)
        item.setAttribute('aria-pressed', String(active))
      })
      updateFilters()
    })
  })
  document.querySelectorAll('.filter-button[data-discount-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedDiscount = Number(button.dataset.discountFilter)
      document.querySelectorAll('.filter-button[data-discount-filter]').forEach((item) => {
        const active = item === button
        item.classList.toggle('is-active', active)
        item.setAttribute('aria-pressed', String(active))
      })
      updateFilters()
    })
  })
  document.querySelectorAll('.filter-button[data-price-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedPrice = Number(button.dataset.priceFilter)
      document.querySelectorAll('.filter-button[data-price-filter]').forEach((item) => {
        const active = item === button
        item.classList.toggle('is-active', active)
        item.setAttribute('aria-pressed', String(active))
      })
      updateFilters()
    })
  })
  updateFilters()
}
