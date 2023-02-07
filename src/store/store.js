import {createStore} from "vuex"
import {cancelShade} from "@/utils/shadeControler";
import {prizes, prizesCodeSortByValue} from "@/enums/prizes";
import bus from "vue3-eventbus"
import {countNum} from "@/enums/countNum";

export default createStore({
    state: {
        logined: Number(localStorage.getItem("logined")),
        bound: Number(localStorage.getItem("bound")),
        registered: Number(localStorage.getItem("registered")),
        role: {
            qq: localStorage.getItem("qq"),
            pwd: localStorage.getItem("pwd"),
            region: localStorage.getItem("region"),
            name: localStorage.getItem("name"),
            money: Number(localStorage.getItem("money")),
            chances: Number(localStorage.getItem("chances")),
            token: localStorage.getItem("token"),
            rollDishChances: Number(localStorage.getItem("rollDishChances")),
            highLight: JSON.parse(localStorage.getItem("highLight")),
            blessValue: Number(localStorage.getItem("blessValue")),
            blessTotal: Number(localStorage.getItem("blessTotal")),
            repository: JSON.parse(localStorage.getItem("repository")),
            alreadyWinPrize: JSON.parse((localStorage.getItem("alreadyWinPrize"))),
            dishPrizes: JSON.parse(localStorage.getItem("dishPrizes"))
        },
        tokens: ["1"],
        lotteryResult: ""
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
            window.location.reload()
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
            localStorage.setItem("logined", "1")
            state.logined = true
            cancelShade()
        },
        binding(state) {
            localStorage.setItem("bound", "1")
            state.bound = true
            cancelShade()
        },
        logout(state) {
            localStorage.setItem("logined", "0")
            localStorage.setItem("bound", "0")
            state.logined = false
        },
        purchaseChancesWithoutQcoin(state, payload) {
            state.role.chances += payload
            localStorage.setItem("chances", state.role.chances)
        },
        purchaseChances(state, payload) {
            state.role.chances += payload[0]
            state.role.money -= payload[1]
            localStorage.setItem("chances", state.role.chances)
            localStorage.setItem("money", state.role.money)
        },
        lottery(state, payload) {
            // 初始化
            let q = payload // 参数为抽奖次数
            state.role.chances -= q
            let cheapPool = prizes.filter(item => {
                if (item.type == "b" && !item.name.includes("永久")) {
                    return item
                }
            })
            let resultStr = ""
            let resultArr = []
            let chosenPrizes = window.chosenPrizes


            // lottery start
            for (let i = 0; i < q; i++) {
                let nextPrize = cheapPool[Math.floor(Math.random() * 4)]
                if (window.chosenPrizes.length) {
                    nextPrize = prizes.find(p => {
                        return p.code == chosenPrizes[0]
                    })
                    window.chosenPrizes.shift()
                }
                if (nextPrize.type == "s" || nextPrize.name.includes("永久")) {
                    state.role.repository.push(nextPrize.code)
                    localStorage.setItem("repository", JSON.stringify(state.role.repository))
                }
                resultArr.push(nextPrize)

                // 高亮逻辑 start
                if (nextPrize.position) {
                    let x = nextPrize.position[0]
                    let y = nextPrize.position[1]
                    if (state.role.highLight[x][y] == 0) {
                        let value_index = countNum.indexOf(state.role.blessTotal)
                        state.role.highLight[x][y] = 1
                        state.role.blessValue = 0
                        state.role.blessTotal = countNum[value_index + 1]
                    }
                    if (state.role.highLight[x][y] == 1) {
                        state.role.blessValue += 1
                        // 如果这次抽奖 充满了祝福值
                        if (state.role.blessValue == state.role.blessTotal) {
                            // 获取未点亮的奖品坐标列表
                            let unLightUpPosition = []
                            let unLightUpCode = []
                            state.role.highLight.forEach((x, xIndex) => {
                                x.forEach((y, yIndex) => {
                                    if (y == 0) {
                                        unLightUpPosition.push(xIndex.toString() + yIndex.toString())
                                    }
                                })
                            })
                            // 根据位置坐标数组获得奖品的code数组
                            prizes.forEach(p => {
                                if (p.position) {
                                    let positionStr = p.position[0].toString() + p.position[1].toString()
                                    // 如果位置未点亮 并且在祝福值奖池内
                                    if (unLightUpPosition.includes(positionStr) && prizesCodeSortByValue.includes(p.code)) {
                                        unLightUpCode.push(p.code)
                                    }
                                }
                            })
                            // 从中选出优先级最低的一个
                            unLightUpCode.sort((a, b) => {
                                return prizesCodeSortByValue.indexOf(a) - prizesCodeSortByValue.indexOf(b)
                            })
                            // 则为下次抽奖注入未点亮的奖品
                            window.chosenPrizes.push(unLightUpCode[0])
                            console.log(window.chosenPrizes)
                        }
                    }
                }
                // 高亮逻辑 end
            }
            // lottery end


            // 3 将奖品按照code分组(生成结果字符串)
            const groupByCode = resultArr.reduce((group, item) => {
                const {code} = item
                group[code] = group[code] ?? []
                group[code].push(item)
                return group
            }, {})
            for (let k in groupByCode) {
                resultStr += `${groupByCode[k][0].name}x${groupByCode[k].length},`
            }

            // 4 生成结果字符串
            resultStr = resultStr.substr(0, resultStr.lastIndexOf(","))

            // 5 重置必中奖品
            bus.emit("updatePrize")
            // 抽奖逻辑 end

            // 6 完成状态设置
            state.lotteryResult = resultStr
            localStorage.setItem("highLight", JSON.stringify(state.role.highLight))
            localStorage.setItem("blessValue", state.role.blessValue)
            localStorage.setItem("blessTotal", state.role.blessTotal)
            localStorage.setItem("chances", state.role.chances)
            bus.emit("updatePrize")
        },
        addRollDishChance(state) {
            state.role.rollDishChances ++
            localStorage.setItem("rollDishChances", state.role.rollDishChances)
        },
        rollDish(state) {
            state.role.rollDishChances--
            state.role.repository.push(state.role.dishPrizes[0])
            state.role.alreadyWinPrize.push(state.role.dishPrizes.shift())
            localStorage.setItem("repository", JSON.stringify(state.role.repository))
            localStorage.setItem("rollDishChances", state.role.rollDishChances)
            localStorage.setItem("alreadyWinPrize", JSON.stringify(state.role.alreadyWinPrize))
            localStorage.setItem("dishPrizes", JSON.stringify(state.role.dishPrizes))

        }
    }
})