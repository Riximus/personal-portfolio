<template>
  <!--<Transition name="fade" appear>
    <div class="modal-overlay" @click="close"></div>
  </Transition>-->
  <Transition name="slide" appear>
    <div class="modal">
      <header>
        <slot name="header">This is a header</slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer">Footer</slot>
      </footer>
      <button class="button" @click="close">Close</button>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "PopupModal",
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="sass">
@use "src/assets/styles/index"

.modal
  @include index.center-middle
  flex-direction: column
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  position: fixed
  z-index: 99
  width: 100%
  max-width: 600px
  background-color: index.$lightgreen
  color: index.$black
  border: index.$black 4px solid
  padding: 10px
</style>