<template>
  <div>
    <div>
      <q-card class="my-card" v-for="(review, index) in reviews" :key="index">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">ПАО Сбербанк</div>
          </div>

          <div class="text-subtitle1">
            
            <q-rating v-model="review.mark" :max="review.mark" size="32px" />
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">{{ review.content }}</div>
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
    reviews: [
      {
        mark: "1",
        content: "Добрый день. Система ни о чем. Проводишь операции по продаже, купить уже не можешь, вывести деньги не можешь. Ужас. Постепенно ухожу от вас, сразу не даёте возможности. Никому не советую. Есть отличные альтернативы.",
      },
      {
        mark: "5",
        content:
          "В целом доволен этим брокером, но было несколько разногласий при подтверждении документов",
      },
      {
        mark: "3",
        content:
          "Невозможно работать: на запрос справки о дивидендах по акциям требуют личного присутствия в офисе. Отказываются от работы по email или почтой с заказными письмами. Полное невнимание к невозможности физически прибыть в офис. История длится уже 4 месяца, в результате просрочена подача 3 НДФЛ. Чтобы закрыть вопрос, буду обращаться к юристу.",
      },
    ],
  }),
  props: {},
  methods: {},
  created() {
    // That's for API, not for template!
    // console.log("this.$route.params.id =", this.$route.params.id);
    // this.brkName = this.$route.params.id;
    // this.$axios.get("/brk", { params: { id: this.$route.params.id } });
  },
};
</script>

<style scoped>
.my-card{
  width: 60%;
  margin: 15px;
  align-content: "center"
  /* max-width: 500px; */
}
</style>
