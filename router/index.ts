import Index from '../src/pages/home'
import About from '../src/pages/about'

const routes = [
  {
    path: "/",
    name:"首页",
    component: Index
  },
  {
    path: "/about",
    name:"关于",
    component: About
  }
];

export default routes