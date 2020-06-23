import Vue from 'vue';
import CryptoJS from 'crypto-js';

const app = new Vue({
    el: '#app',
    data: {
        domainInput: '',
        masterPasswordInput: '',
        generatedPasswordInput: '',
        lengthInput: 16,
        uppercaseCheckboxInput: false
    },
    methods: {
        generatePassword: function (event) {
            if (this.domainInput === '' || this.masterPasswordInput === '')
                return;

            let pwd = CryptoJS.HmacSHA224(this.domainInput, this.masterPasswordInput).toString();
            pwd = CryptoJS.SHA256(pwd.toString()).toString();
            if (this.uppercaseCheckboxInput)
                pwd = pwd.toString()
                    .replace(new RegExp('([a-z]{1})([0-9]{2,})', 'g'),
                        function (match: string, p1: string, p2: string) {
                            return p1.toUpperCase() + p2;
                        });
            this.generatedPasswordInput = pwd.toString().substr(0, this.lengthInput);
        }
    }
});