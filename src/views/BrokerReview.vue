<template>
  <div>
    <div>
      <q-card class="my-card" v-for="(review, index) in reviews" :key="index">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">{{ brkName }}</div>
          </div>

          <div class="text-subtitle1">
            
            <q-rating v-model="review.mark" :max="review.marks" size="32px" />
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
  }),
  props: {},
  created() {
    // That's for API, not for template!
    this.$axios
      .get("/brk")
      .then((resp) => {
        this.reviews = resp.data[0].reviews;
        this.brkName = resp.data[0].name;
        // console.log(resp.data[0].name)
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("this.$route.params.id =", this.$route.params.id);
    // this.brkName = this.$route.params.id;
    // this.$axios.get("/brk", { params: { id: this.$route.params.id } });
  },
};
</script>

<style scoped>
.my-card{
  width: 70%;
  margin: 15px;
  align-content: "center"
  /* max-width: 500px; */
}
</style>
