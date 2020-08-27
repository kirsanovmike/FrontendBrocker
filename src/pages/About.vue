<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img src="https://brokertribunal.com/storage/app/media/overviews/Get%20Capitals/get_capitals_2.jpg" />

      <q-card-section>
        <div class="text-overline text-blue-9">Лучше, чем Банки.ру и все остальные!</div>
        <div class="text-h5 q-mt-sm q-mb-xs">ABC-рейтинг</div>
        <div class="text-caption text-grey">На сегодняшний день мы лучшая комания по рейтингам.</div>
      </q-card-section>

      <q-card-actions>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">{{ about }}</q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      about:
        "Если вы хотите узнать о нас поподробнее, то тут можете найти наши контакты и написать по всем интересующим Вас вопросам.",
    };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 410px;
  // display: flex;
}
</style>