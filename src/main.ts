import "@/assets/styles/main.scss"

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from "vue"

import App from "@/App.vue"

import { registerPlugins } from "@/plugins"

const app = createApp(App)

registerPlugins(app).
    then(() => app.mount("#app"))
