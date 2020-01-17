
var i = 0;
var j = 0;
var txt = 'Model United Nations';
var txt1 = '14 . 15 . 16 Feb 2020';
var speed = 100;
var speed1 = 100;
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

