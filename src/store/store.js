import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const ccxt = require('ccxt')
export default new Vuex.Store({
    state: {
        exchanges: [...ccxt.exchanges],
        exchange: '',
        pairs: [],
        pair: '',
        trades: []
    },
    mutations: {
        getTrades(state, payload) {
            state.trades = payload
        },
        getMarketsPair(state, payload) {
            state.pairs = payload
        },
        getPair(state, payload) {
            state.pair = payload
        },
        getExchange(state, payload) {
            state.exchange = payload
        }
    },
    actions: {
        async getMarketsPair({ commit, state }, exchange){
            try {
                const newEx = new ccxt[state.exchange]()
                const pairs = await newEx.loadMarkets();
                commit('getMarketsPair', pairs)
            } catch (error) {
                console.log(error)
            }
        },
        getExchange({ commit }, exchange) {
            commit('getExchange', exchange)
        },
        getPair({ commit }, pair) {
            commit('getPair', pair)
        },
        async getTrades({ commit, state }) {
            try {
                const newEx = new ccxt[state.exchange]()
                const symbol = state.pair
                const limit = 20
                const since = undefined
                const trades= await newEx.fetchTrades(symbol, since, limit)
                commit('getTrades', trades)
            } catch (error) {
                console.log(error)
            }
        }
    }
});