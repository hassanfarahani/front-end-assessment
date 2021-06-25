<template>
    <tr v-if="game && game.status === 1" @click="goToGameReview" class="row-clickable">
        <td>{{ game.name }}</td>
        <td>{{ game.shortdescription }}</td>
        <td>{{ formatDateCreated }}</td>
        <td>{{ game.createdby === 'none' ? '' : game.createdby }}</td>
        <td>{{ removeLineBreak(game.hostdays) }}</td>
        <td>
            <i v-if="game.password" class="fas fa-key"></i>
            <span v-else>null</span>
        </td>
    </tr>
</template>

<script>
import moment from 'moment'

export default {
    props: ['game'],
    computed: {
        formatDateCreated() {
            return moment(this.game.datecreated).format('MMMM Do, YYYY')
        }
    },
    methods: {
        removeLineBreak(hostdays) {
            if (hostdays.includes('_')) {
                var hostdaysWithNoLineBreak = hostdays.replace(/_/g, '')
                return hostdaysWithNoLineBreak
            } else {
                return hostdays
            }
        },
        goToGameReview() {
            this.$router.push({ name: 'GameInfo', params: { gameid: this.game.id } });
        }
    }

}
</script>

<style>
.row-clickable {
    cursor: pointer;
}
</style>