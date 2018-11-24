import Vue from 'nativescript-vue'
import Home from './components/Home'
import store from './store'

Vue.registerElement('Mapbox', () => require("nativescript-mapbox").MapboxView)

new Vue({
  template: `
    <Frame>
      <Home />
    </Frame>
  `,
  components: {
    Home
  },
  store
}).$start()
