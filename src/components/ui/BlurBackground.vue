<template>
  <Transition name="fade" appear>
    <div class="modal-overlay" @click="close"></div>
  </Transition>
</template>

<script>
export default {
  name: "BlurBackground",
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="sass">

.modal-overlay
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 98
  background-color: rgba(0, 0, 0, 0.7)

</style>