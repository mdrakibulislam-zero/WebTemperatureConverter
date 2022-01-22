var lastEdited = "celsius";

document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;

document.getElementById("celsius").onchange = function() {
  lastEdited = "celsius";
};
document.getElementById("fahrenheit").onchange = function() {
  lastEdited = "fahrenheit";
};
document.getElementById("kelvin").onchange = function() {
  lastEdited = "kelvin";
};

function convert(temp) {
    var celsius = document.getElementById("celsius").value;
    celsius = parseFloat(celsius);

    var fahrenheit = document.getElementById("fahrenheit").value;
    fahrenheit = parseFloat(fahrenheit);
    
    var kelvin = document.getElementById("kelvin").value;
    kelvin = parseFloat(kelvin);
    
    var conversionC;
    var conversionF;
    var conversionK;
    
    if (lastEdited === "celsius") {
        conversionF = celsius * 9 / 5 + 32;
        conversionK = celsius + 273;
        document.getElementById("fahrenheit").value = Math.round(conversionF);
        document.getElementById("kelvin").value = Math.round(conversionK);
    } 
    else if (lastEdited === "fahrenheit") {
        conversionC = (fahrenheit - 32) * 5 / 9;
        conversionK = conversionC + 273;
        document.getElementById("celsius").value = Math.round(conversionC);
        document.getElementById("kelvin").value = Math.round(conversionK);
    } 
    else if (lastEdited === "kelvin") {
        conversionC = kelvin - 273;
        conversionF = conversionC * 9 / 5 + 32;
        document.getElementById("celsius").value = Math.round(conversionC);
        document.getElementById("fahrenheit").value = Math.round(conversionF);
    }
    
    document.getElementById("celsius").innerHTML = conversionC;
    document.getElementById("fahrenheit").innerHTML = conversionF;
    document.getElementById("kelvin").innerHTML = conversionK;
}

function reset() {
    document.getElementById("celsius").value = 0;
    document.getElementById("fahrenheit").value = 0;
    document.getElementById("kelvin").value = 0;
}
