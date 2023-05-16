const app = Vue.createApp({
    data() {
        return {
            emailArr: [],
            emailNum: 10,
        }
    },

    methods: {
        getMultipleRandomEmail() {
            for (i = 0; i < this.emailNum; i++) {
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