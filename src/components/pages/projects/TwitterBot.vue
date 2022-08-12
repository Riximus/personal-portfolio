<template>
  <PopupModal class-name="projects-view-modal">
    <template #header>
      Twitter Bot
    </template>
    <template #technologies>
      <p class="tech-list-spacer" v-for="tech in techs" :key="tech"> {{ tech }}</p>
    </template>
  </PopupModal>
</template>

<script>
import PopupModal from "@/components/ui/PopupModal";

export default {
  name: "TwitterBot",
  components: {
    PopupModal
  },
  data() {
    return {
      techs: ['Python', 'Tweepy']
    }
  }
}
</script>

<style scoped lang="sass">

</style>