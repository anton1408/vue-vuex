import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import UserPage from "@/views/UserPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/user/:id",
      name: "UserPage",
      component: UserPage
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //   component: () =>
      //     import(/* webpackChunkName: "about" */ "./views/UserPage.vue")
    }
  ]
});
