<template>
  <div>
   <f7-card class="card">
  <f7-card-header
    class="title"
    valign="bottom"
  >{{title}}</f7-card-header>
  <f7-card-content>
    <div class="demo-facebook-avatar"><img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA8k2dEkX7A15tvHp0AHLIOsDCKk7-MxcYJ3AjT45KMSZ3fXLtg50anLo94d47lH0VVKcrHZOPaS9wOxLNoEmECtASavpZ7FCv0FfmvqD8oD7ZYhFeyX0O-yDv8nTHo5bBEhBMbkCeiAmYZpapajBktdWCGhS1P_N7RU2as5T-C0wTCkSGGLMRjA&key=AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0" width="340" height="340"/></div>
    <p v-if="isOpen.open_now" class="isOpen">Open now</p>
    <p v-else class="isNotOpen">Closed now</p>
    <p><b> {{address}}</b></p>
    <p class="rating">Rating: {{rating}}</p>
  </f7-card-content>
  <f7-card-footer>
    <f7-link>Like</f7-link>
    <f7-link @click="getPhoto">View more info</f7-link>
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
      this.$store.dispatch('getPhoto', this.title)
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
.rating {
  color: #ff9933
}
.title {
  font-size: 16pt;
  font-weight: bold
}
</style>

