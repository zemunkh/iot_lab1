<template>
  <div class="home">
    <div id="logo">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    </div>

    <WeatherCard 
      :temperature="Math.floor(this.sensorData.temp)" 
      :humidity="Math.floor(this.sensorData.hum)" 
      :createdOn="this.sensorData.createdOn"
    />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import WeatherCard from '@/components/WeatherCard.vue'
// const fb = require('../firebaseConfig.js');

export default {
  name: 'Home',
  components: {
    WeatherCard
  },
  computed: {
    ...mapState(['sensorData'])
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  #logo {
    margin-left: auto;
    margin-right: auto;
  }
</style>
