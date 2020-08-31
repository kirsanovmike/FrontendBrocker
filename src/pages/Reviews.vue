<template>
  <div>
    <h3 align="center">Отзывы о брокерских компаниях</h3>
    <div class="q-pa-md" style="max-width: 100%" v-for="(broker, index) in brokers" :key="index">
      <div v-if="broker.reviews.length != 0">
        <router-link
          class="link brk-title"
          tag="h5"
          :to="`/reviews-brokers/${index}`"
        >{{ broker.name + ': '}} <span class="mark"> {{' ' + broker.Average }}</span></router-link>

        <div class="q-pa-md" style="max-width: 75%">
          <q-list
            bordered
            class="rounded-borders"
            v-for="(review, ind) in broker.reviews"
            :key="ind"
          >
            <q-expansion-item v-if="ind<4">
              <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar icon="chat" color="primary" text-color="white" />
                </q-item-section>

                <q-item-section>{{ broker.name }}</q-item-section>

                <q-item-section side>
                  <q-rating
                    v-model="review.mark"
                    :max="review.marks"
                    size="32px"
                    :color="ratingColors"
                    readonly
                    no-dimming
                  />
                </q-item-section>
              </template>

              <q-card>
                <q-card-section>{{ review.text }}</q-card-section>
              </q-card>
            </q-expansion-item>

            <!-- <q-separator /> -->
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    brokers: [],
    ratingColors: [
      "yellow-3",
      "yellow-4",
      "yellow-6",
      "yellow-8",
      "yellow-10",
    ],
  }),
  props: {},
  methods: {},
  created() {
    this.$axios
      .get("/brk")
      .then((resp) => {
        // console.log(resp.data);
        this.brokers = resp.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style  scoped>
.brk-title {
  color: rgb(0, 0, 0);
  cursor: pointer;
}

.brk-title:hover {
  color: rgb(245, 186, 7);
}

.mark{
  color:rgb(212, 112, 30)
}

</style>
