var body= document.getElementById("gradient");
var colorInput1=document.getElementById("color1");
var colorInput2=document.getElementById("color2");
var btColor= document.getElementById("btColor");
var first_color;
var second_color;

colorInput1.addEventListener("input", changeGradient);
colorInput2.addEventListener("input", changeGradient);
btColor.addEventListener("click", randomColors);



function randomColors(){
	first_color=Math.floor(Math.random()*16777215).toString(16);
	second_color=Math.floor(Math.random()*16777215).toString(16);

	console.log("#"+first_color+" ... "+"#"+second_color);

	body.style.background="linear-gradient(to rignt, "+ "#"+first_color
	+", "+ "#"+second_color + ")";
} 

function changeGradient(){
	first_color=colorInput1.value;
	body.style.background="linear-gradient(to right, "+first_color
	+", "+colorInput2.value + ")";

	second_color=colorInput2.value;
	body.style.background="linear-gradient(to right, "+ first_color
	+", "+second_color+ ")";

}