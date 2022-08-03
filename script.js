var sandeep=document.createElement("div");
var span=document.createElement("span");
var para=document.createElement("p");
para.innerHTML="hellow world hi new to world";
span.append(para);
sandeep.append(span);
document.body.append(sandeep);

var ele=document.createElement("div");
var span=document.createElement("span");
var p=document.createElement("p");
p.innerHTML="this is p";
span.append(p);
ele.append(span);
document.body.append(ele);


var ele=document.createElement("div");
var span=document.createElement("span");
span.innerHTML="<p>this is p </p>";
ele.append(span);
document.body.append(ele);


const message = function() {  
    console.log("This message is shown after 3 seconds");
}
setTimeout(message, 3000);
