var formnew = document.getElementById("form_new");
var create = document.createElement("form");
create.setAttribute("action", "");
create.setAttribute("method","post");
formnew.appendChild(create);

var header = document.createElement('h2');
header.innerHtml = "Form Creation";
create.appendChild(header);

var lb = document.createElement('br');
create.appendChild(lb);

var li = document.createElement('hr');
create.appendChild(li);

var label = document.createElement('label');
label.innerHTML = "First Name";
create.appendChild(label);

var inputel = document.createElement('input');
inputel.setAttribute("type", "text");
inputel.setAttribute("name","dname");
create.appendChild(inputel);

var submitel = document.createElement('input');
submitel.setAttribute("type","submit");
submitel.setAttribute("name","dsubmit");
submitel.setAttribute("value","submit");
create.appendChild(submitel);