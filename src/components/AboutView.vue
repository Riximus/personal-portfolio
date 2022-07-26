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
          <div class="icon-frame"></div>
          <div class="icon-frame"></div>
          <div class="icon-frame"></div>
          <div class="icon-frame"></div>
        </div>
        <h3>tools</h3>
        <div class="icons">
          <div class="icon-frame"></div>
          <div class="icon-frame"></div>
          <div class="icon-frame"></div>
        </div>
      </div>
      <div id="profile-image-frame">
        <img id="profile-image" src="../assets/images/profilpic.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView"
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

.icon-frame
  background-color: index.$lightgreen
  width: 90px
  height: 90px
  margin-right: 25px
  border-radius: 50%

</style>