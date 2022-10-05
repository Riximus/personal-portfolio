<template>
  <PopupModal class-name="projects-view-modal">
    <template #header>
      Mensa Scraper
    </template>
    <template #technologies>
      <p class="tech-list-spacer" v-for="tech in techs" :key="tech"> {{ tech }}</p>
    </template>
    <template #information>
      <a href="https://github.com/Riximus/mensa-vegan-scraper" target="_blank">Source Code</a>
    </template>
  </PopupModal>
</template>

<script>
import PopupModal from "@/components/ui/PopupModal";

export default {
  name: "MensaScraper",
  components: {
    PopupModal
  },
  data() {
    return {
      techs: ['Python', 'BeautifulSoup']
    }
  }
}
</script>

<style scoped lang="sass">

</style>