import Vue from 'vue';
import CryptoJS from 'crypto-js';

const app = new Vue({
    el: '#app',
    data: {
        domainInput: '',
        masterPasswordInput: '',
        generatedPasswordInput: ''
    },
    methods: {
        generatePassword: function (event) {
            this.generatedPasswordInput = CryptoJS.HmacSHA224(this.domainInput, this.masterPasswordInput);
        }
    }
});