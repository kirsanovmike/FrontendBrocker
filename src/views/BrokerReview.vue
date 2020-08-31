<template>
  <div>
    <div>
      <q-card class="my-card" v-for="(review, index) in reviews" :key="index">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">{{ brkName }}</div>
          </div>

          <div class="text-subtitle1">
            <q-rating
              v-model="review.mark"
              :max="review.marks"
              size="32px"
              :color="ratingColors"
              readonly
              no-dimming
            />
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">{{ review.text }}</div>
        </q-card-section>

        <q-separator />
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    brkName: "",
    reviews: [],
    ratingColors: [
      "yellow-3",
      "yellow-4",
      "yellow-6",
      "yellow-8",
      "yellow-10",
    ],
  }),
  props: {},
  created() {
    // That's for API, not for template!
    this.$axios
      .get("/brk")
      .then((resp) => {
        this.reviews = resp.data[this.$route.params.id].reviews;
        this.brkName = resp.data[this.$route.params.id].name;
        // console.log(resp.data[0].name)
      })
      .catch((err) => {
        console.log(err);
      });
    // That's right responce for API, make it as soon as possible!
    // this.$axios.get("/brk", { params: { id: this.$route.params.id } }).then((resp) => {
    // console.log(resp.data)
    // });
  },
};
</script>

<style scoped>
.my-card {
  width: 70%;
  margin: 15px;
  align-content: "center";
  /* max-width: 500px; */
}
</style>
