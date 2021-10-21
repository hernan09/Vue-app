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
      </div>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a,
a:active,
a:focus,
a:visited {
  text-decoration: none;
  color: white;
}
.contentlinks{
  width: 300px;
}
</style>
