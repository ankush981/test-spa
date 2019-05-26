<template>
    <v-flex shrink>
        <p class="headline">Time left: <span class="score">{{ timeLeft }}</span></p>
    </v-flex>
</template>

<script>
export default {
    computed: {
        timeLeft() {
            return this.$store.getters.timeLeft;
        },
    }
}
</script>


<style scoped>
.score {
    font-size: 1.2em;
    font-weight: bold;
    color: red;
    position: relative;
    top: 0.1em;
}
</style>

