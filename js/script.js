var panjang1 = document.getElementById("panjang");
var lebar1 = document.getElementById("lebar");
var luas = document.getElementById("hasilluas");
var keliling = document.getElementById("hasilkeliling");

document.getElementById("hitung") function() {
    luas.ariaValueMax = parseInt(panjang1.ariaValueMax)*parseInt(lebar1.ariaValueMax);
    keliling.ariaValueMax = parseInt(panjang1.ariaValueMax)+parseInt(lebar1.ariaValueMax)+parseInt(panjang1.ariaValueMax)+parseInt(lebar1.ariaValueMax);
})
