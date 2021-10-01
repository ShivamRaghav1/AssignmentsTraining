var nameone = "john";
var split = [];

var today = new Date();
console.log(today);
for(i = 0;i < nameone.length; i++){


    split.push(nameone.charAt(i));
    document.getElementById("nameprinter").innerHTML = split;
}