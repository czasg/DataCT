import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/dataClear'
        },
        {
            path: '/dataClear',
            component: r => require(['@/components/ClearCases'], r)
        },
        {
            path: '/dataTest',
            component: r => require(['@/components/TestCases'], r)
        }
    ]
})