<template>
    <div class="login-view">
        <div class="login-container">
            <div class="glass-card login-card">
                <div class="login-header">
                    <div class="logo">
                        <span class="icon">💹</span>
                        <span class="name">TradeWave</span>
                    </div>
                    <h1>Welcome Back</h1>
                    <p>Sign in to access your trading signals and community</p>
                </div>

                <form @submit.prevent="handleLogin" class="login-form">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <div class="input-wrapper">
                            <span class="input-icon">📧</span>
                            <input type="email" id="email" v-model="formData.email" placeholder="your@email.com"
                                required />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-wrapper">
                            <span class="input-icon">🔒</span>
                            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="formData.password"
                                placeholder="Enter your password" required />
                            <button type="button" class="toggle-password" @click="showPassword = !showPassword">
                                {{ showPassword ? '👁️' : '👁️‍🗨️' }}
                            </button>
                        </div>
                    </div>

                    <div class="form-options">
                        <label class="checkbox-label">
                            <input type="checkbox" v-model="formData.rememberMe" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" class="forgot-link">Forgot password?</a>
                    </div>

                    <button type="submit" class="submit-btn">
                        <span>Sign In</span>
                        <span class="btn-icon">→</span>
                    </button>
                </form>

                <div class="divider">
                    <span>or continue with</span>
                </div>

                <div class="social-login">
                    <button class="social-btn google">
                        <span class="social-icon">G</span>
                        <span>Google</span>
                    </button>
                    <button class="social-btn apple">
                        <span class="social-icon">🍎</span>
                        <span>Apple</span>
                    </button>
                </div>

                <div class="signup-prompt">
                    Don't have an account?
                    <a href="#" class="signup-link">Sign up for free</a>
                </div>
            </div>

            <div class="login-benefits">
                <div class="benefit-card">
                    <div class="benefit-icon">⚡</div>
                    <h3>Real-Time Signals</h3>
                    <p>Get instant trading alerts directly to your device</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">📊</div>
                    <h3>Advanced Analytics</h3>
                    <p>Access comprehensive market analysis and insights</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🤝</div>
                    <h3>Trading Community</h3>
                    <p>Connect with thousands of active traders</p>
                </div>
            </div>
        </div>

        <!-- Animated Background -->
        <div class="bg-decoration">
            <div class="orb orb-1"></div>
            <div class="orb orb-2"></div>
            <div class="orb orb-3"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
    email: '',
    password: '',
    rememberMe: false
})

const showPassword = ref(false)

function handleLogin() {
    alert(`Login successful! Welcome back, ${formData.value.email}`)
    router.push('/')
}
</script>

<style scoped>
.login-view {
    min-height: 100vh;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
}

.login-container {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    position: relative;
    z-index: 2;
}

.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(30px);
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem;
    position: relative;
    overflow: hidden;
}

.glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), transparent);
}

.login-header {
    text-align: center;
    margin-bottom: 2rem;
}

.logo {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 2rem;
    font-weight: 800;
    color: white;
    margin-bottom: 2rem;
}

.icon {
    font-size: 2rem;
}

.login-header h1 {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #60a5fa, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
}

.login-header p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    font-size: 0.9rem;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.input-icon {
    position: absolute;
    left: 1rem;
    font-size: 1.2rem;
    pointer-events: none;
}

.input-wrapper input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.input-wrapper input:focus {
    outline: none;
    border-color: rgba(96, 165, 250, 0.5);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
}

.input-wrapper input::placeholder {
    color: rgba(255, 255, 255, 0.3);
}

.toggle-password {
    position: absolute;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}

.toggle-password:hover {
    opacity: 1;
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: -0.5rem 0;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.forgot-link {
    color: #60a5fa;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    transition: color 0.3s ease;
}

.forgot-link:hover {
    color: #3b82f6;
}

.submit-btn {
    width: 100%;
    padding: 1.25rem;
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    border: none;
    border-radius: 16px;
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    transition: all 0.3s ease;
    box-shadow: 0 8px 24px rgba(96, 165, 250, 0.3);
    margin-top: 1rem;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(96, 165, 250, 0.4);
}

.btn-icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.submit-btn:hover .btn-icon {
    transform: translateX(4px);
}

.divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0 1.5rem;
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.9rem;
}

.divider::before,
.divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

.social-login {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.social-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

.social-icon {
    font-size: 1.5rem;
}

.signup-prompt {
    text-align: center;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
}

.signup-link {
    color: #60a5fa;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s ease;
}

.signup-link:hover {
    color: #3b82f6;
}

.login-benefits {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.benefit-card {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    transition: all 0.4s ease;
}

.benefit-card:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateX(8px);
    border-color: rgba(96, 165, 250, 0.3);
}

.benefit-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.benefit-card h3 {
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.benefit-card p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
}

.bg-decoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1;
}

.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
    animation: float 15s ease-in-out infinite;
}

.orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(96, 165, 250, 0.4), transparent);
    top: -200px;
    left: -200px;
    animation-delay: 0s;
}

.orb-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(167, 139, 250, 0.3), transparent);
    bottom: -250px;
    right: -250px;
    animation-delay: 5s;
}

.orb-3 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 10s;
}

@keyframes float {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    33% {
        transform: translate(50px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-30px, 30px) scale(0.9);
    }
}

@media (max-width: 968px) {
    .login-container {
        grid-template-columns: 1fr;
    }

    .login-benefits {
        order: -1;
    }

    .benefit-card {
        padding: 1.5rem;
    }
}

@media (max-width: 640px) {
    .login-view {
        padding: 1rem;
    }

    .glass-card {
        padding: 2rem 1.5rem;
    }

    .login-header h1 {
        font-size: 2rem;
    }

    .social-login {
        grid-template-columns: 1fr;
    }
}
</style>