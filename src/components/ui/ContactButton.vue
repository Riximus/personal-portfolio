<template>
  <div class="contact-button desktop">
    <h3 :class="`contact ${className}`" @click="showModal">
      contact me
    </h3>
    <KeepAlive>
      <ContactForm v-show="isModalVisible" @close="closeModal" :modal-color-class="`${modalClass}`"/>
    </KeepAlive>
    <BlurBackground v-show="isModalVisible" @close="closeModal"/>
  </div>
  <div class="contact-button mobile">
    <h3 :class="`contact ${className}`" @click="showModal">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path
            d="M4.929 19.071A9.969 9.969 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929zM8 13a4 4 0 1 0 8 0H8z"
            :fill="iconColor"/>
      </svg>
    </h3>
    <KeepAlive>
      <ContactForm v-show="isModalVisible" @close="closeModal" :modal-color-class="`${modalClass}`"/>
    </KeepAlive>
  </div>
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
    className: String,
    iconColor: String
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

.contact-button.mobile
  position: absolute

.contact-button
  align-self: flex-end

  &.mobile > .contact
    @include index.center-middle
    height: 1.5em
    width: 1.5em
    border-radius: 50%

.contact
  @include index.remove-highlight
  text-align: center
  width: 6em
  cursor: pointer

  // class binding to SideMenu to change color
  &.about
    border: index.$green solid 4px

  &.project
    border: index.$purple solid 4px
</style>