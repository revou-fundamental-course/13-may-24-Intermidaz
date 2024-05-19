function hitungLuas() {
    const alas = parseFloat(document.getElementById('nilai-alas').value);
    const tinggi = parseFloat(document.getElementById('nilai-tinggi').value);

    if(isNaN(alas) || isNaN(tinggi)) {
        alert("Please input a valid number");
        return;
    }

    const luas = (alas * tinggi) / 2;
    alert(`Nilai Luas Segitiga adalah ${luas}`);
}

let isArea = true;
// function toggleFormula() {
//     const button = document.getElementById('toggle-button');
//     if(isArea) {
//         button.innerHTML = 'Switch to Luas';
//     }
//     else {
//         button.innerHTML = 'Switch to Keliling';
//     }
//     isArea = !isArea;
// }

function toggleFormula() {
    console.log('the code run');
    const button = document.getElementById('toggle-button');
    const formulaSection = document.getElementById('formula-section');

    if(isArea) {
        button.innerHTML = '<u>Switch to Luas</u>';
        formulaSection.innerHTML = `
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIm7LtaLKGRtZ9EmSQYOws3F3_neUbuv6C_lnhcltzQ&s" alt="segitiga">
            <section>
                <p>Rumus Keliling Segitiga yaitu:</p>
                <p><b>K = a + b + c</b></p>
                <div>
                    <p>Dimana :</p>
                    <p>K = Keliling</p>
                    <p>a, b, c = Sisi-sisi segitiga</p>
                </div>
            </section>
        `;
        
    } else {
        button.innerHTML = '<u>Switch to Keliling</u>';
        formulaSection.innerHTML = `
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIm7LtaLKGRtZ9EmSQYOws3F3_neUbuv6C_lnhcltzQ&s" alt="segitiga">
            <section>
                <p>Rumus Luas Segitiga yaitu:</p>
                <p><b>L = 1/2 x a x t</b></p>
                <div>
                    <p>Dimana :</p>
                    <p>L = Luas</p>
                    <p>a = Alas</p>
                    <p>t = Tinggi</p>
                </div>
            </section>
        `;
    }

    isArea = !isArea;
}

function resetInput() {
    document.getElementById('nilai-alas').value = "";
    document.getElementById('nilai-tinggi').value = "";
}