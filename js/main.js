import VApp from "./App.js";

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
    el: "#app",
    render: (h) => h(VApp),
});