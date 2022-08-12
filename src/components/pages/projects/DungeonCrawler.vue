<template>
  <PopupModal class-name="projects-view-modal">
    <template #header>
      Dungeon Crawler
    </template>
    <template #technologies>
      <p class="tech-list-spacer" v-for="tech in techs" :key="tech"> {{ tech }}</p>
    </template>
  </PopupModal>
</template>

<script>
import PopupModal from "@/components/ui/PopupModal";

export default {
  name: "DungeonCrawler",
  components: {
    PopupModal
  },
  data() {
    return {
      techs: ['Java', 'Swing']
    }
  }
}
</script>

<style scoped lang="sass">

</style>