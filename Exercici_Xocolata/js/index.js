function obrirFormulari(){
    let pestanya = window.open("xocolata.html");

    pestanya.addEventListener("unload", function (){
        document.getElementById("table").innerText = " ";
        loadDades();
    })
}

function loadDades() {

    let n = document.getElementById("horitzontalValue").value;

    let m = document.getElementById("verticalValue").value;

    let r = document.getElementById("quadretsValue").value;

    var numerorajoles = (r / (n * m));

    numerorajoles = Math.ceil(numerorajoles);

    let div = document.getElementById("table");
    let h1 = document.createElement("h1");
    h1.textContent = "Vols " + r + " peces de xocolata. " +
        " Necessites " + numerorajoles + " rajoles de " + n + " * " + m;

    div.appendChild(h1);

    for (let i = 0; i < numerorajoles; i++) {

        let table = document.createElement("table");
        table.className = "rajola";

        for (let j = 0; j < n; j++) {
            let row = document.createElement("tr");
            for (let k = 0; k < m; k++) {
                let td = document.createElement("td");
                td.className = "quadret";
                row.appendChild(td);

            }
            table.appendChild(row);
        }
        div.appendChild(table);
    }
}