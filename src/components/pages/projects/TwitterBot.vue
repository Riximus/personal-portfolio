<template>
  <PopupModal class-name="projects-view-modal">
    <template #header>
      Twitter Bot
    </template>
    <template #technologies>
      <p class="tech-list-spacer" v-for="tech in techs" :key="tech"> {{ tech }}</p>
    </template>
    The Twitter Bot goes through all the users that it currently follows and
    excludes every protected (privacy locked).
    While going through the tweets from the last seven days it checks the likes and places it in the dictionary
    ranked first, second or third place according to likes amount.
    <br>
    While ranking the tweets the bot also collects some statistics to display them after
    the third most liked tweet.
    <br>
    After everything is done the bot quote-retweets the three most liked tweets in order
    and the statistics at the end.
    <template #information>
      <a href="https://github.com/Riximus/bestof-twt-bot" target="_blank">Source Code</a>
    </template>
  </PopupModal>
</template>

<script>
import PopupModal from "@/components/ui/PopupModal";

export default {
  name: "TwitterBot",
  components: {
    PopupModal
  },
  data() {
    return {
      techs: ['Python', 'Tweepy']
    }
  }
}
</script>

<style scoped lang="sass">

</style>