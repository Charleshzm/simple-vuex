/**
 * 多个可以直接同步更新状态的方法 对象模块
 */
import {INCREMENT, DECREMENT, INCREMENT_EVEN, INCREMENT_ASYNC} from './mutations-type'

export default {

  [INCREMENT](state) {
    state.count++
  },
  [DECREMENT](state) {
    state.count--
  },
  [INCREMENT_EVEN](state) {
    if (state.count % 2 === 0) {
      state.count ++
    }
  },
  [INCREMENT_ASYNC](state) {    
    setTimeout(function () {
      state.count ++
    }, 1000)
  }
}