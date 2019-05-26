<template>
    <v-container>
        <v-layout>
            <score></score>
            <v-flex>
                <p v-if="this.category" class="headline">Solving for category: <span class="category">{{ category.name }}</span></p>
            </v-flex>
            <timer></timer>   
        </v-layout>

        <v-layout>
            <v-flex v-if="currentQuestion" ma-4>
                <p class="headline">{{ currentQuestion.question }}:</p>

                <div>
                    <div v-for="(choice,index) in currentQuestion.choices" :key="index">
                        <p class="choice" v-html="choice" @click="completedCount++"></p>
                    </div>
                </div>
                
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Score from './Score';
import Timer from './Timer';
import { setInterval } from 'timers';

export default {
    components: {
        Score,
        Timer,
    },

    data: function() {
        return {
            category: null,
            questions: [],
            completedCount: 0,
        }
    },

    computed: {
        isQuizOver() {
            if(this.timeLeft == 0 || (this.completedCount == this.questions.length)) {
                return true;
            }

            return false;
        },

        timeLeft() {
            return this.$store.getters.timeLeft;
        },

        currentQuestion() {
            return this.questions[this.completedCount];
        }
    },

    watch: {
        isQuizOver(reallyOver) {
            if(reallyOver) {
                this.$router.push({name: 'game-over'});
            }
        }
    },

    mounted() {
        this.category = this.$store.getters.category;

        if(!this.category.id) {
            this.$router.push({name: 'pick-category'});
            return;
        }

        this.axios.get(process.env.VUE_APP_API_BASE_URL + '/categories/' + this.category.id + '/questions')
        .then(res => {
            this.questions = res.data;
            setInterval(() => { this.$store.dispatch('tick') }, 1000);
        })
        .catch(err => {});
    }
}
</script>

<style scoped>
.category {
    color: blue;
}

.choice {
    font-size: 1.5em;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 20px;
}

.choice:hover {
    background-color: #ccc;
}
</style>
