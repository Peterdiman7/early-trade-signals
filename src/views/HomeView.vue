<template>
  <div>
    <!-- ***** Main Banner Area Start ***** -->
    <div class="main-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-self-center">
            <div class="header-text">
              <span style="color: white;">Early Trade Signals</span>
              <h2>Maximize Your Profits with Timely Signals</h2>
              <p>
                Stay ahead in the market with our real-time trade signals for stocks, crypto, and forex. Designed to
                help traders of all levels make smarter decisions.
              </p>
              <div class="buttons">
                <div class="border-button">
                  <RouterLink to="/signals">Get Signals</RouterLink>
                </div>
                <div class="main-button">
                  <RouterLink to="/learn">Learn More</RouterLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Banner Carousel -->
          <div class="col-lg-5 offset-lg-1">
            <Carousel 
              :items-to-show="1" 
              :wrap-around="true" 
              :mouse-drag="true" 
              :touch-drag="true" 
              v-model="currentBannerSlide"
              class="trading-carousel">
              <Slide v-for="(banner, i) in banners" :key="i">
                <img :src="banner" class="w-100" alt="Trading Banner" />
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Main Banner Area End ***** -->

    <!-- ***** Trading Categories & Top Signals ***** -->
    <div class="categories-collections">
      <div class="container">
        <!-- Categories Section -->
        <div class="row">
          <div class="col-lg-12">
            <div class="categories">
              <div class="section-heading">
                <div class="line-dec"></div>
                <h2>Explore Our <em>Trading Categories</em></h2>
              </div>

              <div class="row">
                <div v-for="(cat, i) in categories" :key="i" class="col-lg-2 col-sm-6">
                  <div class="item">
                    <div class="icon">
                      <img :src="cat.icon" :alt="cat.title" />
                    </div>
                    <h4>{{ cat.title }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Signals Section -->
        <div class="collections">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h2>Top <em>Signals</em> in the Market</h2>
          </div>
          <Carousel 
            :items-to-show="3" 
            :wrap-around="true" 
            :mouse-drag="true" 
            :touch-drag="true" 
            :breakpoints="carouselBreakpoints" 
            v-model="currentSignalSlide"
            class="trading-carousel signals-carousel">
            <Slide v-for="(signal, i) in topSignals" :key="i">
              <div class="signal-card">
                <div class="signal-image-wrapper">
                  <img :src="signal.image" :alt="signal.title" />
                  <div class="success-badge">{{ signal.successRate }}</div>
                </div>
                <div class="signal-content">
                  <h4>{{ signal.title }}</h4>
                  <div class="signal-meta">
                    <span class="type-tag">{{ signal.type }}</span>
                  </div>
                  <div class="signal-action">
                    <RouterLink to="/signals" class="view-signal-btn">
                      View Signal
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-header">
          <h2>Our Trading Results</h2>
          <p>Proven performance that speaks for itself</p>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>20k+</h3>
            <p>Active Traders</p>
            <div class="stat-glow"></div>
          </div>
          <div class="stat-card highlight">
            <div class="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>1,500+</h3>
            <p>Signals Sent</p>
            <div class="stat-glow"></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>90%</h3>
            <p>Successful Trades</p>
            <div class="stat-glow"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const currentBannerSlide = ref(0)
const currentSignalSlide = ref(0)

const banners = [
  new URL('@/assets/images/banner-01.png', import.meta.url).href,
  new URL('@/assets/images/banner-02.png', import.meta.url).href,
]

const categories = [
  { title: 'Stocks', icon: 'https://imageio.forbes.com/specials-images/imageserve/6838ee72f3a1e9c9e049d327/Stock-market-data-with-uptrend-vector-for-the-best-stocks-to-buy-near-all-time-highs-/960x0.jpg?format=jpg&width=960' },
  { title: 'Crypto', icon: 'https://a.c-dn.net/c/content/dam/publicsites/sgx/images/Email/Trading_Cryptocurrencies_Effectively_Using_PriceAction.jpg/jcr:content/renditions/original-size.webp' },
  { title: 'Forex', icon: 'https://eu-images.contentstack.com/v3/assets/blt73dfd92ee49f59a6/blt58adfd0056d25209/6706a0564753a00605bd0535/1200%D1%85675-6.png' },
  { title: 'Options', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhTrDTiyDinI30rez4bZ9RXv2opO6rFwMIQ&s' },
  { title: 'Commodities', icon: 'https://cdn.corporatefinanceinstitute.com/assets/commodity-valuation-1024x922.jpeg' },
  { title: 'Indices', icon: 'https://www.forextime.com/s3-static/2022-03/indices-trading-guide-tips.jpg' },
]

const topSignals = [
  { title: 'AAPL Buy Signal', image: new URL('https://s3-symbol-logo.tradingview.com/apple--600.png'), type: 'Stock', successRate: '92%' },
  { title: 'BTC/USD Trend', image: new URL('https://iq.wiki/cdn-cgi/image/width=1920,quality=70/https://ipfs.everipedia.org/ipfs/QmVybPzmHNopqv2454bxzT26VZ3CsRKipMmYVZdPR8ggQK'), type: 'Crypto', successRate: '87%' },
  { title: 'EUR/USD Short', image: new URL('https://trading212equities.s3.eu-central-1.amazonaws.com/EURUSD.png'), type: 'Forex', successRate: '90%' },
  { title: 'Gold Long', image: new URL('https://www.investopedia.com/thmb/ThvG00OiG46V5Savq7aByMUMigw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HowtoBuyGoldBarsGettyImages-1689908174-dd1c5db2500f4b62a6620a1749beee7d.jpg'), type: 'Commodities', successRate: '88%' },
]

const carouselBreakpoints = {
  1200: { itemsToShow: 3 },
  992: { itemsToShow: 2 },
  576: { itemsToShow: 1 },
}
</script>

<style scoped>
/* Signal Cards Styling */
.signals-carousel {
  padding: 0 10px;
}

.signal-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin: 10px;
  height: 420px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.signal-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 50px rgba(46, 125, 50, 0.2);
}

.signal-image-wrapper {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.signal-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.signal-card:hover .signal-image-wrapper img {
  transform: scale(1.1);
}

.success-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(46, 125, 50, 0.3);
  backdrop-filter: blur(10px);
}

.signal-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.signal-content h4 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 12px 0;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
}

.signal-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.type-tag {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1976d2;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.signal-action {
  margin-top: auto;
}

.view-signal-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #2e7d32 0%, #43a047 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(46, 125, 50, 0.2);
}

.view-signal-btn:hover {
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
  transform: translateX(5px);
  box-shadow: 0 6px 20px rgba(46, 125, 50, 0.3);
  color: white;
}

.view-signal-btn svg {
  transition: transform 0.3s ease;
}

.view-signal-btn:hover svg {
  transform: translateX(3px);
}

.stats {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  position: relative;
  overflow: hidden;
}

.stats::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(46, 125, 50, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(66, 165, 245, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.stats-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.stats-header h2 {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stats-header p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  font-weight: 400;
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 3rem 2.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  min-width: 260px;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-card:hover {
  transform: translateY(-15px) scale(1.05);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.stat-card.highlight {
  border: 2px solid rgba(46, 125, 50, 0.5);
  background: rgba(46, 125, 50, 0.08);
}

.stat-card.highlight:hover {
  border-color: rgba(46, 125, 50, 0.8);
  box-shadow: 0 20px 60px rgba(46, 125, 50, 0.3);
}

.stat-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, rgba(46, 125, 50, 0.2) 0%, rgba(102, 187, 106, 0.2) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #66bb6a;
  transition: all 0.4s ease;
}

.stat-card:hover .stat-icon {
  transform: rotateY(360deg) scale(1.1);
  background: linear-gradient(135deg, rgba(46, 125, 50, 0.3) 0%, rgba(102, 187, 106, 0.3) 100%);
}

.stat-glow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 4px;
  background: linear-gradient(90deg, transparent 0%, #66bb6a 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.stat-card:hover .stat-glow {
  opacity: 1;
}

.stat-card h3 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #66bb6a 0%, #81c784 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  position: relative;
}

.stat-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
}

.item img {
  border-radius: 10px;
}

.down-content {
  padding: 10px 0;
}

/* Carousel dragging cursor */
.trading-carousel {
  cursor: grab;
}

.trading-carousel:active {
  cursor: grabbing;
}
</style>