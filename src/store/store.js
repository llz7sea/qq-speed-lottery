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
            money: Number(localStorage.getItem("money")),
            chances: Number(localStorage.getItem("chances")),
            token: localStorage.getItem("token")
        },
        tokens: ["1"]
    },
    mutations: {
        regist(state, payload) {
            for (let k in payload) {
                state.role[k] = payload[k]
                localStorage.setItem(k, payload[k])
            }
            localStorage.setItem("registered", "1")
            state.registered = true
            cancelShade()
        },
        reset(state, payload) {
            for (let k in payload) {
                state.role[k] = payload[k]
                localStorage.setItem(k, payload[k])
            }
            cancelShade()
            window.location.reload()
        },
        login(state) {
            state.logined = true
            cancelShade()
        },
        binding(state) {
            state.bound = true
            cancelShade()
        },
        logout(state) {
            state.logined = false
        },
        purchaseQcoin(state, payload) {
            state.role.money += payload
            localStorage.setItem("money",state.role.money)
        },
        purchaseChances(state, payload) {
            state.role.chances += payload[0]
            state.role.money -= payload[1]
            localStorage.setItem("chances",state.role.chances)
            localStorage.setItem("money",state.role.money)
        }
    }
})