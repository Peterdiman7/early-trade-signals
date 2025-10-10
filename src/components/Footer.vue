<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section brand-section">
        <div class="brand">
          <span class="name">Early Trade Signals</span>
        </div>
        <p class="tagline">Your source for real-time trade signals and market insights</p>
      </div>

      <div class="footer-section">
        <h4>Explore</h4>
        <ul>
          <li>
            <RouterLink to="/signals">Signals</RouterLink>
          </li>
          <li>
            <RouterLink to="/market-analysis">Market Analysis</RouterLink>
          </li>
          <li>
            <RouterLink to="/pricing">Pricing</RouterLink>
          </li>
          <li>
            <RouterLink to="/community">Community</RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#" @click.prevent="openHelp">Help Center</a></li>
          <li><a href="#" @click.prevent="openContact">Contact Us</a></li>
          <li><a href="#" @click.prevent="openFAQ">FAQ</a></li>
          <li><a href="#" @click.prevent="openFeedback">Send Feedback</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="#" @click="router.push({name: 'terms-conditions'})">Terms & Conditions</a></li>
          <li><a href="#" @click.prevent="openPrivacy">Privacy Policy</a></li>
          <li><a href="#" @click.prevent="openDisclaimer">Disclaimer</a></li>
        </ul>
      </div>

      <div class="footer-section newsletter-section">
        <h4>Newsletter</h4>
        <p>Subscribe to receive early trade alerts and market updates</p>
        <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
          <input type="email" placeholder="Enter your email" v-model="email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; 2025 Early Trade Signals. All rights reserved.</p>
        <p class="disclaimer">
          Trading involves risk. This platform provides educational and informational content only.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')

function subscribeNewsletter() {
  if (email.value) {
    alert(`Thanks for subscribing with ${email.value}! You'll receive early trade alerts and market updates.`)
    email.value = ''
  }
}

function openPrivacy() {
  alert('Privacy Policy: Your data is secured. This is a demo app.')
}

function openDisclaimer() {
  alert('Disclaimer: Trading carries risk. This platform provides educational content only.')
}

function openHelp() {
  alert('Help Center: Contact support@early-trade-signals.com')
}

function openContact() {
  alert('Contact: hello@early-trade-signals.com')
}

function openFAQ() {
  alert('FAQ: Find answers about signals, subscriptions, and market insights.')
}

function openFeedback() {
  alert('Send Feedback: Suggest improvements at feedback@early-trade-signals.com')
}
</script>

<style scoped>
.footer {
  background-color: linear-gradient(132deg, rgba(125,90,254,1) 25%, rgba(160,84,244,1) 100%);
  backdrop-filter: blur(20px);
  color: white;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) 1.5fr;
  gap: 3rem;
}

.brand-section {
  grid-column: span 1;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.brand .icon {
  font-size: 1.5rem;
}

.brand .name {
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tagline {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(96, 165, 250, 0.15);
  border-color: rgba(96, 165, 250, 0.3);
  transform: translateY(-2px);
}

.footer-section h4 {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-section a:hover {
  color: #60a5fa;
  transform: translateX(4px);
}

.newsletter-section p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.newsletter-form input {
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.newsletter-form input:focus {
  outline: none;
  border-color: rgba(96, 165, 250, 0.5);
  background: rgba(255, 255, 255, 0.08);
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.newsletter-form button {
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(96, 165, 250, 0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-bottom-content p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.disclaimer {
  font-size: 0.85rem !important;
  color: rgba(255, 255, 255, 0.4) !important;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
}

.modal {
  background: rgba(26, 31, 58, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-header h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.close-btn {
  font-size: 2rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.modal-content {
  padding: 2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
}

.modal-content p {
  margin-bottom: 1rem;
}

.effective-date {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }

  .brand-section {
    grid-column: span 2;
  }

  .newsletter-section {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 3rem 1rem 2rem;
    gap: 2rem;
  }

  .brand-section,
  .newsletter-section {
    grid-column: span 1;
  }

  .modal-overlay {
    padding: 1rem;
  }

  .modal-header,
  .modal-content {
    padding: 1.5rem;
  }

  .footer-bottom {
    padding: 1.5rem 1rem;
  }
}
</style>