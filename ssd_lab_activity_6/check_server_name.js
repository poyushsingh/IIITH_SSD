let username=document.getElementById('servername')

username.addEventListener('input',validateuser)
function validateuser(){
    if(username.length <4){
        document.write("invalid");
    }
    else{
        document.write("valid");
    }
}
