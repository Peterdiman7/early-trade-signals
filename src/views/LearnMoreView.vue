<template>
	<section class="learn-more">
		<!-- Hero -->
		<div class="hero">
			<h1 class="title">Learn More About Early Trade Signals</h1>
			<p class="subtitle">
				Discover how our platform empowers traders with real-time signals, deep market insights,
				and a supportive community to grow your trading journey.
			</p>
		</div>

		<!-- Info Cards -->
		<div class="info-grid">
			<div class="info-card">
				<h2>📊 Smart Signals</h2>
				<p>Access AI-powered trading signals designed to help you make informed decisions faster and with
					confidence.
				</p>
			</div>
			<div class="info-card">
				<h2>📈 Market Analysis</h2>
				<p>Dive into expert-curated insights, trend breakdowns, and actionable analysis for all major markets.
				</p>
			</div>
			<div class="info-card">
				<h2>🤝 Community Support</h2>
				<p>Join a vibrant community of traders where you can share strategies, ask questions, and grow together.
				</p>
			</div>
		</div>

		<!-- Call To Action -->
		<div class="cta">
			<RouterLink to="/pricing" class="cta-btn">Get Started</RouterLink>
			<RouterLink to="/signals" class="secondary-btn">See Live Signals</RouterLink>
		</div>
	</section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.learn-more {
	max-width: 1200px;
	margin: 0 auto;
	padding: 3rem 1.5rem;
}

.hero {
	text-align: center;
	margin-bottom: 3rem;
}

.title {
	font-size: 2.5rem;
	font-weight: 800;
	background: linear-gradient(135deg, #60a5fa, #a78bfa);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.subtitle {
	margin-top: 1rem;
	font-size: 1.125rem;
	color: rgba(255, 255, 255, 0.8);
	max-width: 700px;
	margin-left: auto;
	margin-right: auto;
}

.info-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 1.5rem;
	margin-bottom: 3rem;
}

.info-card {
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 16px;
	padding: 2rem;
	transition: transform 0.3s ease, border-color 0.3s ease;
	border: 1px solid black;
}

.info-card:hover {
	transform: translateY(-4px);
	border-color: rgba(96, 165, 250, 0.4);
}

.cta {
	text-align: center;
	display: flex;
	gap: 1rem;
	justify-content: center;
}

.cta-btn {
	background: linear-gradient(135deg, #60a5fa, #a78bfa);
	color: white;
	font-weight: 600;
	padding: 0.75rem 1.5rem;
	border-radius: 12px;
	text-decoration: none;
	transition: all 0.3s ease;
	box-shadow: 0 4px 12px rgba(96, 165, 250, 0.3);
}

.cta-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 6px 16px rgba(96, 165, 250, 0.45);
}

.secondary-btn {
	background: rgba(255, 255, 255, 0.08);
	border: 1px solid rgba(255, 255, 255, 0.15);
	color: rgba(255, 255, 255, 0.85);
	font-weight: 500;
	padding: 0.75rem 1.5rem;
	border-radius: 12px;
	text-decoration: none;
	transition: all 0.3s ease;
}

.secondary-btn:hover {
	background: rgba(255, 255, 255, 0.15);
	border-color: rgba(255, 255, 255, 0.25);
	color: white;
}
</style>
