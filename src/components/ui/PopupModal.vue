<template>
  <Transition name="slide" appear>
    <div :class="`modal ${className}`">
      <header>
        <h3>
          <slot name="header">This is a header</slot>
        </h3>
      </header>
      <main>
        <h5>
          <slot name="technologies-title"></slot>
        </h5>
        <div class="technologies">
          <slot name="technologies"></slot>
        </div>
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
  },
  props: {
    className: {
      type: String,
      default: "about-view-modal"
    }
  }
}
</script>

<style scoped lang="sass">
@use "../../assets/styles/index"

.modal
  @include index.center-middle
  flex-direction: column
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  position: fixed
  z-index: 99
  width: 100%
  border: index.$black 4px solid
  border-radius: 20px
  padding: 10px
  
  &.about-view-modal
    @include index.modal-style(40em, index.$lightgreen, index.$black)

  &.projects-view-modal
    @include index.modal-style(40em, index.$lightpurple, index.$black)

  & > main
    @include index.center-middle
    flex-direction: column

.technologies
  display: flex

</style>