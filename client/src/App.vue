<template>
  <div class="max-h-screen" style="font-family: 'Spartan', sans-serif;">
      <firstRow :showLinks="showLinks"/>
      <secondRow id="lgScdR" :showLinks="showLinks"/>
      <smSecondRow id="smScdR" class="hidden"/>
  </div>
</template>

<script>
import firstRow from './components/firstRow'
import secondRow from './components/secondRow'
import smSecondRow from './components/smSecondRow'


export default {
  components: {
    firstRow,
    secondRow,
    smSecondRow
  },
  data () {
    return {
      showLinks: false
    }
  }
}
</script>

<style scoped>

@media (max-width: 400px) {
  #smScdR{
    display: block;
  }

  #lgScdR{
    display: none;
  }
}

</style>
