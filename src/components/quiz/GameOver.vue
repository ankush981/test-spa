<template>
    <v-container>
        <v-layout align-center justify-center column>
            <v-flex>
                <p class="display-2">Game over!</p>

                <div>
                    <img src="https://i.ytimg.com/vi/t7hsVa18yfA/maxresdefault.jpg" width="250">
                </div>

                <div class="qna">                    
                    <p>&#9757; &nbsp; <em>Game over?! . . . Like, really?</em></p>
                    <p>&#9863; &nbsp; Yes, really. Like, you lost, really.</p>

                    <br>
                    <p>&#9757; &nbsp; <em>But how did I lose?</em></p>
                    <p>&#9863; &nbsp; Noticed that you got zero points all along?</p>

                    <br>
                    <p>&#9757; &nbsp; <em>But I knew some of the questions by heart!</em></p>
                    <p>&#9863; &nbsp; It doesn't matter.</p>

                    <br>
                    <p>&#9757; &nbsp; <em>But, but! . . .</em></p>
                    <p>&#9863; &nbsp; It's my world. I make the rules here. Run along, now!</p>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {

    }
}
</script>


<style scoped>
.qna {
    font-size: 1.5em;
}

.qna p{
    margin-bottom: 0px;
}

img {
    margin-top : 0px;
    margin-bottom : 10px;
}
</style>

