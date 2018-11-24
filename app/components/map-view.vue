<template>
  <Mapbox
    class="component"
    :accessToken="mapboxToken"
    hideCompass="true"
    zoomLevel="16"
    showUserLocation="true"
    disableZoom="false"
    disableRotation="false"
    disableScroll="false"
    disableTilt="false"
    @mapReady="onMapReady($event)" />
</template>

<script>
import { mapboxToken } from '../secrets'

export default {
  name: 'MapView',
  data () {
    return {
      mapbox: null,
      mapboxToken
    }
  },
  methods: {
    onMapReady (args) {
      this.mapbox = args.map

      this.mapbox.getUserLocation().then(data => {
        this.mapbox.setCenter({
          lat: data.location.lat,
          lng: data.location.lng
        })
      })
    }
  }
}
</script>

<style scoped>
.component {
  width: 100%;
  flex: 1;
}
</style>
