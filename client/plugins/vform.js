import Vue from 'vue'
import { HasError, AlertError, AlertSuccess } from 'client/plugins/vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertSuccess.name, AlertSuccess)
