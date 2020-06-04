var slide=["slide1.jpg","slide2.jpg","slide3.jpg","slide4.jpg","slide5.jpg"];

setInterval(function(){
var source=random();
document.getElementById("slide1").src=source;


},2000);


function random()
{
	var i= Math.floor(Math.random() * slide.length);
	return slide[i];

}