
var i = 0;
var j = 0;
var txt = 'NIT Silchar';
var txt1 = 'Model United Nations';
var speed = 80;
var speed1 = 85;
 window.onload = function typeWriter() {
   $('.text').addClass("Typed");
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
setTimeout(typeWriter1,2000);
   function typeWriter1()
    {
  if (j < txt1.length) {
    document.getElementById("text1").innerHTML += txt1.charAt(j);
    j++;
    setTimeout(typeWriter1, speed1);
  }
}

