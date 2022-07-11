import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import antdesign UI 
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import mock for test and user login 
import './mock'

createApp(App).use(store).use(router).use(Antd).mount('#app')
