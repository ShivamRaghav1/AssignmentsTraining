function Email() {
    var elMsg = document.getElementById('email');
    var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{​|}​~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.value.match(valid)) {
        elMsg.textContent = "";
    }
    else {
        elMsg.textContent = "Email should be in right format";
    }
}
var elUsername = document.getElementById("Email1");
elUsername.onblur = Email;
