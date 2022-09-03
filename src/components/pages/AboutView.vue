<template>
  <div id="about-view" class="inner-views">
    <!-- Contact Button here for Desktop -->
    <ContactButton class-name="about" class="desktop"/>

    <!-- Profile Picture here for Mobile -->
    <ProfilePicture class="mobile"/>

    <!-- Title -->
    <div class="title-head">
      <h4>i'm</h4>
      <h1>Ricardo Baptista</h1>
      <h4>a <span class="underline">developer</span> with a curiosity that grows everyday like my houseplants</h4>
    </div>

    <!-- Main Body -->
    <div class="content">
      <div class="content-body">
        <h3>coding skills</h3>
        <div class="icons">
          <Icon
              class="disable-href"
              v-for="icon in langIcons"
              :key="icon.id"
              :fileName="icon.fileName"
              :altText="icon.altText"
              :description="icon.description"
          />
        </div>
        <h3>tools</h3>
        <div class="icons">
          <Icon
              class="disable-href"
              v-for="icon in toolIcons"
              :key="icon.id"
              :fileName="icon.fileName"
              :altText="icon.altText"
              :description="icon.description"
          />
        </div>
      </div>
      <!-- Profile Picture here for Desktop -->
      <ProfilePicture class="desktop"/>
    </div>
    <!-- Socials -->
    <Socials/>
  </div>
</template>

<script>
import Icon from "@/components/ui/Icon";
import Socials from "@/components/layout/Socials";
import ContactButton from "@/components/ui/ContactButton";
import ProfilePicture from "@/components/ui/ProfilePicture";

export default {
  name: "AboutView",
  components: {
    ProfilePicture,
    ContactButton,
    Icon,
    Socials
  },
  data: function () {
    return {
      langIcons: [
        {id: 1, fileName: 'c_sharp', altText: 'C Sharp Icon', description: 'C#'},
        {id: 2, fileName: 'java', altText: 'Java Icon', description: 'Java'},
        {id: 3, fileName: 'python', altText: 'Python Icon', description: 'Python'},
        {id: 4, fileName: 'c', altText: 'C Icon', description: 'C'},
        {id: 5, fileName: 'vue', altText: 'Vue Logo', description: 'VueJS'},
        {id: 6, fileName: 'sass', altText: 'Sass Logo', description: 'Sass'}
      ],
      toolIcons: [
        {id: 1, fileName: 'gitkraken', altText: 'GitKraken Logo', description: 'GitKraken'},
        {id: 2, fileName: 'jetbrains', altText: 'JetBrains Logo', description: 'JetBrains'},
        {id: 3, fileName: 'notion', altText: 'Notion Logo', description: 'Notion'},
      ]
    };
  }
}
</script>

<style scoped lang="sass">
@use "@/assets/styles/_index.sass"

#about-view
  color: index.$lightgreen

.icons
  display: flex
  height: index.$big-icon
  margin-top: 1.5em
  gap: 0.6em 1.5em

  &:first-of-type
    margin-bottom: 5.5em

.mobile
  display: none

@media screen and (max-width: index.$smaller-screen)
  .icons
    height: index.$middle-icon
    margin-top: 1em

    &:first-of-type
      margin-bottom: 3em

@media screen and (max-height: index.$notebook-screen-height)
  .icons:first-of-type
    margin-bottom: 4em

@media screen and (max-width: index.$ipad-screen)
  .icons
    height: index.$small-icon

    &:first-of-type
      margin-bottom: 2.5em

@media screen and (max-width: index.$mobile-screen)
  .desktop
    display: none

  .mobile
    display: block

  .icons
    gap: 2em 1em

@media screen and (max-width: 420px)
  .icons
    flex-wrap: wrap

    &:first-of-type
      margin-bottom: 8em
</style>