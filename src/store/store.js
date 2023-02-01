import {createStore} from "vuex"

export default createStore({
    state: {
        qq: 95478654,
        pwd: 'Woshillz0328'
    },
    mutations: {
        updateQQ(state,payload) {
            state.qq = payload.qq
            state.pwd = payload.qq
        }
    }
})