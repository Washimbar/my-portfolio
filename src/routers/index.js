import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home/Home.vue";
import ProjectDetail from "../pages/projects/Projects.vue";
import { projects } from './../data/mockData';

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/project/:id", component: ProjectDetail, props: true },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
