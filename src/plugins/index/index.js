
import FistLoad from '../first-load'
import Toast from '../toast'


export default {
  install(Vue) {
    Vue.use(Toast)
    Vue.use(FistLoad)
  }
}
