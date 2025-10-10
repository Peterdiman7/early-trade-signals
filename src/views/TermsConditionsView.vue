<template>
  <section class="page">
    <div class="container">
      <h1 class="page-title">Terms & Conditions</h1>
      <p class="page-intro">
        Last updated: September 23, 2025
      </p>

      <div class="content">
        <h3>1. About Early Trade Signals</h3>
        <p>
          <strong>Early Trade Signals</strong> provides curated market insights, real-time trading alerts,
          and educational resources to empower traders. All content is for informational purposes only
          and not financial advice.
          Contact us at <a href="mailto:legal@earlytradesignals.com">legal@earlytradesignals.com</a>.
        </p>

        <h3>2. Acceptance of Terms</h3>
        <p>
          By using our platform, creating an account, or subscribing to any plan, you agree to these Terms & Conditions.
          If you do not agree, you must discontinue use immediately.
        </p>

        <h3>3. Services Offered</h3>
        <p>
          We provide free and subscription-based access to trade signals, market analysis, and learning tools.
          Premium features require an active subscription.
        </p>

        <h3>4. Accounts & Eligibility</h3>
        <p>
          To access premium services, you agree to:
        </p>
        <ul>
          <li>Provide accurate, up-to-date information</li>
          <li>Secure your account credentials</li>
          <li>Be at least 18 years old or have legal parental consent</li>
        </ul>

        <h3>5. Acceptable Use</h3>
        <p>
          You may not misuse Early Trade Signals. Prohibited activities include:
        </p>
        <ul>
          <li>Redistributing alerts or analysis without permission</li>
          <li>Automated scraping of content</li>
          <li>Sharing account access with others</li>
        </ul>

        <h3>6. User Contributions</h3>
        <p>
          If you share reviews, comments, or insights, you grant Early Trade Signals the right to display
          them within the platform and promotional content, while retaining ownership.
        </p>

        <h3>7. Payments & Subscriptions</h3>
        <p>
          Subscription fees are billed upfront. You may cancel anytime, but access continues until
          your billing cycle ends. Refunds are only issued if required by law.
        </p>

        <h3>8. Disclaimers</h3>
        <p>
          All signals, strategies, and analysis are provided “as is.” Early Trade Signals does not guarantee
          profits or market outcomes. Trading involves risk.
        </p>

        <h3>9. Limitation of Liability</h3>
        <p>
          While we strive for accuracy, we do not guarantee uninterrupted service or error-free data.
          Use of our platform is at your own risk.
        </p>

        <h3>10. Governing Law</h3>
        <p>
          These Terms are governed by applicable financial and commercial law. Disputes will be resolved via
          arbitration unless otherwise required.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
  padding: 3rem 1.5rem;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: white;
  min-height: 100vh;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.25rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-intro {
  text-align: center;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.7);
}

.content h3 {
  margin-top: 2rem;
  font-weight: 700;
  color: #60a5fa;
}

.content p,
.content ul {
  margin: 0.75rem 0 1.25rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
}

.content ul {
  list-style: disc;
  padding-left: 1.5rem;
}

a {
  color: #a78bfa;
  text-decoration: underline;
}

a:hover {
  color: #60a5fa;
}
</style>
