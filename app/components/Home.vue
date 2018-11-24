<template>
  <Page class="page">
    <FlexboxLayout>
      <map-view />
    </FlexboxLayout>
  </Page>
</template>

<script>
import MapView from './map-view';

export default {
  name: 'App',
  components: {
    MapView
  }
}
</script>

<style scoped lang="scss">

</style>
