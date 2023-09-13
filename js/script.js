var panjang = document.getElementById("panjang");
var lebar = document.getElementById("lebar");
var luas = document.getElementById("hasilluas");

document.getElementById(hitung).addEventListener("click", function(){
    luas.value = parseInt(panjang.value)*parseInt(lebar.value);
})
