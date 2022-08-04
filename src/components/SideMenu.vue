<template>
  <div :class="`side-menu ${className}`">
    <Transition appear>
      <h2>{{ menuText }}</h2>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  props: {
    menuText: String,
    className: {
      type: String,
      default: "about"
    }
  }
}
</script>

<style scoped lang="sass">
@use "src/assets/styles/_index.sass"

.side-menu
  @include index.center-middle
  background-color: index.$lightpurple
  height: 100vh
  width: 10em
  cursor: pointer

  &.about
    background-color: index.$lightpurple

  &.project
    background-color: index.$lightgreen

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

h2
  writing-mode: vertical-rl
  transform: rotate(-180deg)
  color: index.$black

.v-enter-active, .v-leave-active
  transition: opacity .5s ease-in-out
  transition-delay: 0.4s

.v-enter-from, .v-leave-to
  opacity: 0

</style>