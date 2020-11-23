import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '*',
      name: 'Error',
    },
    {
      path: "/",
      name: "View-Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/dashboard/todos",
      name: "View-Todos",
      component: () => import("../views/Todos.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/dashboard/begin",
      name: "View-Begin",
      component: () => import("../views/Begin.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/dashboard/andamento",
      name: "View-Andamento",
      component: () => import("../views/Andamento.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/dashboard/finalizado",
      name: "View-Finalizado",
      component: () => import("../views/Finalizado.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/dashboard/listas",
      name: "View-Listas",
      component: () => import("../views/Listas.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = JSON.parse(localStorage.getItem('progweb'))
    if (user) {
      next()
    } else {
      location.href = '/'
      next()
    }
  } else {
    next()
  }
})

export default router;
