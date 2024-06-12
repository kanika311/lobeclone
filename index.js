const ham = document.getElementById('check')


ham.addEventListener("click", poupfn);

 function poupfn ( ){ 
    document.getElementById(
    "popup"
).style.display = "block";

}

ham.addEventListener("dblclick", poupfnc);

 function poupfnc( ){ 
    document.getElementById(
    "popup"
).style.display = "none";

}



