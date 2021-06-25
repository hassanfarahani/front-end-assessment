<template>
    <div class="container grid-container game-details">
        <div class="game-header-details">Game Name</div>
        <div class="game-header-details">Game Description</div>
        <div class="game-header-details">Game Players Usernames</div>
        <div class=""> {{ gameDetails ? gameDetails.name : null }}</div>
        <div class="">{{ gameDetails ? gameDetails.description : null }}</div>
        <div class="">
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
    grid-gap: 1rem;
}

.game-header-details {
    font-weight: bold;
    font-size: 1.5rem;
}
</style>