<template>
  <h3 :class="`contact ${className}`" @click="showModal">contact me</h3>
  <KeepAlive>
    <PopupModal v-show="isModalVisible" @close="closeModal"/>
  </KeepAlive>
  <BlurBackground v-show="isModalVisible" @close="closeModal"/>

</template>

<script>
import PopupModal from "@/components/PopupModal";
import BlurBackground from "@/components/BlurBackground";

export default {
  name: 'ContactButton',
  components: {
    PopupModal,
    BlurBackground
  },
  props: {
    className: String
  },
  data() {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
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