<template>
  <div><img :src="getImgUrl(fileName)" :alt="`${altText}`"></div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icon',
  props: {
    fileName: String,
    altText: String
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

div
  @include index.center-middle
  background-color: index.$lightgreen
  width: 90px
  height: 90px
  border-radius: 50%

div > img
  width: 80%
  height: 80%
</style>