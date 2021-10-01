function checkUsername(){
    var elMsg = document.getElementById('feedback');

    if(this.value.length < 5){
        elMsg.textContent = "username must be more than 5 character";
    }else{
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;