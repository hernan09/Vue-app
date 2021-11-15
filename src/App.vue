<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="dark">
      <div class="container d-flex contentlinks">
        <b-navbar-brand>
          <router-link to="/home">HOME</router-link>
        </b-navbar-brand>
        <b-navbar-brand>
          <router-link to="/about">ABOUT</router-link>
        </b-navbar-brand>
        <b-navbar-brand>
          <router-link to="/login">LOGIN</router-link>
        </b-navbar-brand>
        <b-navbar-brand>
          <router-link to="/tareas">TAREAS</router-link>
        </b-navbar-brand>
      </div>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('https://i.pinimg.com/originals/e0/6c/e7/e06ce7a59f9712e132a4aa6795f9399a.gif');
  background-size: cover;
  height: 100vh;
}
a,
a:active,
a:focus,
a:visited {
  text-decoration: none;
  color: white;
}
.contentlinks {
  width: 300px;
}
</style>
