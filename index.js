function calculator() {
    const getValue = (id) => {
        return Number(ocument.getElementById(id).value);
    }

    const physics = getValue("physics");
    const chemistry = getValue("chemistry");
    const biology = getValue("biology");
    let result = document.getElementById('result');
    result.innerText = (physics + chemistry + biology) / 3;
}