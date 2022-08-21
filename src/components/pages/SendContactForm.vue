<template>
  <PopupModal id="form-modal" :class-name="`${modalColorClass}`">
    <template #header>
      <h3 class="contact-form-title">FORM SEND!</h3>
    </template>
    <template #information>
      Form has been sent!
    </template>

  </PopupModal>
</template>

<script>
import PopupModal from "@/components/ui/PopupModal";

export default {
  name: "SendContactForm",
  components: {
    PopupModal,
  },
  props: {
    modalColorClass: String
  },
}
</script>

<style scoped>

</style>