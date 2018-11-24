import Vue from 'nativescript-vue'
import Home from './components/Home'

Vue.registerElement('Mapbox', () => require("nativescript-mapbox").MapboxView)

new Vue({
  template: `
    <Frame>
      <Home />
    </Frame>
  `,
  components: {
    Home
  }
}).$start()
