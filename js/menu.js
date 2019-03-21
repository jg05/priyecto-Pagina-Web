
var acc=sessionStorage.getItem("acceso");
if (acc!="" && acc!=null) {
    var acceso=atob(acc);
    axios.post('http://192.168.32.136/apiRest/public/api/auth/refresh',{
            token:acceso,
        })
    .then(response => {
        sessionStorage.removeItem("acceso");
        var acceso2=btoa(response.data.access_token);
        sessionStorage.setItem("acceso",acceso2);
        $("#Acceso").html(' <li class="nav-item dropdown">'+
        '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+response.data.user.name+'</a>'+
        '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
          '<a class="dropdown-item" href="#">Action</a>'+
          '<a class="dropdown-item" href="#">Another action</a>'+
          '<div class="dropdown-divider"></div>'+
          '<a class="dropdown-item"  onclick="cerrar()">Cerrar Sesión</a>'+
        '</div>'+
      '</li>');
    })
    .catch(error => {
        sessionStorage.removeItem("acceso");
        // window.location="login.html";
        $("#Acceso").html('<li class="nav-item"><a class="nav-link" href="login2-0.html">Iniciar Sesion</a></li>');
       //window.location="login2-0.html"; 
    });

   
}else{
    $("#Acceso").html('<li class="nav-item"><a class="nav-link" href="login2-0.html">Iniciar Sesion</a></li>');
}





function cerrar(){

    var acc=sessionStorage.getItem("acceso");
    var acceso=atob(acc);
    axios.post('http://192.168.32.136/apiRest/public/api/auth/logout',{
            token:acceso,
        })
    .then(response => {
        sessionStorage.removeItem("acceso");
        window.location="index.html";
    })
    .catch(error => {
        sessionStorage.removeItem("acceso");
        // window.location="login.html";
        $("#Acceso").html('<li class="nav-item"><a class="nav-link" href="login2-0.html">Iniciar Sesion</a></li>');
        window.location="login2-0.html"; 
        $("mymodal").modal("show");
    });
}