function tencarPestanya(){
    let horitzontal = document.getElementById("horitzontal").value;
    let vertical = document.getElementById("vertical").value;
    let quadrets = document.getElementById("quadrets").value;

    let daddy=window.opener;
    if (daddy){
        daddy.document.getElementById('horitzontalValue').value=`${horitzontal}`;
        daddy.document.getElementById('verticalValue').value=`${vertical}`;
        daddy.document.getElementById('quadretsValue').value=`${quadrets}`;
        window.close();
    }
}