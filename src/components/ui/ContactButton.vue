<template>
  <h3 :class="`contact ${className}`" @click="showModal">contact me</h3>
  <KeepAlive>
    <ContactForm v-show="isModalVisible" @close="closeModal" :modal-color-class="`${modalClass}`"/>
  </KeepAlive>
  <BlurBackground v-show="isModalVisible" @close="closeModal"/>

</template>

<script>
import ContactForm from "@/components/pages/ContactForm";
import BlurBackground from "@/components/ui/BlurBackground";

export default {
  name: 'ContactButton',
  components: {
    ContactForm,
    BlurBackground
  },
  props: {
    className: String
  },
  data() {
    return {
      isModalVisible: false,
      modalClass: 'about-view-modal'
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
      if (this.className === 'project') {
        this.modalClass = 'projects-view-modal'
      } else if (this.className === 'about') {
        this.modalClass = 'about-view-modal'
      }
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
}
</script>

<style scoped lang="sass">
@use "@/assets/styles/_index.sass"

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