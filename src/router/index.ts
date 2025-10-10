import HomeView from "@/views/HomeView.vue"
import SignalsView from "@/views/SignalsView.vue"
import MarketAnalysisView from "@/views/MarketAnalysisView.vue"
import PricingView from "@/views/PricingView.vue"
import CommunityView from "@/views/CommunityView.vue"
import LoginView from "@/views/LoginView.vue"
import LearnMoreView from "@/views/LearnMoreView.vue"

import { createRouter as createVueRouter, createWebHistory } from "vue-router"

import TermsConditionsView from "@/views/TermsConditionsView.vue"
import RegisterView from "@/views/RegisterView.vue"

const createRouter = () => {
    const router = createVueRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: "/",
                name: "home",
                component: HomeView,
            },
            {
                path: "/signals",
                name: "signals",
                component: SignalsView,
                meta: {requiresAuth: true},
            },
            {
                path: "/market-analysis",
                name: "market-analysis",
                component: MarketAnalysisView,
                meta: {requiresAuth: true},
            },
            {
                path: "/pricing",
                name: "pricing",
                component: PricingView,
                meta: {requiresAuth: true},
            },
            {
                path: "/community",
                name: "community",
                component: CommunityView,
                meta: {requiresAuth: true},
            },
            {
                path: "/learn",
                name: "learn",
                component: LearnMoreView,
            },
            {
                path: "/login",
                name: "login",
                component: LoginView,
                meta: {requiresGuest: true},
            },
            {
                path: "/register",
                name: "register",
                component: RegisterView,
                meta: {requiresGuest: true},
            },
            {
                path: "/terms-conditions",
                name: "terms-conditions",
                component: TermsConditionsView,
            },
        ],
    })

    // Global route guard
    router.beforeEach(async (to, _from, next) => {
        const requiresAuth = to.matched.some(record => (record.meta as any)?.requiresAuth === true)
        const requiresGuest = to.matched.some(record => (record.meta as any)?.requiresGuest === true)

        let loggedIn = false

        try {
            const res = await fetch("https://back.early-trade-signals.com/auth/me", {
                credentials: "include"
            })
            loggedIn = res.ok
        } catch (err) {
            loggedIn = false
        }

        if (requiresAuth && !loggedIn) {
            // Not logged in → redirect to login
            next({ name: "login" })
        } else if (requiresGuest && loggedIn) {
            // Logged in → redirect to home
            next({ name: "home" })
        } else {
            next()
        }
    })

    return router
}

export default createRouter