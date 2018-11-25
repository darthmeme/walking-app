<template>
  <Page class="page">
    <TabView>
      <TabViewItem
        title="Start"
        iconSource="~/assets/marker@3x.png">
        <FlexboxLayout flexDirection="column">
          <map-view />
          <FlexboxLayout justifyContent="space-around">
            <action-button
              v-show="isNotTracking"
              type="primary"
              text="Start"
              color="#4C9ADD"
              size="large" />
            <action-button
              v-show="isTracking"
              text="Pause"
              color="#4C9ADD"
              size="large" />
            <action-button
              v-show="isTrackingPaused"
              text="Continue"
              color="#9AED96"
              size="small" />
            <action-button
              v-show="isTrackingPaused"
              text="Stop"
              color="#FF4434"
              size="small" />
          </FlexboxLayout>
        </FlexboxLayout>
      </TabViewItem>
      <TabViewItem
        title="History"
        iconSource="~/assets/list@3x.png">
        <Label text="Content for Tab 2" />
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import MapView from './map-view'
import ActionButton from './ActionButton'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    MapView,
    ActionButton
  },
  computed: {
    ...mapState({
      trackingStatus: state => state.trackingStatus
    }),
    isNotTracking () {
      return this.trackingStatus === 'initial'
    },
    isTracking () {
      return this.trackingStatus === 'in-progress'
    },
    isTrackingPaused () {
      return this.trackingStatus === 'paused'
    }
  },
  methods: {
    ...mapMutations(['setTrackingStatus'])
  }
}
</script>

<style scoped lang="scss">
.page {
  color: #F4F4F4;
}
</style>
