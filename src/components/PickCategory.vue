<template>
    <v-container>
        <v-layout text-xs-center wrap>
            <v-flex ma-2>
                <p class="headline mb-3">Select a category that catches your fancy</p>
            </v-flex>
        </v-layout>

        <v-layout align-center column>
            <v-flex ma-1>
                <div v-for="category in categories" :key="category.id">
                    <v-btn
                    dark
                    color="blue" 
                    @click="setCategory(category)">{{ category.title }}</v-btn>
                </div>
            </v-flex>  
        </v-layout>

    </v-container>
</template>

<script>
export default {
    data: function() {
        return {
            categories: []
        }
    },

    mounted() {
        this.axios.get(process.env.VUE_APP_API_BASE_URL + '/categories')
        .then(res => {
            this.categories = res.data
        })
        .catch(err => {
            
        });
    },

    methods: {
        setCategory(category) {
            this.$store.dispatch('setCategory', {
                id: category.id,
                name: category.title
            });

            this.$store.dispatch('resetClock');
            this.$router.push({name: 'quiz'});
        }
    }
};
</script>

<style>
</style>
