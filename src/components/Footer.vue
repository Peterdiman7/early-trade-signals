<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section brand-section">
        <div class="brand">
          <span class="icon">💹</span>
          <span class="name">TradeWave</span>
        </div>
        <p class="tagline">Your source for real-time trade signals and market insights</p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">📘</a>
          <a href="#" class="social-link" aria-label="Twitter">🐦</a>
          <a href="#" class="social-link" aria-label="LinkedIn">💼</a>
          <a href="#" class="social-link" aria-label="Telegram">✈️</a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Explore</h4>
        <ul>
          <li><RouterLink to="/signals">Signals</RouterLink></li>
          <li><RouterLink to="/market-analysis">Market Analysis</RouterLink></li>
          <li><RouterLink to="/pricing">Pricing</RouterLink></li>
          <li><RouterLink to="/community">Community</RouterLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#" @click="openHelp">Help Center</a></li>
          <li><a href="#" @click="openContact">Contact Us</a></li>
          <li><a href="#" @click="openFAQ">FAQ</a></li>
          <li><a href="#" @click="openFeedback">Send Feedback</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="#" @click="openTerms">Terms & Conditions</a></li>
          <li><a href="#" @click="openPrivacy">Privacy Policy</a></li>
          <li><a href="#" @click="openDisclaimer">Disclaimer</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Newsletter</h4>
        <p>Subscribe to receive early trade alerts and market updates</p>
        <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
          <input type="email" placeholder="Enter your email" v-model="email" required />
          <button type="submit">🚀 Subscribe</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; 2025 TradeWave. All rights reserved.</p>
        <p class="disclaimer">
          TradeWave provides educational and informational content only. Trading involves risk and is not guaranteed.
        </p>
      </div>
    </div>

    <!-- Terms Modal -->
    <div v-if="showTermsModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h3>Terms & Conditions</h3>
          <button class="close-btn" @click="closeModal">&times;</button>
        </div>
        <div class="modal-content">
          <p>By using TradeWave, you agree to our terms and conditions. Trading carries risk. This platform provides educational and informational content only.</p>
          <p class="effective-date"><strong>Effective Date:</strong> September 16, 2025</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const showTermsModal = ref(false)

function subscribeNewsletter() {
  if (email.value) {
    alert(`Thanks for subscribing with ${email.value}! You'll receive early trade alerts and market updates.`)
    email.value = ''
  }
}

function openTerms() {
  showTermsModal.value = true
}
function closeModal() {
  showTermsModal.value = false
}

function openPrivacy() {
  alert('Privacy Policy: Your data is secured. This is a demo app.')
}
function openDisclaimer() {
  alert('Disclaimer: Trading carries risk. This platform provides educational content only.')
}
function openHelp() {
  alert('Help Center: Contact support@tradewave.com')
}
function openContact() {
  alert('Contact: hello@tradewave.com')
}
function openFAQ() {
  alert('FAQ: Find answers about signals, subscriptions, and market insights.')
}
function openFeedback() {
  alert('Send Feedback: Suggest improvements at feedback@tradewave.com')
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1b5e20, #43a047);
  color: white;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.brand-section .brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.brand-section .icon {
  font-size: 1.5rem;
}

.tagline {
  font-style: italic;
  margin-bottom: 1rem;
  color: rgba(255,255,255,0.9);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-link {
  display: inline-block;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  text-decoration: none;
}

.social-link:hover {
  background: rgba(255,255,255,0.2);
}

.footer-section h4 {
  color: #a5d6a7;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
}
.footer-section a:hover {
  color: #a5d6a7;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}
.newsletter-form input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
}
.newsletter-form button {
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  background: rgba(255,255,255,0.2);
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.newsletter-form button:hover {
  background: rgba(255,255,255,0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.2);
  padding: 1.5rem 2rem;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.8);
}

/* Modal */
.modal-overlay {
  position: fixed; top:0; left:0; right:0; bottom:0;
  background: rgba(0,0,0,0.5);
  display:flex; align-items:center; justify-content:center; z-index:2000;
  padding:2rem;
}
.modal {
  background:white; border-radius:12px; max-width:600px; max-height:80vh;
  overflow-y:auto; box-shadow:0 10px 30px rgba(0,0,0,0.3);
}
.modal-header {
  display:flex; justify-content:space-between; align-items:center; padding:1rem;
  border-bottom:1px solid #e5e7eb;
}
.close-btn {
  font-size:1.5rem; background:none; border:none; cursor:pointer;
}
.modal-content {
  padding:1rem; color:#374151;
}
.effective-date { margin-top:1rem; font-size:0.9rem; }

/* Responsive */
@media(max-width:768px){
  .footer-content { grid-template-columns:1fr; padding:2rem 1rem; }
  .newsletter-form { flex-direction: column; }
  .modal-overlay { padding:1rem; }
  .modal-content { padding:1rem; }
}
</style>
