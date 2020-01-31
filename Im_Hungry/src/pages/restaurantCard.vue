<template>
  <div>
    <f7-card :title="title" class="demo-card-header-pic">
      <f7-card-header
        class="no-border"
        valign="bottom"
        style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)"
      >Journey To Mountains</f7-card-header>
      <f7-card-content>
        <p class="date">9-9</p>
        <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
      </f7-card-content>
      <f7-card-footer>
        <f7-link>{{title}}</f7-link>
        <f7-link>Read more</f7-link>
      </f7-card-footer>
    </f7-card>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Joes'
        }
    }
}
</script>