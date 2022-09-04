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
            d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 10H8v2h3v3h2v-3h3v-2h-3V7h-2v3z"
            fill="rgba(136,255,136,1)"/>
      </svg>
    </h3>
    <KeepAlive>
      <ContactForm v-show="isModalVisible" @close="closeModal" :modal-color-class="`${modalClass}`"/>
    </KeepAlive>
    <!--<BlurBackground v-show="isModalVisible" @close="closeModal"/>-->
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

.contact-button
  align-self: flex-end

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