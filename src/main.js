import { createApp } from 'vue'
import App from './App.vue'
import './style/App.css'
import components from '../src/components/UI';
import directives from './directives';
import router from './router/router';
import store from './store';

const app = createApp(App);

components.forEach(component => app.component(component.name, component));
directives.forEach(directive=> app.directive(directive.name, directive));


app
    .use(router)
    .use(store)
    .mount('#app');
