/**
 * 包含多个间接更新state的方法
 */
import {INCREMENT, DECREMENT, INCREMENT_EVEN, INCREMENT_ASYNC} from './mutations-type'

export default {
    //不能直接操作数据，只有通过mutations里的方法才能操作
    increment({
        commit
    }) {
        commit(INCREMENT)
    },
    decrement({
        commit
    }) {
        commit(DECREMENT)
    },
    incrementEven({
        commit,
        state
    }) {
        commit(INCREMENT_EVEN, {state})
    },
    incrementAsync({
        commit,
        state
    }) {    
        commit(INCREMENT_ASYNC, {state})
    }
}