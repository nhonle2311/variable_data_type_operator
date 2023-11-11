function transform(){

    console.log('transform');
    let currency = document.getElementById('currency').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let resultElement = document.getElementById('result');

    if (!currency) alert('Please input currency');
    resultElement.value = currency / from * to;
