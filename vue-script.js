const app = Vue.createApp({
    data() {
        return {
            emailArr: [],
        }
    },

    methods: {
        getMultipleRandomEmail() {
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then(serverResponse => this.emailArr.push(serverResponse.data.response));
            };
        }
    },

    created() {
        this.getMultipleRandomEmail();
    }
})

app.mount("#app");