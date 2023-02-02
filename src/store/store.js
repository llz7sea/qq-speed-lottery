import {createStore} from "vuex"
import {cancelShade} from "@/utils/shadeControler";

export default createStore({
    state: {
        logined: false,
        bound: false,
        registered: localStorage.getItem("registered"),
        role: {
            qq: localStorage.getItem("qq"),
            pwd: localStorage.getItem("pwd"),
            region: localStorage.getItem("region"),
            name: localStorage.getItem("name"),
            token: localStorage.getItem("token")
        },
        tokens: ["1"]
    },
    mutations: {
        regist(state, payload) {
            console.log(1)
            for (let k in payload) {
                state.role[k] = payload[k]
                localStorage.setItem(k, payload[k])
            }
            localStorage.setItem("registered", 'true')
            state.registered = true
            cancelShade()
        },
        login(state) {
            state.logined = true
            cancelShade()
        },
        binding(state){
            state.bound = true
            cancelShade()
        },
        logout(state) {
            state.logined = false
        }
    }
})