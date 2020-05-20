<template>
    <div>
        <h2>
           <el-button type="primary" @click="increment">vuex state count +1</el-button>
           <el-button type="primary" @click="decrement">vuex state count - 1</el-button>
           <el-button type="primary" @click="incrementEven">偶数 +1</el-button>
           <el-button type="primary" @click="incrementAsync">异步 +1</el-button>
        </h2>
        <p>
            点击了{{count}}次  {{evenOrOdd}}次
        </p>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(['count']),
        ...mapGetters(['evenOrOdd'])
    },
    methods: {
       ...mapActions(['increment', 'decrement', 'incrementEven', 'incrementAsync'])
    }
}
</script>

<style scoped>

</style>