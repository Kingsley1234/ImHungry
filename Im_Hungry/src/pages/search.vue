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
      <RestaurantCard
        :title="items.name"
        :rating="items.rating"
        :isOpen="items.opening_hours"
        :address="items.vicinity"
        :numberOfRating="items.user_ratings_total"
      />
    </span>
    <f7-popup id="infoCard">
      <f7-view>
        <f7-page>
          <f7-navbar :title="currentRestaurant.name">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <bigRestaurantCard
            :isOpen="currentRestaurant.isOpen"
            :rating="currentRestaurant.rating"
            :address="currentRestaurant.address"
            :numberOfRating="currentRestaurant.numberOfRating"
            :imageUrl="currentRestaurant.image"
          />
          <f7-block></f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>
  </f7-page>
</template>

<script>
import RestaurantCard from "./restaurantCard";
import bigRestaurantCard from "./restaurantCard";
export default {
  components: {
    RestaurantCard,
    bigRestaurantCard
  },
  data() {
    return {
      keyword: "",
      title: ""
    };
  },
  computed: {
    restaurant() {
      return this.$store.state.restaurant;
    },
    currentRestaurant() {
      return this.$store.state.currentRestaurant;
    }
  },
  methods: {
    search() {
      this.$store.dispatch("getRestaurant", this.keyword);
      this.$store.dispatch('getPhoto', this.keyword)

    }
  },
  created() {}
};
</script>