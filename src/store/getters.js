/**
 * 服务于state
 */

export default {
    evenOrOdd(state) {
        return state.count % 2 === 0 ? "偶数" : "奇数"
    }

}