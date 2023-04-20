import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import router from '@/router'
import 'animate.css'
import baseComponents from '@/components/Base/baseComponents';


const app = createApp(App)
app.use(ElementPlus)
    .use(router)
    .use(baseComponents)
    .mount('#app')
