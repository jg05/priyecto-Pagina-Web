
new Vue({
    el: '#login',
    data(){ 
        return {
        user: '',
        pass: '', 
         }
    },
    methods: {
        login: function() {
                axios.post('http://192.168.32.136/apiRest/public/api/auth/login',{
                        email:this.user,
                        password: this.pass
                    })
                .then(response => {
                    var dat=btoa(response.data.access_token);
                    sessionStorage.setItem("acceso", dat);
                   window.location="index.html"; 
                })
                .catch(error => {
                //console.log(error)
                
                })
            

        }
      },
});

