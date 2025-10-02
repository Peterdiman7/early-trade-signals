<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/" class="logo">
        <span class="icon">💹</span>
        TradeWave
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/signals" class="nav-link">Signals</RouterLink>
        <RouterLink to="/market-analysis" class="nav-link">Market Analysis</RouterLink>
        <RouterLink to="/pricing" class="nav-link">Pricing</RouterLink>
        <RouterLink to="/community" class="nav-link">Community</RouterLink>
        <RouterLink to="/login" class="nav-link login-btn">Sign In</RouterLink>
      </nav>

      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="mobile-menu" :class="{ active: isMobileMenuOpen }">
        <RouterLink to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</RouterLink>
        <RouterLink to="/signals" class="mobile-nav-link" @click="closeMobileMenu">Signals</RouterLink>
        <RouterLink to="/market-analysis" class="mobile-nav-link" @click="closeMobileMenu">Market Analysis</RouterLink>
        <RouterLink to="/pricing" class="mobile-nav-link" @click="closeMobileMenu">Pricing</RouterLink>
        <RouterLink to="/community" class="mobile-nav-link" @click="closeMobileMenu">Community</RouterLink>
        <RouterLink to="/login" class="mobile-nav-link login-btn" @click="closeMobileMenu">Sign In</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #1b5e20, #43a047);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.icon {
  font-size: 1.2rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(255,255,255,0.1);
}

.login-btn {
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.3);
}

.login-btn:hover {
  background: rgba(255,255,255,0.3);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #1b5e20, #43a047);
  flex-direction: column;
  padding: 1rem 2rem;
}

.mobile-menu.active {
  display: flex;
}

.mobile-nav-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  font-weight: 500;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .nav { display: none; }
  .mobile-menu-btn { display: flex; }
  .container { padding: 0 1rem; }
}
</style>
