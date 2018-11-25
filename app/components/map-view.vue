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
import * as geolocation from 'nativescript-geolocation'
import { Accuracy } from 'tns-core-modules/ui/enums'
import { mapboxToken } from '../secrets'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MapView',
  data () {
    return {
      mapbox: null,
      mapboxToken,
      trackID: null
    }
  },
  created () {
    geolocation.enableLocationRequest()
  },
  computed: {
    ...mapState({
      points: state => state.points,
      trackingStatus: state => state.trackingStatus
    })
  },
  watch: {
    trackingStatus () {
      if (this.trackingStatus === 'in-progress') {
        this.startTracking()
      } else {
        geolocation.clearWatch(this.trackID)
      }
    }
  },
  methods: {
    ...mapMutations(['addDataToPoints']),
    onMapReady (args) {
      this.mapbox = args.map

      geolocation.getCurrentLocation().then(data => {
        this.mapbox.setCenter({
          lat: data.latitude,
          lng: data.longitude
        })
      })
    },
    startTracking () {
      this.trackID = geolocation.watchLocation(data => {
        this.mapbox.setCenter({
          lat: data.latitude,
          lng: data.longitude
        })

        this.addDataToPoints({
          lat: data.latitude,
          lng: data.longitude
        })

        this.mapbox.removePolylines([1])
        this.mapbox.addPolyline({
          id: 1,
          color: '#336699',
          width: 7,
          opacity: 0.6,
          points: this.points
        })
      }, err => console.log(err), {
        desiredAccuracy: Accuracy.high,
        updateDistance: 0.1,
        updateTime: 3000,
        minimumUpdateTime: 100,
        iosAllowsBackgroundLocationUpdates: true,
        iosPausesLocationUpdatesAutomatically: false
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
