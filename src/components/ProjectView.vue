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
      <div class="content-body">
        <h2>indie studio website <sup>2022</sup></h2>
        <h2>twitter bot <sup>2022</sup></h2>
        <h2>mensa scraper <sup>2022</sup></h2>
        <h2>dungeon crawler <sup>2021</sup></h2>
      </div>
    </div>

    <!-- Socials -->
    <Socials class-name="project"/>
  </div>
</template>

<script>
import ContactButton from "@/components/ContactButton";
import Socials from "@/components/Socials";

export default {
  name: "ProjectView",
  components: {
    ContactButton,
    Socials
  }

}
</script>

<style scoped lang="sass">
@use "src/assets/styles/_index.sass"

#project-view
  color: index.$lightpurple

//*
  border: aqua 1px solid

</style>