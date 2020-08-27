<template>
  <div>
    <h3>Отзывы о брокерских компаниях</h3>
    <div class="q-pa-md" style="max-width: 550px" v-for="(broker, index) in brokers" :key="index">
      <h5>{{ broker.name + " " + broker.mark }}</h5>
      <q-list>
        <q-item v-for="(rev, ind) in broker.reviews" :key="ind">
          
          <q-item-section 
            clickable
            :to="link"
            exact
          >
            <q-item-label>{{ rev.name }}</q-item-label>
            <br>
            <q-item-label caption lines="2">{{ rev.review }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>{{ rev.mark }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div>
      <q-card class="my-card">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">БРОКЕР</div>
          </div>

        <div class="text-subtitle1">ОЦЕНКА: 
          
          <q-rating v-model="stars" :max="5" size="32px" />
        </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">
            САМ ОТЗЫВ
          </div>
        </q-card-section>

        <q-separator />
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    stars: 3,
    brokers: [
      {
        name: "Тиньков",
        mark: "3.6",
        reviews: [
          {
            name: "Кирилл",
            review: "сам отзыв о брокере Тинькофф 1",
            mark: "3.1",
          },
          {
            name: "Миша",
            review: "сам отзыв о брокере Тинькофф 2",
            mark: "3.3",
          },
        ],
      },
      {
        name: "Сбербанк",
        mark: "4.1",
        reviews: [
          {
            name: "Миша",
            review: "сам отзыв о брокере Сбербанк 1",
            mark: "2.3",
          },
          {
            name: "Кирилл",
            review: "сам отзыв о брокере Сбербанк 2",
            mark: "4.3",
          },
        ],
      },
      {
        name: "ВТБ",
        mark: "2.3",
        reviews: [
          { name: "Миша", review: "сам отзыв о брокере ВТБ 1", mark: "1.5" },
          { name: "Кирилл", review: "сам отзыв о брокере ВТБ 2", mark: "2.5" },
        ],
      },
    ],
  }),
  props: {},
  methods: {},
  created() {},
};
</script>

<style lang="sass" scoped></style>
