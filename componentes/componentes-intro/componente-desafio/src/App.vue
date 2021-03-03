<template>
  <v-app>
    <Navigation />
    <Headline />
    <Content />
    <Footer />
  </v-app>
</template>

<script>
import Content from './components/Content.vue'
import Headline from './components/Headline.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navigation, Headline, Content, Footer },

}
</script>
