
$(document).ready(function () {
    $("#mostrar").show();
    $("#ocultar").hide();
});


function mostrarPass() {

    $("#mostrar").hide();
    $("#ocultar").show();

    var inputPass = document.getElementById("pass");
    inputPass.type = "text";
    // inputPass.type = "text";
    console.log(inputPass.type);
};

function ocultarPass() {

    $("#ocultar").hide();
    $("#mostrar").show();

    var inputPass = document.getElementById("pass");
    inputPass.type = "password";
    // inputPass.type = "text";
    console.log(inputPass.type);
};


$("#log-in").click(function(){

    var pass = $("#pass").val();


    // alert(pass);
    // console.log(pass.type);

    if(pass == undefined) {
        alert("Todos los campos son necesarios! ..");
    }
});
