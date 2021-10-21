<template>
  <div class="homepage__container">
    <h1>Bienvenido a Vue App</h1>
    <div class="content__div">
      <button
        v-on:click="changeFlag()"
        class="btn btn-primary btn-sm changebutton"
      >
        Ver mas
      </button>
      <div
        v-show="showflag"
        class="shadow fade-in-top p-3 mb-5 m-5 p-5 content__div2"
      >
        Bienvenidos a la Home
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',

  data() {
    return {
      showflag: true,
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
  color: black;
  width: 100%;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
}
.changebutton {
  width: 200px;
}
.content__div2 {
  background-color: black;
  opacity: 0.7;
}
.fade-in-top {
  -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0.7;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0.7;
  }
}
</style>
