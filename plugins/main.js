import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
Vue.use(AOS.init({
    duration: 800,
    offset: 20,
    delay:50,
    once: false,
    startEvent:'load'
}));