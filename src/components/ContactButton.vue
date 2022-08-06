<template>
  <h3 :class="`contact ${className}`" @click="showForm = true">contact me</h3>
  <Transition name="fade" appear>
    <div class="modal-overlay" v-if="showForm" @click="showForm = false"></div>
  </Transition>
  <KeepAlive>
    <Transition name="slide" appear>
      <div class="modal" v-if="showForm">
        <h4>Lore Ipsum</h4>
        <p> HEY :D omg hey</p>
        <button class="button" @click="showForm = false">Close</button>
      </div>
    </Transition>
  </KeepAlive>
</template>

<script>
export default {
  name: 'ContactButton',
  props: {
    className: String
  },
  data: function () {
    return {
      showForm: false
    }
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

.modal-overlay
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 98
  background-color: rgba(0, 0, 0, 0.3)

.modal
  @include index.center-middle
  flex-direction: column
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  position: fixed
  z-index: 99
  width: 100%
  max-width: 400px
  background-color: index.$lightgreen
  color: index.$black
  border: index.$black 4px solid
  padding: 25px
</style>