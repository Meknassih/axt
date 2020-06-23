import Vue from 'vue';

const app = new Vue({
    el: '#app',
    data: {
        domainInput: '',
        masterPasswordInput: '',
        generatedPasswordInput: ''
    },
    methods: {
        generatePassword: function (event) {
            console.log(event);
            this.generatedPasswordInput = this.domainInput + this.masterPasswordInput;
        }
    }
});