const nama = "Ilham Daulah";
let usia = 15;

let biodata = document.getElementById('biodata')
console.log(biodata)

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja"
    }else if (usia > 18 && usia < 40) {
        generasi = "generasi dewasa"
    }else if (usia >= 40) {
        generasi = "generasi tua"
    }else if (usia > 2 && usia < 10) {
        generasi = "generasi bochield"
    }else {
        generasi = "generasi bayi";
    }

    return biodata.innerHTML = generasi;
    //console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
}

console.log(nama);
console.log(usia);

generateBiodata();