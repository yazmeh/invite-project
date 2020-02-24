/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import 'bootstrap'
import Vue from 'vue';
import "normalize.css";
import Example from "./components/Invite.vue";
import './sass/app.scss';
import LayoutContainer from "./components/LayoutContainer.vue";

export default new Vue({
    el: '#app',
    render(h){
       return (
           <LayoutContainer heading="Vue test Header">
               <Example />
           </LayoutContainer>
       )
    },
    components:{Example}
});
