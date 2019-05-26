import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        category: {},
        questions: [],
        score: 0,
        timeLeft: 20, // seconds
    },

    getters: {
        category: state => state.category,
        questions: state => state.questions,
        score: state => state.score,
        timeLeft: state => state.timeLeft,
    },

    mutations: {
        setCategory(state, category) {
            state.category = category;
        },

        setQuestions(state, questions) {
            state.questions = questions;
        },

        decrementTime(state) {
            if(state.timeLeft) {
                state.timeLeft = state.timeLeft - 1;
            };
        },

        refillTime(state) {
            state.timeLeft = 20;
        }
    },

    actions: {
        setCategory({commit}, category) {
            commit('setCategory', category);
        },

        tick({commit}) {
            commit('decrementTime');
        },

        resetClock({commit}) {
            commit('refillTime');
        }
    }
})
