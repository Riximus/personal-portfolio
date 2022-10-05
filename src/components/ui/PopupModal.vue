<template>
  <Transition name="slide" appear>
    <div :class="`modal ${className}`">
      <div class="close-button mobile" @click="close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="rgba(17,17,17,1)"/>
        </svg>
      </div>
      <header>
        <h3>
          <slot name="header">This is a header</slot>
        </h3>
      </header>
      <main>
        <div class="technologies">
          <slot name="technologies"></slot>
        </div>
        <p class="modal-paragraph">
          <slot>🚧Text work in progress🚧</slot>
        </p>
        <slot name="picture"><img :src="picture" :alt="altText"></slot>
      </main>
      <footer>
        <slot name="footer">
          <slot name="information">
          </slot>
        </slot>
      </footer>
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

.modal-paragraph
  padding: 1em 1.5em

.technologies
  display: flex

.close-button
  position: absolute
  cursor: pointer
  padding: 1em
  top: 4em
  right: 4em

@media screen and (max-height: index.$smaller-screen-height)
  .modal
    padding: 1em

  .close-button
    top: 1.5em
    right: 1.5em

@media screen and (max-height: index.$smaller-screen-height-breakpoint)
  .modal
    padding: 1em

  .close-button
    top: 2em
    right: 2em

@media screen and (max-width: index.$tablet-screen), screen and (max-height: index.$tiny-screen-height)
  .modal
    width: 100vw
    height: 100vh
    border-radius: 0
    border-width: 0
</style>