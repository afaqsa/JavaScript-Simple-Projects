const calToFah = (cel) => Math.round(cel * (9 / 5) + 32);
const fahToCal = (fah) => Math.round((fah - 32) * 5 / 9);

const calculateTemp = () => {
    var numtemp = document.getElementById('temp').value;
    var conversion_in = document.getElementById('temp_diff');
    var convertvalue = temp_diff.options[conversion_in.selectedIndex].value;
    
    var result = document.getElementById('result');
    let temp;
    if (convertvalue == 'cel') {
        temp = calToFah(numtemp);
        result.innerHTML = `= ${temp}°Fahrenheit`;
    } else{
         temp = fahToCal(numtemp);
         result.innerHTML = `= ${temp}°Celsius`;
    }
    
}
