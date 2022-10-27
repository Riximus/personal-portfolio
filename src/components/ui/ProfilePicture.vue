<template>
  <div id="profile-frame">

    <img id="profile-frame-image" src="../../assets/images/pictures/profilepic_1188.webp" fetchpriority="high"
         srcset="
         ../../assets/images/pictures/profilepic_1188.webp 1188w,
         ../../assets/images/pictures/profilepic_891.webp 891w,
         ../../assets/images/pictures/profilepic_594.webp 594w,
         ../../assets/images/pictures/profilepic_297.webp 297w"
         sizes="35vw"
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