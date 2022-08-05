<template>
  <h3 :class="`contact ${className}`" @click="showForm = true">contact me</h3>
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
  @include index.remove-highlight
  text-align: center
  width: 6em
  align-self: flex-end
  cursor: pointer

  // class binding to SideMenu to change color
  &.about
    border: index.$green solid 4px

  &.project
    border: index.$purple solid 4px


</style>