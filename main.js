const { createApp } = Vue

createApp({
    data() {
        return {
           mails : [
             
            {text:''},
            {text:''},
            {text:''},
            {text:''},
            {text:''},
            {text:''}

           ],
        }
    },
    methods: {
        generaMail() {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                
            this.mails = resp.data.response;
            
        });
    }
    
    },


}).mount('#app')