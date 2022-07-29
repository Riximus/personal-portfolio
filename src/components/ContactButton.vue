<template>
  <div :class="`contact ${className}`">
    <h3>contact me</h3>
  </div>
</template>

<script>
export default {
  name: 'ContactButton',
  props: {
    className: String
  },
}
</script>

<style scoped lang="sass">
@use "src/assets/styles/_index.sass"

.contact
  @include index.center-middle
  width: 320px
  height: 75px
  align-self: flex-end

  // class binding to SideMenu to change color
  &.about
    color: index.$green
    border: index.$green solid 4px

  &.project
    color: index.$purple
    border: index.$purple solid 4px

</style>