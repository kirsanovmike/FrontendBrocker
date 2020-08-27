<template>
  <div>
    <h2>Рейтинг брокерских компаний</h2>
    <div class="q-pa-md">
    <q-table
      class="my-sticky-column-table"
      title="Рейтинги брокерских компаний"
      :data="brokers"
      :columns="columns"
      row-key="name"
    ></q-table>
  </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    brokers: [],
    columns: [
        {
          name: 'name',
          required: true,
          label: 'Брокерская компания',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'Average',
          align: 'center',
          label: 'Среднее по всем',
          field: 'Average',
          sortable: true,
          align: 'center',
        },
        {
          name: 'Banki.RU',
          align: 'center',
          label: 'Банки.ру',
          field: 'SiteBankiRU',
          sortable: true,
          align: 'center',
        },
        { name: 'SMARTLAB.RU', label: 'Смартлаб', field: 'SiteSmartLabRU', sortable: true, align: 'center',},
        { name: 'OTZOVIK.RU', label: 'Отзовик', field: 'SiteOtzovikRU', sortable: true, align: 'center',
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) 
        },
    ],
  }),
  props: {}, 
  methods: {
    print(){
      // console.log("this.data = ", this.data);
      // console.log("this.brokers = ", this.brokers);
    }
  },
  created() {
    // console.log("created");
    this.$axios
      .get("/brk")
      .then(resp => {
        this.brokers = resp.data;
        // console.log(resp.data)
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


<style scoped>
.my-sticky-column-table {
  max-width: 900px
}
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */

thead tr:first-child th:first-child {
  background-color: #fff
}
    /* bg color is important for th; just specify one */

td:first-child {
  background-color: #f5f5dc
}

th:first-child, td:first-child{
  position: sticky;
  left: 0;
  z-index: 1
}
</style>