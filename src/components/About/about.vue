<template>
  <div class="homepage__container container ">
    <ul
      v-show="loadData === true"
      class="shadow p-3 mb-5 bg-black rounded fade-in-top"
      id="example-1"
    >
      <li class="list-item" v-for="item in dataInfo" :key="item.id">
        <span class="item-name">{{ item.employee_name }}</span>
        <span class="item-price badge badge-info"
          >{{ item.employee_salary }}$</span
        >
      </li>
    </ul>
    <RotateSquare5 class="loading" v-show="loadData === false"></RotateSquare5>
  </div>
</template>

<script>
import vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { RotateSquare5 } from 'vue-loading-spinner';

vue.use(VueAxios, axios);

export default {
  name: 'Aboutpage',
  components: {
    RotateSquare5,
  },
  mounted() {
    vue.axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => {
        this.dataInfo = response.data.data;
        this.loadData = true;
        console.log(this.dataInfo);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  props: {
    msg: String,
    title: String,
  },
  data() {
    return {
      showflag: true,
      dataInfo: [],
      loadData: false,
    };
  },
  methods: {
    changeFlag: function() {
      this.showflag = !this.showflag;
      console.log(this.showflag);
    },
  },
};

// eslint-disable-next-line no-unused-vars
</script>

<style>
.homepage__container {
  color: white;
  width: 100%;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10%;
  height: auto;
}
.changebutton {
  width: 200px;
}
.content__div {
}
#example-1 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: auto;
  height: 554px;
}
@media (max-width: 450px) {
  #example-1 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
.list-item {
  list-style: none;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}
.loading {
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  top: 200px;
}
.item-price {
  color: white;
  font-size: 16px;
  margin-left: 5px;
  background-color: mediumseagreen;
  border-radius: 4px;
  margin: 2px;
  width: 85px;
  margin-right: 12px;
}
</style>
