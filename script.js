const inp=document.getElementById("number");
const btn=document.getElementById("convert-btn");
const output=document.getElementById("output");
btn.addEventListener('click',convert);
function convert()
{
  output.style.display="block"
  if(inp.value=="")
  output.innerHTML="Please enter a valid number"
  else if(inp.value[0]=="-")
  output.innerHTML="Please enter a number greater than or equal to 1";
  else if(parseInt(inp.value)>=4000){
    output.innerHTML="Please enter a number less than or equal to 3999";
  }
  else{
output.innerHTML=romancalc(parseInt(inp.value));
  }
  if(inp.value=="" || inp.value[0]=="-"||parseInt(inp.value)>=4000){
  output.style.background="pink";
  output.style.color="red"
  output.style.fontWeight=700;
  }
  else
  {
    output.style.background="#449b9b";
    output.style.color="rgb(242, 222, 222)";
    output.style.fontWeight=300;
  }
  
}
function romancalc(a){
  if(a>=1000)
return "M"+romancalc(a-1000);
if(a>=900)
return "CM"+romancalc(a-900);
if(a>=500)
return "D"+romancalc(a-500);
if(a>=400)
return "CD"+romancalc(a-400);
if(a>=100)
return "C"+romancalc(a-100);
if(a>=90)
return "XC"+romancalc(a-90);
if(a>=50)
return "L"+romancalc(a-50);
if(a>=40)
return "XL"+romancalc(a-40);
if(a>=10)
return "X"+romancalc(a-10);
if(a==9)
return "IX";
if(a>=5)
return "V"+romancalc(a-5);
if(a==4)
return "IV";
if(a>=1)
return "I"+romancalc(a-1);
if(a==0)
return ""
}