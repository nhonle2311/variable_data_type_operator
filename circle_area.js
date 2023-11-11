function Calculate(){
    let Radius = document.getElementById('Radius').value;
    let S = Math.PI * Math.pow(Radius, 2);
    document.getElementById('Result').innerHTML = "Result" + S;
}