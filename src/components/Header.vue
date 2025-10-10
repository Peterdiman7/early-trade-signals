<template>
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <RouterLink to="/" class="logo">
              <img src="@/assets/images/logo.png" alt="Logo" />
            </RouterLink>
            <ul class="nav" :class="{ active: menuOpen }" :style="menuOpen ? 'display: flex !important; opacity: 1 !important; visibility: visible !important;' : ''">
              <li>
                <RouterLink to="/" :class="{ active: isActive('/') }" @click="closeMenu">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/signals" :class="{ active: isActive('/signals') }" @click="closeMenu">Signals</RouterLink>
              </li>
              <li>
                <RouterLink to="/market-analysis" :class="{ active: isActive('/market-analysis') }" @click="closeMenu">Market Analysis</RouterLink>
              </li>
              <li>
                <RouterLink to="/pricing" :class="{ active: isActive('/pricing') }" @click="closeMenu">Pricing</RouterLink>
              </li>
              <li>
                <RouterLink to="/community" :class="{ active: isActive('/community') }" @click="closeMenu">Community</RouterLink>
              </li>
              <li v-if="!loggedIn">
                <RouterLink to="/login" :class="{ active: isActive('/login') }" @click="closeMenu">Login</RouterLink>
              </li>
              <li v-else>
                <RouterLink to="#" class="logout-link" @click.prevent="handleLogout">
                  <span class="link-icon">🚪</span> Logout
                </RouterLink>
              </li>
            </ul>
            <a class="menu-trigger" :class="{ active: menuOpen }" @click.prevent="toggleMenu">
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const { loggedIn } = storeToRefs(auth)

const menuOpen = ref(false)

// Function to check if the current route matches the given path
const isActive = (path) => route.path === path

// Toggle mobile menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Close mobile menu
const closeMenu = () => {
  menuOpen.value = false
}

const logout = async () => {
  await auth.logout()
  router.push("/login")
}

// Handle logout with menu close
const handleLogout = async () => {
  closeMenu()
  await logout()
}

onMounted(() => {
  auth.checkLogin()
})
</script>

<style scoped>
/* Mobile menu styles */
@media (max-width: 991px) {
  .main-nav .nav {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 25px;
    box-shadow: 0 5px 25px rgba(116, 83, 252, 0.15);
    flex-direction: column !important;
    padding: 20px !important;
    margin: 0 20px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: all 0.3s ease;
    z-index: 998;
    width: 95%;
  }

  .main-nav .nav.active {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateY(-50px) !important;
    display: flex !important;
  }

  .main-nav .nav li {
    width: 100%;
    padding: 5px 0 !important;
    display: block;
  }

  .main-nav .nav li a {
    width: 100%;
    text-align: left;
  }

  .main-nav .menu-trigger {
    display: block !important;
  }

  .logout-link {
    cursor: pointer;
  }

  .link-icon {
    margin-right: 5px;
  }
}

@media (min-width: 1272px) {
  .main-nav .menu-trigger {
    display: none !important;
  }
}
</style>