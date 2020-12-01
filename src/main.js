import { createApp } from 'vue'
import App from './App.vue'
import Toaster from '@meforma/vue-toaster';

const app = createApp(App);

app.use(Toaster, {
    position: 'top-right',
    duration: 2000
});
app.mount('#app');
