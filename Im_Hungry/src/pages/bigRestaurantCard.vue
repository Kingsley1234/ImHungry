<template>
  <div>
   <f7-card class="card">
  <f7-card-header
    class="title"
    valign="bottom"
  >{{title}}</f7-card-header>
  <f7-card-content>
        <div v-if="showImage" class=""><img :src="imageUrl" width="300" height="300"/></div>
    <p v-if="isOpen.open_now" class="isOpen">Open now</p>
    <p v-else class="isNotOpen">Closed now</p>
    <p><b> {{address}}</b></p>
    <p class="rating">Rating: {{rating}}</p>
    <p class="numberRating">Number of Ratings: {{numberOfRating}}</p>
  </f7-card-content>
  <f7-card-footer>
    <f7-link v-if="isLiked" @click="removeFromFavourites"
        icon-ios="f7:star_fill"
        icon-aurora="f7:star_fill"
        icon-md="f7:star_fill"
      ></f7-link>
      <f7-link v-else @click="addToFavourites"
        icon-ios="f7:star"
        icon-aurora="f7:star"
        icon-md="f7:star"
      ></f7-link>
  </f7-card-footer>
</f7-card>
  </div>

</template>

<script>
export default {
  data(){
    return{
    }
  },
    computed: {
      sourceImage(){
        this.$store.state.photo
      }
    },
    methods: {
      getPhoto(){
      this.$store.dispatch('getPhoto', this.title)
      },
      addToFavourites(){
      this.$store.dispatch('like')
      },
      removeFromFavourites(){
      this.$store.dispatch('dislike', this.index) 
       this.$f7.views.main.router.back();

      }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        rating: {
          type: Number,
          default: ''
        },
        imageUrl: {
          type: String,
        },
        isLiked: {
          type: Boolean,
          default: false
        },
        index: {
          type: Number,
        },
         showImage: {
          type: Boolean,
          default: true
        },
        isOpen: {
          type: Boolean,
          default: false
        },
        numberOfRating: {
          type: Number,
          default: ''
        },
        address: {
          type: String,
          default: ''
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
</style>

