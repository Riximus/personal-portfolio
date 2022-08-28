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
@use "@/assets/styles/_index.sass"

.side-menu
  @include index.remove-highlight
  @include index.center-middle
  background-color: index.$lightpurple
  height: 100vh
  width: 9vw
  cursor: pointer

  &.about
    background-color: index.$lightpurple

  &.project
    background-color: index.$lightgreen

h2
  writing-mode: vertical-rl
  transform: rotate(-180deg)
  color: index.$black

.v-enter-active, .v-leave-active
  transition: opacity .5s ease-in-out
  transition-delay: 0.4s

.v-enter-from, .v-leave-to
  opacity: 0

@media screen and (max-width: index.$notebook-screen), screen and (max-height: index.$notebook-screen-height)


@media screen and (max-width: index.$tiny-screen), screen and (max-height: index.$tiny-screen-height)

</style>