<template>
  <Transition name="slide" appear>
    <div :class="`modal ${className}`">
      <header>
        <h3>
          <slot name="header">This is a header</slot>
        </h3>
      </header>
      <main>
        <div class="technologies">
          <slot name="technologies"></slot>
        </div>
        <slot>Main</slot>
        <slot name="picture"><img :src="picture" :alt="altText"></slot>
      </main>
      <footer>
        <slot name="footer">
          <slot name="information">
          </slot>
        </slot>
      </footer>
      <!--
      <button class="close-button" @click="close">X</button>
      -->
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
    },
    picture: String,
    altText: String
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
  border: index.$black 4px solid
  border-radius: 20px
  padding: 3em

  &.about-view-modal
    @include index.modal-style(60em, index.$lightgreen, index.$black)

  &.projects-view-modal
    @include index.modal-style(60em, index.$lightpurple, index.$black)

  & > main
    @include index.center-middle
    flex-direction: column

.technologies
  display: flex

@media screen and (max-height: index.$smaller-screen-height)
  .modal
    padding: 1em

@media screen and (max-height: index.$smaller-screen-height-breakpoint)
  .modal
    padding: 1em
</style>