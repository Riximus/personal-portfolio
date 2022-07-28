<template>
  <div class="socials">
    <Icon
        v-for="icon in socialIcons"
        :key="icon.id"
        :fileName="icon.fileName"
        :altText="icon.altText"/>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Socials",
  components: {
    Icon
  },
  data: function () {
    return {
      socialIcons: [
        {id: 1, fileName: 'twitter', altText: 'Twitter Logo'},
        {id: 2, fileName: 'github', altText: 'Github Logo'}
      ]
    }
  }
}
</script>

<style scoped lang="sass">
@use "src/assets/styles/_index.sass"

.socials
  display: flex
  margin-top: 10px
  height: index.$small-icon
  gap: 15px

</style>