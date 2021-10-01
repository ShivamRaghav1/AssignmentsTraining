function checkfirstname(){
    var elMsg = document.getElementById('feedback');

    if(this.value.length < 5){
        elMsg.textContent = "firstname must be more than 5 character";
    }else{
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById('firstname');
elUsername.onblur = checkfirstname;

function checklastname(){
    var elMsg = document.getElementById('feed');

    if(this.value.length < 5){
        elMsg.textContent = "lastname must be more than 5 character";
    }else{
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById('lastname');
elUsername.onblur = checklastname;

function checkEmail(){
    var elMsg = document.getElementById('feedback3');

    if(this.value.length < 5){
        elMsg.textContent = "Email must be more than 5 character";
    }else{
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById('Email');
elUsername.onblur = checkEmail;



function checkphone(){
    var elMsg = document.getElementById('feedback3');

    if(this.value.length < 5){
        elMsg.textContent = "phone must be 10 digit";
    }else{
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById('phone');
elUsername.onblur = checkphone;