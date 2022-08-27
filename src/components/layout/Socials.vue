<template>
  <div class="socials">
    <Icon
        :class-name="className"
        v-for="icon in socialIcons"
        :key="icon.id"
        :fileName="icon.fileName"
        :altText="icon.altText"
        :url="icon.url"/>
  </div>
</template>

<script>
import Icon from "@/components/ui/Icon";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Socials",
  components: {
    Icon
  },
  props: {
    className: String
  },
  data: function () {
    return {
      socialIcons: [
        {id: 1, fileName: 'twitter', altText: 'Twitter Logo', url: 'https://twitter.com/RixiPixel'},
        {id: 2, fileName: 'github', altText: 'Github Logo', url: 'https://github.com/Riximus'}
      ]
    }
  }
}
</script>

<style scoped lang="sass">
@use "@/assets/styles/_index.sass"

.socials
  display: flex
  margin-top: 10px
  height: index.$small-icon
  gap: 15px

@media screen and (max-height: index.$tiny-screen-height), screen and (max-width: index.$ipad-screen)
  .socials
    height: index.$tiny-icon

</style>