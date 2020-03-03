<template>
  <f7-page class="custom-theme" name="Im Hungry">
    <f7-navbar :sliding="false" large>
      <f7-nav-left>
        <!-- <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link> -->
      </f7-nav-left>
      <f7-nav-title sliding>Im Hungry</f7-nav-title>
      <f7-nav-right>
        <f7-link
          icon-="f7:slider_horizontal_3"
          icon-aurora="f7:menu"
          icon-md="material:tune"
          panel-open="right"
        ></f7-link>
      </f7-nav-right>
      <div class="navbar-inner">
        <img src="../assets/food.jpg" />
      </div>
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
            <!-- <transition name="router-anim" enter-active-class="animated bounceInDown"> -->
              <RestaurantCard
                :title="name"
                :rating="ratings"
                :isOpen="isOpen"
                :numberOfRating="noOfRatings"
                :address="address"
              />
            <!-- </transition> -->
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>
    <f7-panel right reveal custom-theme>
      <f7-view>
        <f7-page>
          <f7-navbar title="Filters"></f7-navbar>
          <f7-block>
            <f7-list>
              <f7-block-title>
                Distance:
                <span>{{distance}}</span>
                km
              </f7-block-title>
              <f7-list simple-list>
                <f7-list-item>
                  <f7-list-item-cell class="flex-shrink-3">
                    <f7-range
                      :min="0"
                      :max="50"
                      :step="1"
                      :scale="true"
                      :scaleSteps="5"
                      :scaleSubSteps="4"
                      :value="distance"
                      @range:change="onDistanceChange"
                    ></f7-range>
                  </f7-list-item-cell>
                  <f7-list-item-cell class="width-auto flex-shrink-0">
                    <!--<f7-icon ios="f7:speaker_3_fill" aurora="f7:speaker_3_fill" md="material:volume_up"></f7-icon>-->
                  </f7-list-item-cell>
                </f7-list-item>
              </f7-list>

              <f7-block-title>Location:</f7-block-title>
              <f7-list-item
                title="Selected"
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

              <!--Open Now-->
              <f7-list>
                <f7-list-item @change="openNow" checked checkbox title="Open now" name="Open now"></f7-list-item>
              </f7-list>

              <!--Show me:-->
              <f7-list id="genreSelect">
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="food"
                  title="All"
                  name="genre"
                  checked
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Fast Food"
                  title="Fast Food"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Italian"
                  title="Italian"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="French"
                  title="French"
                  name="genre"
                ></f7-list-item>
                <f7-list-item @change="selectGenre" radio value="Steak" title="Steak" name="genre"></f7-list-item>
                <f7-list-item @change="selectGenre" radio value="Grill" title="Grill" name="genre"></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Nigerian"
                  title="Nigerian"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Chinese"
                  title="Chinese"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Lebanese"
                  title="Lebanese"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="International"
                  title="International"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Canadian"
                  title="Canadian"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Coffee"
                  title="Coffee"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="European"
                  title="European"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Breakfast"
                  title="Breakfast"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Sandwich"
                  title="Sandwich"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Vegetarian"
                  title="Vegetarian"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Bar Food"
                  title="Bar Food"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Desserts"
                  title="Desserts"
                  name="genre"
                ></f7-list-item>
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Japanese"
                  title="Japanese"
                  name="genre"
                ></f7-list-item>
                <f7-list-item @change="selectGenre" radio value="Thai" title="Thai" name="genre"></f7-list-item>
              </f7-list>
            </f7-list>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>
  </f7-page>
</template>


<script>
import RestaurantCard from "./BigRestaurantCard";
export default {
  data() {
    return {
      keyword: "food",
      randomNum: "",
      name: "",
      ratings: "",
      isOpen: null,
      noOfRatings: "",
      address: "",
      distance: this.$store.state.radius,
      selected: "",
      selectedGenre: "",
      open: this.$store.state.open,
      priceRange: ""
    };
  },
  components: {
    RestaurantCard
  },
  methods: {
    selectGenre(e) {
      if (e.target.checked) {
        this.keyword = e.target.value;
        this.$store.dispatch("getRestaurant", this.keyword);
      }
    },
    openNow(e) {
      if (e.target.checked) {
        this.$store.dispatch("changeOpen").then(() => {
          this.$store.dispatch("getRestaurant", this.keyword);
        });
      } else {
        this.$store.dispatch("changeOpen").then(() => {
          this.$store.dispatch("getRestaurant", this.keyword);
        });
      }
    },
    checkProvinces() {
      var id = document.getElementById("provinces");
      this.selected = id.options[id.selectedIndex].value;
      this.$store.dispatch("changeProvince", this.selected);
      this.$store.dispatch("getRestaurant", this.keyword);
    },
    randomize() {
      var length;
      length = this.restaurant.length;
      length++;
      this.randomNum = Math.floor(Math.random() * length);
      this.name = this.restaurant[this.randomNum].name;
      this.ratings = this.restaurant[this.randomNum].rating;
      this.isOpen = this.restaurant[this.randomNum].opening_hours;
      this.noOfRatings = this.restaurant[this.randomNum].user_ratings_total;
      this.address = this.restaurant[this.randomNum].vicinity;
      this.priceRange = this.restaurant[this.randomNum].price_level;
      this.$store.dispatch("currentCard", {
        title: this.name,
        rating: this.ratings,
        image: this.image,
        isOpen: this.isOpen,
        numberOfRating: this.noOfRatings,
        priceRange: this.priceRange,
        address: this.address,
        isLiked: this.isLiked
      });
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
  },
  created() {
    this.$store.dispatch("getRestaurant", this.keyword);
  }
};
</script>

