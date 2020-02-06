<template>
  <div>
   <f7-card class="card">
  <f7-card-header
    class="no-border"
    valign="bottom"
    style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)"
  >Journey To Mountains</f7-card-header>
  <f7-card-content>
    <p v-if="isOpen" class="isOpen">Open now</p>
    <p v-else class="isNotOpen">Closed now</p>
    <p><b> {{address}}</b></p>
    <p>Rating: <v-rating v-model="rating"></v-rating></p>
  </f7-card-content>
  <f7-card-footer>
    <f7-link>Like</f7-link>
    <f7-link>View more info</f7-link>
  </f7-card-footer>
</f7-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      rating: 5
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
</style>

