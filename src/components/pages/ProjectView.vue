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
        <h2>{{ project.projectName }} <sup>{{ project.projectYear }}</sup></h2>
        
      </div>
    </div>

    <!-- Socials -->
    <Socials class-name="project"/>
  </div>
</template>

<script>
import ContactButton from "@/components/ui/ContactButton";
import Socials from "@/components/layout/Socials";

export default {
  name: "ProjectView",
  components: {
    ContactButton,
    Socials
  },
  data() {
    return {
      projects: [
        {id: 1, projectName: 'indie studio website', projectYear: '2022', projectModal: 'studioWebsite'},
        {id: 2, projectName: 'twitter bot', projectYear: '2022', projectModal: 'twitterBot'},
        {id: 3, projectName: 'mensa scraper', projectYear: '2022', projectModal: 'mensaScraper'},
        {id: 4, projectName: 'dungeon crawler', projectYear: '2021', projectModal: 'dungeonCrawler'}
      ]
    }
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

</style>