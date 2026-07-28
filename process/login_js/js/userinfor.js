const userinfo = {id : "B0kuyaba", pw:"10302040"}
function login() {

    const input_id = document.getElementById("id").value
    const input_password = document.getElementById("pw").value
    // div
    const fail = document.getElementById("fail_login")
    const success = document.getElementById("success_login")
    // end div
    if (userinfo.id === input_id
        && userinfo.pw === input_password) {
        // css
        success.style.display = "block";
        fail.style.display = "none";
    } else {
        // css
        fail.style.display = "block";
        success.style.display = "none";
    }
}

document.getElementById("Login_box")
.addEventListener("click",login)