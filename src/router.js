import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
let func = (params, query) => {
    return {
        name: params.name,
        id: query.id //这个是路径中使用？来传递的
    }
}
export default new Router({
    mode: 'history',
    routes: [
        // {
        //     path: "firstNews/:name",
        //     component: firstnews，
        //     props: func
        // }
    ]
})