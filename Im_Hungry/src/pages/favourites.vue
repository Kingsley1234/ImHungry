<template>
  <f7-page name="favorites">
   <span v-for="(items, index) in favourites" :key="index">
      <RestaurantCard
        :title="items.name"
        :rating="items.rating"
        :isOpen="items.opening_hours"
        :address="items.vicinity"
        :numberOfRating="items.user_ratings_total"
      />
   </span>
  </f7-page>
</template>

<script>
import RestaurantCard from "./restaurantCard"
export default {
  components: {
    RestaurantCard
  },
  computed: {
    favourites(){
      return this.$store.state.favourites
    }
  }
}
</script>