<template>
  <div class="side-menu">
    <h2>{{ menuText }}</h2>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  props: {
    menuText: String
  }
}
</script>

<style scoped lang="sass">
@use "src/assets/styles/_index.sass"

.side-menu
  @include index.center-middle
  background-color: index.$lightpurple
  color: index.$black
  height: 100%
  width: 150px
  writing-mode: vertical-rl
  transform: rotate(-180deg)
  cursor: pointer

  // Removing Texthighlight
  /* iOS Safari */
  -webkit-touch-callout: none
  /* Safari */
  -webkit-user-select: none
  /* Konqueror HTML */
  -khtml-user-select: none
  /* Old versions of Firefox */
  -moz-user-select: none
  /* Internet Explorer/Edge */
  -ms-user-select: none
  /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  user-select: none
</style>