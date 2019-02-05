import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import {store} from './store'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import "vue-material-design-icons/styles.css"
import * as firebase from 'firebase'
import 'firebase/firestore'
import Alert from './components/Shared/Alert'
import AlertSuccess from './components/Shared/AlertSuccess'
import EditProjectDialog from './components/Projects/Edit/EditProjectDialog'
import firebaseConfig from '../config/firebaseConfig'
import swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"
import Widget from '../src/plugin/components/Widget';
import SocialWidget from '../src/plugin/components/SocialWidget';
import DataTable from '../src/plugin/components/DataTable';
import Carousel from '../src/plugin/components/Carousel';
import TimeLine from '../src/plugin/components/TimeLine';
import UserTreeView from '../src/plugin/components/UserTreeView';
import Stepper from '../src/plugin/components/Stepper';
import LocationStatistic from '../src/plugin/components/LocationStatistic';
import Statistic from '../src/plugin/components/Statistic';
import Chart from 'chart.js';
import VueChartkick from 'vue-chartkick';
import PrettyInput from 'pretty-checkbox-vue/input';
import PrettyCheck from 'pretty-checkbox-vue/check';
import PrettyRadio from 'pretty-checkbox-vue/radio';
import 'font-awesome/css/font-awesome.css';  
import ApexCharts from 'apexcharts'
import VueGraph from 'vue-graph'
// const functions = require('firebase-functions');
import GraphLine3D from 'vue-graph/src/components/line3d.js'
import NoteWidget from 'vue-graph/src/widgets/note.js'
import LegendWidget from 'vue-graph/src/widgets/legends.js'

Vue.component(GraphLine3D.name, GraphLine3D);
Vue.component(NoteWidget.name, NoteWidget);
Vue.component(LegendWidget.name, LegendWidget);

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
const settings = {timestampsInSnapshots: true};
db.settings(settings);

Vue.use(VueGraph)
Vue.use(Vuetify)
Vue.use(VueChartkick, { adapter: Chart });

// Vue.use(VueMaterial)

// Vue.component("menu-icon", MenuIcon)
Vue.config.productionTip = false
// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('swatches', swatches);
Vue.component('app-alert', Alert)
Vue.component('app-alert-success', AlertSuccess)
Vue.component('app-edit-project-dialog', EditProjectDialog)
Vue.component('widget', Widget);
Vue.component('social-widget', SocialWidget);
Vue.component('data-table', DataTable);
Vue.component('time-line', TimeLine);
Vue.component('user-tree-view', UserTreeView);
Vue.component('stepper', Stepper);
Vue.component('p-input', PrettyInput);
Vue.component('p-check', PrettyCheck);
Vue.component('p-radio', PrettyRadio);

Vue.component('carousel', Carousel);

Vue.component('location-statistic', LocationStatistic);
Vue.component('statistic', Statistic);

// Vue.component('site-view-statistic', SiteViewStatistic);
// Vue.component('total-earnings-statistic', TotalEarningsStatistic);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created(){
  
  firebase.auth().onAuthStateChanged(user => {
    if(user){
      this.$store.dispatch('loadUserInfo', user)
      this.$store.dispatch('autoSignIn', user)
      this.$store.dispatch('loadedProject')
      this.$store.dispatch('loadedHolidays')
      this.$store.dispatch('loadedTimeSheet')
      this.$store.dispatch('loadedEmployee')

    }
  })


  

  }
})