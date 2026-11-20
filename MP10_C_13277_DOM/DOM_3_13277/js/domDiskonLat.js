var totalNode;
var hematNode;

function init() {
    totalNode = document.getElementById("totalBayar").firstChild;
    hematNode = document.getElementById("infoHemat").firstChild;
    hitungTotal();
}

function hitungTotal() {
    var harga = parseFloat(document.getElementById("harga").value);
    var diskon = parseFloat(document.getElementById("diskon").value);
    var totalSpan = document.getElementById("totalBayar");

    if (isNaN(diskon) || diskon < 0 || diskon > 100) {
        // Diskon tidak valid: teks merah, penghematan Rp0
        totalNode.data = "Diskon tidak valid!";
        totalSpan.style.color = "red";
        hematNode.data = "Anda hemat: Rp0";
    } else {
        // Diskon valid (0 - 100): teks hijau, tampilkan total & penghematan
        var potongan = harga * (diskon / 100);
        var akhir = harga - potongan;

        totalNode.data = akhir;
        totalSpan.style.color = "green";
        hematNode.data = "Anda hemat: Rp" + potongan;
    }
}
