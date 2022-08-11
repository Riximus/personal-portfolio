<template>
  <PopupModal class-name="projects-view-modal">
    <template #header>
      Indie Studio Website
    </template>
    <template #technologies-title>
      Technologies
    </template>
    <template #technologies>
      <p class="tech-list-spacer" v-for="tech in techs" :key="tech"> {{ tech }}</p>
    </template>
  </PopupModal>
</template>

<script>
import PopupModal from "@/components/ui/PopupModal";

export default {
  name: "StudioWebsite",
  components: {
    PopupModal
  },
  data() {
    return {
      techs: ['Vue.js 3', 'Vite', 'Node.js', 'Express.js']
    }
  }
}
</script>

<style scoped lang="sass">


</style>