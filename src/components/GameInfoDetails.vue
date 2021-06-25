<template>
    <div>
        <h1 class="game-header">Game Details</h1>
    </div>
    <div class="container grid-container game-details">
        <div class="game-header-details">Game Name</div>
        <div class="game-header-details">Game Description</div>
        <div class="game-header-details">Game Players Usernames</div>
        <div class="game-detail"> {{ gameDetails ? gameDetails.name : null }}</div>
        <div class="game-detail">{{ gameDetails ? gameDetails.description : null }}</div>
        <div class="game-detail">
            <span v-for="player in gamePlayers" :key="player.accountid">{{ player.username }} - </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['gameDetails', 'gamePlayers'],
}
</script>

<style>

.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-gap: 2rem;
}

.game-header-details {
    font-weight: bold;
    font-size: 1.5rem;
}

.game-details {
    background: #afe3bd;
}

.game-detail {
    font-style: italic;
}

.game-header {
    text-align: center;
}
</style>