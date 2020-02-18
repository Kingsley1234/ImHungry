import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        restaurant: [],
        location: localStorage.getItem('location') || null,
        radius: localStorage.getItem('radius') || 1,
        photo: [],
        reference: "",
        favourites: [localStorage.getItem('favourites')],
        currentRestaurant: {
            name: "",
            isOpen: null,
            rating: "",
            image: "",
            numberOfRating: "",
            address: "",
            isLiked: false
        },
    },
    mutations: {
        GET_RESTAURANT(state, keyword) {
            state.keyword = keyword
            var key = 'AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0'
            
           
            var radius = state.radius * 1000;
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
            state.currentRestaurant.isLiked = info.isLiked
        },
        GET_LOCATION(state, location){
            state.location = location
            localStorage.setItem('location', location)
        },
        CHANGE_RADIUS(state, distance){
            state.radius = distance
            localStorage.setItem('radius', distance)
        },
        CHANGE_PROVINCE(state, province){
            state.location = province
            if(state.location === "Alberta"){
                state.location = "51.0447,-114.0719"
            }
            else if(state.location === "British Columbia"){
                state.location = "53.7267, -127.6476"
            }
            else if(state.location === "Ontario"){
                state.location = "53.2538, -85.3232"
            }
            else if(state.location === "Quebec"){
                state.location = "52.9399,-75.5491"
            }
            else if(state.location === "Manitoba"){
                state.location = "53.7609, -98.8139"
            }
            else if(state.location === "Saskatchewan"){
                state.location = "52.9399, -106.4509"
            }
            else if(state.location === "Newfoundland"){
                state.location = "53.1355, -57.6604"
            }
            else if(state.location === "PEI"){
                state.location = "46.5107, -63.4168"
            }
            else if(state.location === "New Brunswick"){
                state.location = "46.5653, -66.4619"
            }
        },
        LIKE(state){
            state.currentRestaurant.isLiked = !state.currentRestaurant.isLiked
            state.favourites.push(state.currentRestaurant)
            localStorage.setItem('favourites',state.favourites)
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
        },
        changeRadius({commit}, distance){
            commit('CHANGE_RADIUS', distance)
        },
        changeProvince({commit}, province){
            commit('CHANGE_PROVINCE', province)
        },
        like({commit}){
            commit("LIKE")
        }

    },
})  