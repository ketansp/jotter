import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import NoteParent from '../views/notes/NoteParent.vue';
import TaskParent from '../views/tasks/TaskParent.vue';
import CalendatParent from '../views/calendar/CalendarParent.vue';
import OtherParent from '../views/others/OtherParent.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/notes',
    name: 'Notes',
    component: NoteParent,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TaskParent,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendatParent,
  },
  {
    path: '/more',
    name: 'More',
    component: OtherParent,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
