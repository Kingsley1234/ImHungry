<template>
  <f7-page name="favorites">
        <f7-navbar title="Favourites"></f7-navbar>
    <span v-for="(items, index) in favourites" :key="index">
      <span v-if="items.name">
        <RestaurantCard
          :index="index"
          :showImage="false"
          :isLiked="items.isLiked"
          :title="items.name"
          :rating="items.rating"
          :isOpen="items.isOpen"
          :address="items.address"
          :numberOfRating="items.numberOfRating"
        />
      </span>
    </span>
  </f7-page>
</template>

<script>
import RestaurantCard from "./bigRestaurantCard";
export default {
  data(){
    return{
    }
  },
  components: {
    RestaurantCard
  },
  computed: {
    favourites() {
      return this.$store.state.fav;
      
    }
  },
//  methods: {
//    favourites(){
//      this.favourite = this.$store.getters.favouritesArray
//    }
//  },
//   created(){
//     this.favourites()
//   }
};
</script>