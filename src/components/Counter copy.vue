<template>
    <div>
        <h2>
           <el-button type="primary" @click="increment">vuex state count +1</el-button>
           <el-button type="primary" @click="decrement">vuex state count - 1</el-button>
           <el-button type="primary" @click="incrementEven">偶数 +1</el-button>
           <el-button type="primary" @click="incrementAsync">异步 +1</el-button>
        </h2>
        <p>
            点击了{{count}}次 {{evenOrOdd}}次
        </p>
    </div>
</template>

<script>
// import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        count() {
            return this.$store.state.count
        },
        evenOrOdd() {
            return this.$store.getters.evenOrOdd
        }
    },
    methods: {
        // ...mapMutations(['INCREMENT', 'DECREMENT']),
        increment() {
            // this.INCREMENT()
            console.log(this.$store);
            
            // this.$store.commit('INCREMENT')
            this.$store.dispatch("increment")
        },
        decrement() {
            // this.DECREMENT()
            // this.$store.commit('DECREMENT')
            this.$store.dispatch("decrement")
        },
        incrementEven() {//count为偶数时才加一
            this.$store.dispatch("incrementEven")
        },
        incrementAsync() {
            this.$store.dispatch("incrementAsync")
        }
    }
}
</script>

<style scoped>

</style>