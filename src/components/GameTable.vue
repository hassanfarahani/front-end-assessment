<template>
    <table>
        <tr>
            <th>Name</th>
            <th>Short Description</th>
            <th>Date Created</th>
            <th>Created By</th>
            <th>Host Days</th>
            <th>Password</th>
        </tr>
        <Game :game="game" v-for="game in gamesList" :key="game.id" />
    </table>
</template>

<script>
import Game from '@/components/Game.vue'

export default {
 name: 'GameTable',
 props: ['gamesList'],
 components: {
     Game
 },


}
</script>

<style>
    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
    }

    th, td {
        text-align: left;
        padding: 16px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>