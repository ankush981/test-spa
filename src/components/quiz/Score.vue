<template>
    <v-flex grow>
        <p class="headline">Your score: <span class="score">{{ score }}</span></p>
    </v-flex>
</template>

<script>
export default {
    computed: {
        score() {
            return this.$store.getters.score;
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

