import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CharacterInfo from '../views/CharacterInfo.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/characterinfo/:id',
    name: 'CharacterInfo',
    component: CharacterInfo
  },
];

const router = new VueRouter({
  routes,
  mode: 'history' 
});

export default router;
