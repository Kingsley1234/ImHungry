<template>
  <f7-page class="theme-dark" name="Im Hungry">
    <f7-navbar :sliding="false" large>
      <f7-nav-left>
        <!-- <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link> -->
      </f7-nav-left>
      <f7-nav-title sliding>Im Hungry</f7-nav-title>
      <f7-nav-right>
        <f7-link
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="material:menu"
          panel-open="right"
        ></f7-link>
      </f7-nav-right>
      <f7-nav-title-large sliding>Im Hungry!</f7-nav-title-large>
    </f7-navbar>
    <f7-block></f7-block>
    <f7-block strong inset>
      <f7-block-title class=".f7-block"></f7-block-title>
      <f7-button fill @click="randomize" raised popup-open="#my-popup">Press Me!</f7-button>
    </f7-block>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar :title="name">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <RestaurantCard :title="name" :rating="ratings" :isOpen="isOpen" :numberOfRating="noOfRatings" />
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>
    <f7-panel right reveal theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Filters"></f7-navbar>
          <f7-block>
            <f7-list>
              <f7-list-item
                title="Provinces"
                smart-select
                :smart-select-params="{openIn: 'popover'}"
              >
                <select name="Provinces" id="provinces" @change="checkProvinces">
                  <option value="Nova Scotia" selected>Nova Scotia</option>
                  <option value="Alberta">Alberta</option>
                  <option value="Ontario">Ontario</option>
                  <option value="Quebec">Quebec</option>
                  <option value="New Brunswick">New Brunswick</option>
                  <option value="Manitoba">Manitoba</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="PEI">Prince Edward Island</option>
                  <option value="Saskatchewan">Saskatchewan</option>
                  <option value="Newfoundland">Newfoundland</option>
                </select>
              </f7-list-item>
              <f7-block-title>
                Distance(km)
                <span>{{distance}}</span>
              </f7-block-title>
              <f7-list simple-list>
                <f7-list-item>
                  <f7-list-item-cell class="flex-shrink-3">
                    <f7-range
                      :min="1"
                      :max="100"
                      :step="1"
                      :value="distance"
                      @range:change="onDistanceChange"
                    ></f7-range>
                  </f7-list-item-cell>
                  <f7-list-item-cell class="width-auto flex-shrink-0">
                    <!--<f7-icon ios="f7:speaker_3_fill" aurora="f7:speaker_3_fill" md="material:volume_up"></f7-icon>-->
                  </f7-list-item-cell>
                </f7-list-item>
              </f7-list>
              <f7-list>
                <f7-list-item @change="openNow" checked checkbox title="Open now" name="Open now"></f7-list-item>
              </f7-list>
            </f7-list>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>
  </f7-page>
</template>


<script>
import RestaurantCard from "./restaurantCard";
export default {
  data() {
    return {
      keyword: "food",
      randomNum: "",
      name: "",
      ratings: "",
      isOpen: null,
      noOfRatings: "",
      distance: this.$store.state.radius,
      selected: "",
      open: this.$store.state.open
    };
  },
  components: {
    RestaurantCard
  },
  methods: {
    openNow(e){
      if(e.target.checked){
        this.$store.dispatch('changeOpen').then( ()=> {
          this.$store.dispatch("getRestaurant", "food");
        }
        )
      }
      else{
        this.$store.dispatch('changeOpen').then(()=> {
          this.$store.dispatch("getRestaurant", "food");

        })

      }
    },
    checkProvinces() {
      var id = document.getElementById("provinces");
      this.selected = id.options[id.selectedIndex].value;
      this.$store.dispatch("changeProvince", this.selected);
    },
    randomize() {
      var length;
      this.$store.dispatch("getRestaurant", this.keyword);
      length = this.restaurant.length;
      length++;
      this.randomNum = Math.floor(Math.random() * length);
      this.name = this.restaurant[this.randomNum].name;
      this.ratings = this.restaurant[this.randomNum].rating;
      this.isOpen = this.restaurant[this.randomNum].opening_hours;
      this.noOfRatings = this.restaurant[this.randomNum].user_ratings_total;
    },
    onDistanceChange(value) {
      this.distance = value;
      this.$store.dispatch("changeRadius", this.distance);
    }
  },
  computed: {
    restaurant() {
      return this.$store.state.restaurant;
    }
  }
};
</script>

