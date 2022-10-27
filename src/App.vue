<template>
  <div id="app">
    <router-view />
    <!-- <hello-world /> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  components: { HelloWorld },
  name: 'App',
  mounted:{
   HelloWorld
 },
 mounted(){

 }
}
</script>

<style>

</style>
