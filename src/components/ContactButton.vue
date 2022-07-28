<template>
  <div class="contact">
    <h3>contact me</h3>
  </div>
</template>

<script>
export default {
  name: 'ContactButton'
}
</script>

<style scoped lang="sass">
@use "src/assets/styles/_index.sass"

.contact
  @include index.center-middle
  width: 320px
  height: 75px
  border: solid 4px index.$green
  color: index.$green
  align-self: flex-end

</style>