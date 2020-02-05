import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        restaurant: [
        ]
    },
    mutations: {
        GET_RESTAURANT(state, keyword) {
            var key = 'AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0'
            var location = '45.08333,-64.36667'
            var radius = 16000;
            var sensor = false;
            var types = "restaurant";
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            var url2 = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&location=" + location + "&radius=" + radius + "&sensor=" + sensor + "&types=" + types + "&keyword=" + keyword;

            axios.get(proxyurl + url2).then(res => {
                console.log(res.data)
                state.restaurant = res.data.results
            })

        }
    },
    actions: {
        getRestaurant({ commit }, keyword) {
            commit('GET_RESTAURANT', keyword)
        }
    },
})  