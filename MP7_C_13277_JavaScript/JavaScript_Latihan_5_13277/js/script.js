function fn_ValForm(){
    var sMsg = "";
    var info = "";
    var cek = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (document.getElementById("nama").value == ""){
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (document.getElementById("email").value == ""||document.getElementById("email").value == cek){
    sMsg += "\n* Email tidak valid";
    }
    if (document.getElementById("umur").value == ""){
        sMsg += "\n* Anda belum mengisikan umur";
    }else if (document.getElementById("umur").value <= 17){
        alert("Anggota Pelajar\n");
    }else if(document.getElementById("umur").value <=70){
        alert("Anggota Umum");
    }else{
        sMsg += "\n* Anda melebihi batas umur";
    }

    if (document.getElementById("kategori").value == ""){
        sMsg += "\n* Anda belum memilih Kategori"
    }
    
    switch(document.getElementById("kategori").value){
            case "F":
                info = "Fiksi";
                break;
            case "N":
                info = "Non-Fiksi";
                break;
            case "J":
                info = "Jurnal Ilmiah";
                break;
    }

    if (sMsg != ""){
        alert("Peringatan:\n" + sMsg);
        return false;
    }else{
        alert("Terima kasih "+document.getElementById("nama").value+"! Anda terdaftar di Koleksi "+document.getElementById("kategori").value+" = "+info);
        return true;
    }
}