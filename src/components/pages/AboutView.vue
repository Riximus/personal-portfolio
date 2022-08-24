<template>
  <div id="about-view" class="inner-views">
    <!-- Contact Button -->
    <ContactButton class-name="about"/>

    <!-- Title -->
    <div class="title-head">
      <h4>i'm</h4>
      <h1>vorname nachname</h1>
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
      <div id="profile-frame">
        <img id="profile-frame-image" src="../../assets/images/profilepic.jpg" alt="Profile picture of a man"/>
      </div>
    </div>
    <!-- Socials -->
    <Socials/>
  </div>
</template>

<script>
import Icon from "@/components/ui/Icon";
import Socials from "@/components/layout/Socials";
import ContactButton from "@/components/ui/ContactButton";

export default {
  name: "AboutView",
  components: {
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

.icons:first-of-type
  margin-bottom: 5.5em

.icons
  display: flex
  height: index.$big-icon
  margin-top: 25px
  gap: 10px 25px

#profile-frame
  @include index.remove-highlight
  @include index.responsive-square
  @include index.center-middle
  align-self: center

  &-image
    @include index.responsive-square-content
    border-radius: 50%
</style>