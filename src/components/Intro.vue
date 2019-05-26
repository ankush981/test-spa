<template>
    <v-container>
        <v-layout text-xs-center wrap>
            <v-flex ma-5>
                <h1 class="display-2 mb-3">Depressing Quiz</h1>
                <p class="headline mb-3">Where you'll always feel like a noob!</p>
            </v-flex>   

            <v-flex xs12 mb-4>
                <img src="https://intermountainhealthcare.org/-/media/images/modules/news/depression-heart-disease-intermountain.jpg?mw=800&hash=6102E73A5DB3F9B7AA10F91D334DA71DF4ABFCD4" width="200">
            </v-flex>
                     
        </v-layout>

        <v-layout justify-center>
            <v-flex xs6>
                <p class="subheading mb-3"><em>Warning: This quiz is designed to destory motivation and suck hope out of human soul. If you're of the faint heart (or in a corporate job), you should leave immediately.</em></p>
            </v-flex>
        </v-layout>

        <v-layout justify-center>
            <v-btn @click="surrender" color="green" dark>I'm shitting already. Leave.</v-btn>
            <v-btn color="red" dark>I'm ready to get whacked.</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    methods: {
        surrender() {
            console.log("here");
            this.$router.push({name: 'surrender'});
        }
    }
};
</script>

<style>
img {
    border-radius: 50%;
}
</style>
