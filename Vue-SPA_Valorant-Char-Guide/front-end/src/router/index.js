import Vue from 'vue'
import VueRouter from 'vue-router'
import AgentSelect from '../views/agentSelect.vue'
import AgentDescription from '../views/agentDescription.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '*',
    redirect: '/agents'
  },
  {
  path: '/agents',
  component: AgentSelect
  },

  {
  path: '/agents/:id', 
  component: AgentDescription
  }
]

//instantiate new VueRoutes and pass in routes

const router = new VueRouter({
  routes
})

//export router so it is available for other compoenents to use
export default router
