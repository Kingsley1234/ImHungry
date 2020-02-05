<template>
  <f7-page class="theme-dark" name="Im Hungry">
    <f7-navbar :sliding="false" large>
      <f7-nav-left>
        <!-- <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link> -->
      </f7-nav-left>
      <f7-nav-title sliding>Im Hungry</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
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
        <f7-navbar title="Your Pick!">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <p>{{ this.randomNum}}</p>
          <RestaurantCard :title="name"/>
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-popup>
  <f7-panel right reveal theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Filters"></f7-navbar>
        <f7-block>
          <f7-block-title>Distance</f7-block-title>
          <f7-list simple-list>
            <f7-list-item>
              <f7-list-item-cell class="width-auto flex-shrink-0">
                <!--<f7-icon ios="f7:speaker_fill" aurora="f7:speaker_fill" md="material:volume_mute"></f7-icon>-->
                <p>1</p>
              </f7-list-item-cell>
              <f7-list-item-cell class="flex-shrink-3">
                <f7-range
                  :min="0"
                  :max="100"
                  :step="1"
                  :value="10"
                ></f7-range>
              </f7-list-item-cell>
              <f7-list-item-cell class="width-auto flex-shrink-0">
                <!--<f7-icon ios="f7:speaker_3_fill" aurora="f7:speaker_3_fill" md="material:volume_up"></f7-icon>-->
                <p>100</p>
              </f7-list-item-cell>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>

   <!--  <f7-list>
      <f7-list-item
        v-for="(product) in products"
        :key="product.id"
        :title="product.title"
        :link="`/product/${product.id}/`"
      ></f7-list-item> 
    </f7-list>-->
  </f7-page>
</template>


<script>
import RestaurantCard from './restaurantCard';
	export default{
		data(){
			return{
				keyword: 'food',
				randomNum: '',
				name: ''
			}
		},
		components:{
			RestaurantCard
		},
		methods: {
			randomize(){
				var length;
				this.$store.dispatch('getRestaurant', this.keyword);
				length = this.restaurant.length;
				length++;
				this.randomNum = Math.floor(Math.random() * length);
				console.log(this.restaurant[this.randomNum].name)
				this.name = this.restaurant[this.randomNum].name
				//this.initialize();
				
			},
			initialize(){
				this.name = this.restaurant[this.randomNum].name
			}
		},
		computed: {
			restaurant(){
				return this.$store.state.restaurant;
			}

		}
	}
</script>

