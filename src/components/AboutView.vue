<template>
  <div id="about-view" class="inner-views">
    <div class="title-head">
      <h4>i'm</h4>
      <h1>ricardo baptista</h1>
      <h4>a <span class="underline">developer</span> with a curiosity that grows everyday like my houseplants</h4>
    </div>
    <div class="content-body">
      <div class="content">
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
      <div id="profile-image-frame">
        <img id="profile-image" src="../assets/images/profilpic.jpg"/>
      </div>
    </div>
    <p style="align-self: flex-end">hello</p>
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
        {id: 1, fileName: 'c_sharp', altText: 'C Sharp Icon'},
      ]
    };
  },

}
</script>

<style scoped lang="sass">
@use "src/assets/styles/_index.sass"

#about-view
  color: index.$lightgreen

#profile-image-frame
  @include index.responsive-square
  @include index.center-middle
  border: white solid 1px
  align-self: center


#profile-image-frame:after
  @include index.responsive-square-after

// v maybe change div to img v
#profile-image
  @include index.responsive-square-content
  border-radius: 50%

.icons
  margin-top: 25px
  display: flex
  gap: 10px 25px

.icons > div
  @include index.center-middle
  background-color: index.$lightgreen
  width: 90px
  height: 90px
  border-radius: 50%

.icons > div > img
  width: 80%
  height: 80%

</style>