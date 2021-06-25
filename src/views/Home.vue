<template>
  <div class="container">
    <h2 class="title">List of Games</h2>
    <GameTable :gamesList="gamesList" />
  </div>
</template>

<script>
import GameTable from '@/components/GameTable.vue'

export default {
  name: 'Home',
  data() {
    return {
      gamesList: []
    }
  },
  async created() {
    await this.getGamesList()
  },
  methods: {
    async getGamesList() {
      const response = await fetch('http://api.planets.nu/games/list')
      const data = await response.json()
      console.log(data)
      this.gamesList = data
    }
  },
  components: {
    GameTable
  }
}
</script>

<style scoped>
.container {
  padding: 2rem;
  margin: auto;
}

.title {
  text-align: center;
}
</style>
