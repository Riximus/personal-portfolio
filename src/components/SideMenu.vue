<template>
  <div class="side-menu">
    <h2>projects</h2>
  </div>
</template>

<script>
export default {
  name: "SideMenu"
}
</script>

<style scoped lang="sass">
@use "src/assets/styles/_index.sass"

.side-menu
  background-color: index.$lightpurple
  color: index.$black
  height: 100%
  width: 150px
  writing-mode: vertical-rl
  transform: rotate(-180deg)
</style>