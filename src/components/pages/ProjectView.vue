<template>
  <div id="project-view" class="inner-views">
    <!-- Contact Button -->
    <ContactButton class-name="project"/>

    <!-- Title -->
    <div class="title-head">
      <h4>my</h4>
      <h1>projects</h1>
      <h4>i did with 💚</h4>
    </div>
    <!-- Main Body -->
    <div class="content">
      <div class="content-body"
           v-for="project in projects"
           :key="project.id">
        <h2 @click="showModal(project.id)">{{ project.projectName }} <sup>{{ project.projectYear }}</sup></h2>
      </div>
      <component v-show="isModalVisible" :is="component" @close="closeModal" class="projects-modal"/>
      <BlurBackground v-show="isModalVisible" @close="closeModal"/>
    </div>
    <!-- Socials -->
    <Socials class-name="project"/>
  </div>
</template>

<script>
import ContactButton from "@/components/ui/ContactButton";
import Socials from "@/components/layout/Socials";
import StudioWebsite from "@/components/pages/projects/StudioWebsite"
import TwitterBot from "@/components/pages/projects/TwitterBot"
import MensaScraper from "@/components/pages/projects/MensaScraper"
import DungeonCrawler from "@/components/pages/projects/DungeonCrawler"
import BlurBackground from "@/components/ui/BlurBackground";

export default {
  name: "ProjectView",
  components: {
    StudioWebsite,
    TwitterBot,
    MensaScraper,
    DungeonCrawler,
    BlurBackground,
    ContactButton,
    Socials
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          projectName: 'indie studio website',
          projectYear: '2022'
        },
        {
          id: 2,
          projectName: 'twitter bot',
          projectYear: '2022'
        },
        {
          id: 3,
          projectName: 'mensa scraper',
          projectYear: '2022'
        },
        {
          id: 4,
          projectName: 'dungeon crawler',
          projectYear: '2021'
        }
      ],
      isModalVisible: false,
      component: null
    }
  },
  methods: {
    showModal(modalID) {
      this.isModalVisible = true
      switch (modalID) {
        case 1:
          this.component = StudioWebsite
          break
        case 2:
          this.component = TwitterBot
          break
        case 3:
          this.component = MensaScraper
          break
        case 4:
          this.component = DungeonCrawler
          break
        default:
          this.component = ''
      }
    },
    closeModal() {
      this.isModalVisible = false
    },
  }
}
</script>

<style scoped lang="sass">
@use "@/assets/styles/_index.sass"

#project-view
  color: index.$lightpurple

.content
  flex-direction: column
  justify-content: center

  &-body
    transition: color 250ms ease-in
    cursor: pointer

    &:hover
      color: index.$purple

.projects-modal
  @include index.modal-style(50em, index.$lightpurple, index.$black)
</style>