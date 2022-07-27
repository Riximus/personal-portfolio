<template>
  <div id="about-view" class="inner-views">
    <div class="contact">
      <h3>contact me</h3>
    </div>
    <div class="title-head">
      <h4>i'm</h4>
      <h1>ricardo baptista</h1>
      <h4>a <span class="underline">developer</span> with a curiosity that grows everyday like my houseplants</h4>
    </div>
    <div class="content">
      <div class="content-body">
        <h3>coding languages</h3>
        <div class="icons" style="margin-bottom: 90px">
          <Icon
              v-for="icon in langIcons"
              :key="icon.id"
              :fileName="icon.fileName"
              :altText="icon.altText"/>
        </div>
        <h3>tools</h3>
        <div class="icons">
          <Icon
              v-for="icon in toolIcons"
              :key="icon.id"
              :fileName="icon.fileName"
              :altText="icon.altText"/>
        </div>
      </div>
      <div id="profile-frame">
        <img id="profile-frame-image" src="../assets/images/profilepic.jpg"/>
      </div>
    </div>
    <div class="socials">
      <Icon
          v-for="icon in socialIcons"
          :key="icon.id"
          :fileName="icon.fileName"
          :altText="icon.altText"/>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "AboutView",
  components: {Icon},
  data: function () {
    return {
      langIcons: [
        {id: 1, fileName: 'c_sharp', altText: 'C Sharp Icon'},
        {id: 2, fileName: 'java', altText: 'Java Icon'},
        {id: 3, fileName: 'python', altText: 'Python Icon'},
      ],
      toolIcons: [
        {id: 1, fileName: 'gitkraken', altText: 'Gitkraken Logo'},
        {id: 2, fileName: 'jetbrains', altText: 'JetBrains Logo'}
      ],
      socialIcons: [
        {id: 1, fileName: 'twitter', altText: 'Twitter Logo'},
        {id: 2, fileName: 'github', altText: 'Github Logo'}
      ]
    };
  },
}
</script>

<style scoped lang="sass">
@use "src/assets/styles/_index.sass"

#about-view
  color: index.$lightgreen

.icons
  display: flex
  //border: navajowhite solid 1px
  height: index.$big-icon
  margin-top: 25px
  gap: 10px 25px

#profile-frame
  @include index.responsive-square
  @include index.center-middle
  //border: white solid 1px
  align-self: center

  &-image
    @include index.responsive-square-content
    border-radius: 50%

</style>