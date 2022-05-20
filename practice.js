let RGB = ['red','blue','green','yellow','brown'];
//document.querySelector('body').style.backgroundColor = RBG[0];
const button =document.querySelector('button');
button.addEventListener("click", change_color);
function change_color(){
  for(i=0; i<RGB.length; i++){
     document.querySelector('body').style.backgroundColor =RGB[Math.floor(Math.random()* RGB.length)];
   }
};