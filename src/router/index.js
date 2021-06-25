import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GameInfo from '../views/GameInfo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gameinfo/:gameid',
    name: 'GameInfo',
    component: GameInfo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
