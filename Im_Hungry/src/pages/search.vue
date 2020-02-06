<template>
  <f7-page name="search">
    <f7-searchbar
        custom-search
        :disable-button="!$theme.aurora"
         placeholder="Feed thy self"
         @input="keyword = $event.target.value"
         @keyup.native.enter="search()"
      ></f7-searchbar>
    <!-- Top Navbar -->
    <span v-for="(items, index) in restaurant" :key="index">
      <RestaurantCard :title="items.name" :rating="items.rating" :isOpen="items.opening_hours"
      :address="items.vicinity" :image="items.photos[0].photo_reference"/>
    </span>
  </f7-page>
</template>

<script>
import RestaurantCard from "./restaurantCard";
export default {
  components: {
    RestaurantCard
  },
  data(){
    return{
      keyword: ''
    }
  },
  computed: {
    restaurant(){
      return this.$store.state.restaurant
    }
  },
  methods: {
    search(){
      this.$store.dispatch('getRestaurant', this.keyword)
    },
    // populatePhoto(index){

    // }

  },
  created(){
  }
};
</script>