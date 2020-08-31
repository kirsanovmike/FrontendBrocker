<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        
        <router-link class="link" tag="q-toolbar-title" to="/" v-html="`АВС-Rating - Брокеры`" />

      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/brokers" label="Брокерские компании" />
        <q-route-tab to="/reviews-brokers" label="Отзывы о брокерах" />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        Меню

        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Домой',
    caption: 'Домашняя страница',
    icon: 'school',
    link: '/'
  },
  {
    title: 'Брокерские компании',
    caption: 'Список брокерских компаний',
    icon: 'code',
    link: '/brokers'
  },
  {
    title: 'Отзывы / Форум',
    caption: 'Отзывы о брокерских компаниях',
    icon: 'chat',
    link: '/reviews-brokers'
  },
  {
    title: 'О нас',
    caption: 'О компании ABC-рейтинг',
    icon: 'record_voice_over',
    link: '/about'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.link{
  cursor: pointer;
}
</style>
