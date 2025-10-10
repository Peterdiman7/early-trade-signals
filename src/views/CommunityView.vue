<template>
    <div class="community-view">
        <div class="glass-header">
            <h1>Trading Community</h1>
            <p>Connect, share, and grow with fellow traders</p>
        </div>

        <div class="community-grid">
            <!-- Community Stats -->
            <div class="glass-card stats-card">
                <h2>Community Pulse</h2>
                <div class="stats-grid">
                    <div class="stat-bubble">
                        <div class="stat-icon">👥</div>
                        <div class="stat-value">20,547</div>
                        <div class="stat-label">Active Traders</div>
                    </div>
                    <div class="stat-bubble">
                        <div class="stat-icon">💬</div>
                        <div class="stat-value">1,234</div>
                        <div class="stat-label">Daily Messages</div>
                    </div>
                    <div class="stat-bubble">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-value">892</div>
                        <div class="stat-label">Success Stories</div>
                    </div>
                </div>
            </div>

            <!-- Top Traders -->
            <div class="glass-card leaderboard-card">
                <h2>Top Traders This Week</h2>
                <div class="leaderboard-list">
                    <div v-for="(trader, index) in topTraders" :key="trader.id" class="trader-item">
                        <div class="rank" :class="`rank-${index + 1}`">{{ index + 1 }}</div>
                        <div class="trader-avatar" :style="{ background: trader.color }">
                            {{ trader.initial }}
                        </div>
                        <div class="trader-info">
                            <div class="trader-name">{{ trader.name }}</div>
                            <div class="trader-stats">{{ trader.profit }}% profit</div>
                        </div>
                        <div class="trader-badge">🔥 {{ trader.streak }} day streak</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Discussion Feed -->
        <div class="glass-card feed-card">
            <div class="feed-header">
                <h2>Community Feed</h2>
                <div class="feed-filters">
                    <button v-for="filter in filters" :key="filter" :class="{ active: activeFilter === filter }"
                        @click="activeFilter = filter" class="filter-btn">
                        {{ filter }}
                    </button>
                </div>
            </div>

            <div class="feed-list">
                <div v-for="post in posts" :key="post.id" class="post-card">
                    <div class="post-header">
                        <div class="post-author">
                            <div class="author-avatar" :style="{ background: post.authorColor }">
                                {{ post.authorInitial }}
                            </div>
                            <div class="author-info">
                                <div class="author-name">{{ post.author }}</div>
                                <div class="post-time">{{ post.time }}</div>
                            </div>
                        </div>
                        <div class="post-category" :class="post.category">{{ post.category }}</div>
                    </div>

                    <div class="post-content">
                        <h3>{{ post.title }}</h3>
                        <p>{{ post.content }}</p>
                    </div>

                    <div class="post-footer">
                        <button class="action-btn">
                            <span class="icon">👍</span>
                            <span>{{ post.likes }}</span>
                        </button>
                        <button class="action-btn">
                            <span class="icon">💬</span>
                            <span>{{ post.comments }}</span>
                        </button>
                        <button class="action-btn">
                            <span class="icon">🔖</span>
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Join CTA -->
        <div class="glass-card cta-card">
            <div class="cta-content">
                <h2>Ready to Join the Conversation?</h2>
                <p>Connect with thousands of traders sharing strategies, insights, and success stories</p>
                <button class="cta-btn">Join Community</button>
            </div>
            <div class="cta-decoration">
                <div class="floating-bubble bubble-1"></div>
                <div class="floating-bubble bubble-2"></div>
                <div class="floating-bubble bubble-3"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeFilter = ref('All')
const filters = ['All', 'Signals', 'Analysis', 'Questions', 'Success']

const topTraders = ref([
    { id: 1, name: 'Alex Morgan', initial: 'A', profit: 24.5, streak: 12, color: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { id: 2, name: 'Sarah Chen', initial: 'S', profit: 22.8, streak: 9, color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { id: 3, name: 'Mike Johnson', initial: 'M', profit: 19.3, streak: 7, color: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    { id: 4, name: 'Emma Davis', initial: 'E', profit: 17.6, streak: 6, color: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
    { id: 5, name: 'James Wilson', initial: 'J', profit: 15.2, streak: 5, color: 'linear-gradient(135deg, #fa709a, #fee140)' }
])

const posts = ref([
    {
        id: 1,
        author: 'Trading Pro',
        authorInitial: 'T',
        authorColor: 'linear-gradient(135deg, #667eea, #764ba2)',
        time: '2 hours ago',
        category: 'analysis',
        title: 'Bitcoin forming bullish pattern - potential breakout ahead',
        content: 'Technical analysis shows BTC forming a ascending triangle on the 4H chart. Historical data suggests 70% probability of upward breakout. Entry around $44.8k with target at $48k.',
        likes: 234,
        comments: 45
    },
    {
        id: 2,
        author: 'Crypto Insights',
        authorInitial: 'C',
        authorColor: 'linear-gradient(135deg, #f093fb, #f5576c)',
        time: '5 hours ago',
        category: 'signals',
        title: 'High probability setup on ETH/USD',
        content: 'Strong support at $2,400 holding. RSI showing bullish divergence. Stop loss at $2,380, take profit at $2,650. Risk/reward ratio 1:3.',
        likes: 189,
        comments: 32
    },
    {
        id: 3,
        author: 'Market Watch',
        authorInitial: 'M',
        authorColor: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        time: '8 hours ago',
        category: 'success',
        title: 'Closed 5 profitable trades this week - strategy breakdown',
        content: 'Used combination of moving averages and volume analysis. Key was patience and waiting for confirmation. Total profit 18.5% this week.',
        likes: 456,
        comments: 78
    }
])
</script>

<style scoped>
.community-view {
    min-height: 100vh;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%);
    padding: 2rem;
}

.glass-header {
    text-align: center;
    margin-bottom: 3rem;
    padding: 3rem 2rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    margin-top: 10rem;
}

.glass-header::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
    animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 0.5;
    }

    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

.glass-header h1 {
    font-size: 3.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #60a5fa, #a78bfa, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
    position: relative;
}

.glass-header p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    position: relative;
}

.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
}

.glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
}

.glass-card h2 {
    color: white;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
}

.community-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
}

.stat-bubble {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem 1rem;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.stat-bubble::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(167, 139, 250, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s;
}

.stat-bubble:hover::before {
    opacity: 1;
}

.stat-bubble:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
}

.stat-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.stat-value {
    font-size: 2rem;
    font-weight: 800;
    color: white;
    margin-bottom: 0.5rem;
}

.stat-label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
}

.leaderboard-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.trader-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    transition: all 0.3s ease;
}

.trader-item:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateX(8px);
    border-color: rgba(96, 165, 250, 0.3);
}

.rank {
    font-size: 1.5rem;
    font-weight: 800;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

.rank-1 {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: #1a1f3a;
}

.rank-2 {
    background: linear-gradient(135deg, #c0c0c0, #e8e8e8);
    color: #1a1f3a;
}

.rank-3 {
    background: linear-gradient(135deg, #cd7f32, #daa520);
    color: #1a1f3a;
}

.trader-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
}

.trader-info {
    flex: 1;
}

.trader-name {
    color: white;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.25rem;
}

.trader-stats {
    color: #22c55e;
    font-size: 0.9rem;
    font-weight: 600;
}

.trader-badge {
    padding: 0.5rem 1rem;
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 20px;
    color: #ef4444;
    font-size: 0.85rem;
    font-weight: 600;
}

.feed-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.feed-filters {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn:hover {
    background: rgba(255, 255, 255, 0.08);
}

.filter-btn.active {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    color: white;
    border-color: transparent;
}

.feed-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.post-card {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    transition: all 0.3s ease;
}

.post-card:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(96, 165, 250, 0.3);
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.post-author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.author-avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
}

.author-name {
    color: white;
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.post-time {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.85rem;
}

.post-category {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
}

.post-category.analysis {
    background: rgba(96, 165, 250, 0.15);
    color: #60a5fa;
    border: 1px solid rgba(96, 165, 250, 0.3);
}

.post-category.signals {
    background: rgba(34, 197, 94, 0.15);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.post-category.success {
    background: rgba(251, 191, 36, 0.15);
    color: #fbbf24;
    border: 1px solid rgba(251, 191, 36, 0.3);
}

.post-content h3 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
}

.post-content p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.post-footer {
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.action-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

.cta-card {
    position: relative;
    padding: 4rem 2rem;
    text-align: center;
    overflow: hidden;
}

.cta-content {
    position: relative;
    z-index: 2;
}

.cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.cta-content p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-btn {
    padding: 1.25rem 3rem;
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    border: none;
    border-radius: 16px;
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 24px rgba(96, 165, 250, 0.3);
}

.cta-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(96, 165, 250, 0.4);
}

.cta-decoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.floating-bubble {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(96, 165, 250, 0.2), rgba(167, 139, 250, 0.1));
    animation: float 6s ease-in-out infinite;
}

.bubble-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.bubble-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 15%;
    animation-delay: 2s;
}

.bubble-3 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 50%;
    animation-delay: 4s;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0) scale(1);
        opacity: 0.3;
    }

    50% {
        transform: translateY(-30px) scale(1.1);
        opacity: 0.6;
    }
}

@media (max-width: 768px) {
    .community-view {
        padding: 1rem;
    }

    .glass-header h1 {
        font-size: 2rem;
    }

    .community-grid {
        grid-template-columns: 1fr;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .feed-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .trader-item {
        flex-wrap: wrap;
    }

    .trader-badge {
        width: 100%;
        text-align: center;
    }

    .cta-content h2 {
        font-size: 1.75rem;
    }
}
</style>