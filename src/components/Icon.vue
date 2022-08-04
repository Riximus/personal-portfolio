<template>
  <div id="icon-box">
    <a :href=url target="_blank">
      <div id="icon-image" :class=className><img :src="getImgUrl(fileName)" :alt="`${altText}`"></div>
    </a>
    <p class="description" v-if="description">{{ description }}</p>
  </div>
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
    },
    url: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
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

#icon-box
  height: 100%

#icon-image
  @include index.center-middle
  background-color: index.$lightgreen
  aspect-ratio: 1 / 1
  height: 100%
  border-radius: 50%
  transition: 300ms ease-out

  &:hover
    background: index.$green
    transform: scale(1.2, 1.2)

  &.project
    background-color: index.$lightpurple

    &:hover
      background: index.$purple
      transform: scale(1.2, 1.2)

#icon-image > img
  width: 80%
  height: 80%

.description
  margin-top: 0.5em
  text-align: center
</style>