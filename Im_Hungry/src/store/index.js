import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        restaurant: [],
        location: localStorage.getItem('location') || null,
        photo: [],
        reference: "",
        currentRestaurant: {
            name: "",
            isOpen: null,
            rating: "",
            image: "",
            numberOfRating: "",
            address: ""
        },
    },
    mutations: {
        GET_RESTAURANT(state, keyword) {
            state.keyword = keyword
            var key = 'AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0'
            
            // var location = '45.08333, -64.36667'
            var radius = 16000;
            var sensor = false;
            var types = "restaurant";
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            var url2 = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&location=" + state.location + "&radius=" + radius + "&sensor=" + sensor + "&types=" + types + "&keyword=" + keyword;

            axios.get(proxyurl + url2).then(res => {
                console.log(res.data)
                state.restaurant = res.data.results
            })

        },
        GET_PHOTO(state, keyword){
            // var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400" + "&photoreference=" + reference + "=&key=AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0"
            var url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?" +"input="+ keyword + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0"
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            axios.get(proxyurl + url).then(res => {
                console.log(res.data.candidates)
                state.photo = res.data.candidates
                state.reference = state.photo[0].photos[0].photo_reference
                
            })
        },
        CURRENT_CARD(state, info){
            var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + state.reference + "&key=AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0"            
            state.currentRestaurant.name = info.title
            state.currentRestaurant.isOpen = info.isOpen
            state.currentRestaurant.image = info.image
            state.currentRestaurant.rating = info.rating
            state.currentRestaurant.numberOfRating = info.numberOfRating
            state.currentRestaurant.address = info.address
            state.currentRestaurant.image = url 
        },
        GET_LOCATION(state, location){
            state.location = location
            localStorage.setItem('location', location)
        }
    },
    actions: {
        getRestaurant({ commit }, keyword) {
            commit('GET_RESTAURANT', keyword)
        },
        getPhoto({commit}, reference){
            commit('GET_PHOTO', reference)
        },
        currentCard({commit}, info){
            commit('CURRENT_CARD', info)
        },
        getLocation({commit}, location){
            commit('GET_LOCATION', location)
        }
    },
})  