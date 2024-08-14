let length;
let width;

function calculateArea()
{
    length=parseFloat(document.getElementById("length").value);
    width=parseFloat(document.getElementById("width").value);
    let result=length*width;
    document.getElementById("result").innerHTML="The calculated area is:${result}";
}