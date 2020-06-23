import Vue from 'vue';
import CryptoJS from 'crypto-js';

const app = new Vue({
    el: '#app',
    data: {
        domainInput: '',
        masterPasswordInput: '',
        generatedPasswordInput: '',
        lengthInput: 16
    },
    methods: {
        generatePassword: function (event) {
            const hmac = CryptoJS.HmacSHA224(this.domainInput, this.masterPasswordInput);
            this.generatedPasswordInput = CryptoJS.SHA256(hmac.toString()).toString().substr(0, this.lengthInput);
        }
    }
});