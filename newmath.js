function addition() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;

    var c = a + b;

    document.getElementById('result').innerHTML = a + " + " + b + " = " + c;
}