import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeParent from "../views/home/HomeParent.vue";
import NoteParent from "../views/notes/NoteParent.vue";
import TaskParent from "../views/tasks/TaskParent.vue";
import CalendatParent from "../views/calendar/CalendarParent.vue";
import OtherParent from "../views/others/OtherParent.vue";
import GoalParent from "../views/goals/GoalParent.vue";
import RelaxationParent from "../views/relaxation/RelaxationParent.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: HomeParent
  },
  {
    path: "/notes",
    name: "Notes",
    component: NoteParent
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: TaskParent
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: CalendatParent
  },
  {
    path: "/goals",
    name: "Goals",
    component: GoalParent
  },
  {
    path: "/relax",
    name: "Relax",
    component: RelaxationParent
  },
  {
    path: "/more",
    name: "More",
    component: OtherParent
    // component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
