<template>
  <div class="homepage__container">
       <h1>Bienvenido a Vue App</h1>
    <div class="content__div">
      <button v-on:click="changeFlag()" class="btn btn-primary btn-sm changebutton">Ver mas</button>
      <p v-show="showflag">Estoy en la Homepage</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
 
  data() {
    return {
      showflag: true
    };
  },
  methods: {
    changeFlag: function() {
      this.showflag = !this.showflag;
      console.log(this.showflag);
    }
  }
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
}
.changebutton {
  width: 200px;
}
.content__div {
   
}
</style>