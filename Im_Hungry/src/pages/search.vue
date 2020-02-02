<template>
  <f7-page name="search">
  <!-- <f7-appbar> -->
    <f7-searchbar
        custom-search
      ></f7-searchbar>
  <!-- </f7-appbar> -->
    <!-- Top Navbar -->
    <span v-for="(items, index) in restaurant" :key="index">
      <RestaurantCard :title="items.title"/>
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
      restaurant: [
                {
                  id: '1',
                  title: 'Joes',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
                },
                {
                  id: 'Piccaso',
                  title: 'Picasso',
                  description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
                },
                {
                  id: 'Prontos',
                  title: 'Prontos',
                  description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
                },
              ]
    }
  }
};
</script>