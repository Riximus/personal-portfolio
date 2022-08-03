<template>
  <div id="icon-image" :class=className><img :src="getImgUrl(fileName)" :alt="`${altText}`"></div>
  <h3 v-if=hide></h3>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icon',
  props: {
    fileName: String,
    altText: String,
    className: String,
    // for text under the icon
    hide: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getImgUrl: function (imagePath) {
      return require('@/assets/images/icons/' + imagePath + '.png')
    }
  }
}
</script>

<style scoped lang="sass">
@use "src/assets/styles/_index.sass"

#icon-image
  @include index.center-middle
  background-color: index.$lightgreen
  aspect-ratio: 1 / 1
  height: 100%
  border-radius: 50%

  &.project
    background-color: index.$lightpurple

#icon-image > img
  width: 80%
  height: 80%
</style>