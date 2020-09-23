function $() 
{var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 

function js1_f0()
{
$('m1').style.backgroundAttachment='scroll';
}

function js1_f1()
{
$('b1').style.borderBottomWidth="25px";
}

function js1_f2()
{
$('b1').style.borderRightWidth="48px";
}

function js1_f3()
{
$('b2').style.color="red";
}

function js1_f4()
{
$('m1').style.height="400px";
}

function js1_f5()
{
$('m1').style.marginBottom="-10px";
}

function js1_f6()
{
$('b4').style.paddingTop="50px";
}

function js1_f7()
{
$('n1').style.textDecorationNone;
}
