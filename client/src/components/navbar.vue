<template>
    <div class="w-full">
        <div id="lgNav" class="ml-16 mt-16 w-1/4 flex text-white justify-around items-baseline">
            <p class="text-2xl mr-10" style="font-weight: 500;"> room </p>
            <p class="text-sm mr-4"> home </p>
            <p class="text-sm mr-4"> shop </p>
            <p class="text-sm mr-4"> about </p>
            <p class="text-sm mr-4"> contact </p>
        </div>
        <smNavbar id="smNav" class="hidden w-full"/>
    </div>
</template>

<script>

import smNavbar from './smNavbar'

export default {
    components: {
        smNavbar
    }    
}
</script>

<style scoped>

@media (max-width: 400px) {
  #smNav {
    display:block;
  }

  #lgNav {
      display: none;
  }
}

</style>