import vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/Home.vue";
import About from './components/About/about.vue';
import Login from './components/Login/login.vue';
import ErrorNotfound from './components/Error/Error.vue';

vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/login", name: "login", component: Login },
    { path: "/home", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: '*', name:'error',component: ErrorNotfound }
  ],
});
