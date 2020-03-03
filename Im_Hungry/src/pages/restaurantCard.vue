<template>
  <div>
   <f7-card class="card">
  <f7-card-header
    class="title"
    valign="bottom"
  >{{title}}</f7-card-header>
  <f7-card-content>
    <p v-if="isOpen.open_now" class="isOpen">Open now</p>
    <p v-else class="isNotOpen">Closed now</p>
    <p><b> {{address}}</b></p>
    <p class="rating">Rating: {{rating}}</p>
    <p class="priceRange">Price Range: {{priceRange}}</p>
    <p class="numberRating">Number of Ratings: {{numberOfRating}}</p>
  </f7-card-content>
  <f7-card-footer>
    <f7-link @click="getPhoto" popup-open="#infoCard">View more info</f7-link>
  </f7-card-footer>
</f7-card>

  </div>

</template>

<script>
export default {
    computed: {
      sourceImage(){
        this.$store.state.photo
      }
    },
    methods: {
      getPhoto(){
      this.$store.dispatch('getPhoto', "food")

      this.$store.dispatch('currentCard', {
        title: this.title,
        rating: this.rating,
        priceRange: this.priceRange,
        image: this.image,
        isOpen: this.isOpen,
        numberOfRating: this.numberOfRating,
        address: this.address,
        isLiked: this.isLiked
      })
      }
    },
    props: {
        title: {
            type: String,
            default: ''
        },

        rating: {
          type: String,
          default: ''
        },
        image: {
          type: String,
          default: ''
        },
        isOpen: {
          type: Boolean,
          default: false
        },
        numberOfRating: {
          type: String,
          default: ''
        },
        address: {
          type: String,
          default: ''
        },
        priceRange: {
          type: String,
          default: 'Data not available'
        }


    }
}
</script>
<style>
.isOpen {
  color: #009900;
}
.isNotOpen {
  color: #cc0000;
}
.rating {
  color: #ff9933
}
.title {
  font-size: 16pt;
  font-weight: bold
}
.numberRating {
  color: #797575;
}
</style>
