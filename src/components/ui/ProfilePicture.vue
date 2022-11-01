<template>
  <div id="profile-frame">

    <img id="profile-frame-image" src="../../assets/images/pictures/profilepic_1000.jpg" fetchpriority="high"
         srcset="
         ../../assets/images/pictures/profilepic_1000.jpg 1000w,
         ../../assets/images/pictures/profilepic_800.jpg 800w,
         ../../assets/images/pictures/profilepic_700.jpg 700w,
         ../../assets/images/pictures/profilepic_600.jpg 600w,
         ../../assets/images/pictures/profilepic_500.jpg 500w,
         ../../assets/images/pictures/profilepic_400.jpg 400w,
         ../../assets/images/pictures/profilepic_350.jpg 350w,
         ../../assets/images/pictures/profilepic_300.jpg 300w,
         ../../assets/images/pictures/profilepic_250.jpg 250w,
         ../../assets/images/pictures/profilepic_200.jpg 200w"
         sizes="30vw"
         alt="Profile picture of me"/>
  </div>
</template>

<script>
export default {
  name: 'ProfilePicture'
}
</script>

<style scoped lang="sass">
@use "@/assets/styles/_index.sass"

#profile-frame
  @include index.remove-highlight
  @include index.responsive-square
  align-self: center

  &-image
    @include index.responsive-square-content
    border-radius: 50%
    object-fit: cover

</style>