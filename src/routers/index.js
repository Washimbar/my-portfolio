import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home/Home.vue";
import Projects from "../pages/projects/Projects.vue";
import { projects } from "./../data/mockData";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/project/:id",
    name: "projects",
    component: Projects,
    props: true,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
