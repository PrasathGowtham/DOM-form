function createlable(tagname,attname,attvalue,content){
    var lab=document.createElement("tagname");
    lab.setAttribute(attname,attvalue);
    lab.innerHTML=content;
    return lab
}

function createinput(tag,types,cont){
var input=document.createElement("input");
input.setAttribute(types,cont);
return input;
}

function createbreak(braker){
    var nextline=document.createElement("br");
    return nextline;
}


var labelfirst=createlable("label","for","firstname","Firstname");
var breaker=createbreak("br");
var inputfirst=createinput("input","type","text");
var breaker1=createbreak("br");
var labellast=createlable("label","for","firstname","Lastname");
var breaker2=createbreak("br");
var inputlast=createinput("input","type","text");
var breaker3=createbreak("br");
var labelemail=createlable("label","for","email","Email");
var breaker4=createbreak("br");
var inputemail=createinput("input","type","text");
var breaker5=createbreak("br");
var label=createlable("label","for","number","Phonenumber");
var breaker6=createbreak("br");
var input=createinput("input","type","tel");
document.body.append(labelfirst,breaker,inputfirst,breaker1,labellast,breaker2,inputlast,breaker3,labelemail,breaker4,inputemail,breaker5,label,breaker6,input);