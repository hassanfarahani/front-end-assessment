<template>
  <div class="container">
    <GameInfoDetails :gameDetails="gameInfoDetails" :gamePlayers="gamePlayers" />
  </div>
</template>

<script>
import GameInfoDetails from '@/components/GameInfoDetails.vue'

export default {
  name: 'GameInfo',
  components: {
    GameInfoDetails,
  },
  async created() {
    const data = await this.getGameInfo()
    console.log('game players:', data)
    this.gameInfoDetails = data.game
    this.gamePlayers = data.players
  },
  data() {
    return {
      gameInfoDetails: null,
      gamePlayers: [],
    }
  },
  methods: {
    async getGameInfo() {
      const response = await fetch(`http://api.planets.nu/game/loadinfo?gameid=${this.$route.params.gameid}`)
      const data = await response.json()
      return data
    }
  }
}
</script>

<style>
.container {
  padding: 2rem;
  margin: auto;
}
</style>